import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import 'dotenv/config';
import { createClient  } from "@supabase/supabase-js";   

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, { cors: {origin: '*'}});
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

  });

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});