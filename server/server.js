import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import 'dotenv/config';
import { createClient  } from "@supabase/supabase-js";   
import { randomUUID } from "node:crypto";

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, { 
    cors: {origin: '*'},
    maxHttpBufferSize: 6e6, // ~6 MB
});
const allowed_types = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const max_bytes = 5 * 1024 * 1024;
const PORT = process.env.PORT || 3000;
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
console.log(process.env.SUPABASE_URL);


io.on("connection", async(socket) => {
    console.log("user connected");

    io.emit("users", io.engine.clientsCount);

    socket.on("getUsers", () => {
        io.emit("users", io.engine.clientsCount);
    });

    socket.on("disconnect", () => {
        io.emit("users", io.engine.clientsCount); // someone left
    });

    const{data, error} = await supabase
        .from('entries')
        .select('*')
        .order('created_at');
        if (error) console.error(error);
        socket.emit('init', data ?? []);

    socket.on("new_entry", async(entry) => {
        console.log("image?", !!entry.image, entry.image_type);
        let image_url = null;
        let image_path = null;
        if(entry.image){
            if(!allowed_types.includes(entry.image_type) || entry.image.length > max_bytes){
                return socket.emit("entry_error", "Image must be a JPG, PNG, WebP or GIF under 5 MB.");
            }
            image_path = `${randomUUID()}.${entry.image_type.split("/")[1]}`;

            const { error: uploadError } = await supabase.storage
                .from('entry-photos')
                .upload(image_path, entry.image, { contentType: entry.image_type });
            
            if (uploadError) return console.error(uploadError);

            image_url = supabase.storage
                .from('entry-photos')
                .getPublicUrl(image_path).data.publicUrl;
        }

        const {data, error} = await supabase
            .from('entries')
            .insert({
                author: entry.author,
                body: entry.body,
                client_id: entry.client_id,
                image_url,
                image_path
            })
            .select()
            .single();
        if (error) return console.error(error);
        io.emit("new_entry", data)
    });

    socket.on("delete_entry", async ({id, client_id}) => {
        const { data, error } = await supabase
            .from('entries')  
            .delete()
            .eq('id', id)
            .eq('client_id', client_id)
            .select();
        if (error) return console.error(error);
        if(data && data.length > 0){
            if(data[0].image_path){
                await supabase.storage.from('entry-photos').remove([data[0].image_path]);
            }
        }
        io.emit('delete_entry', id);
    });

  });

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});