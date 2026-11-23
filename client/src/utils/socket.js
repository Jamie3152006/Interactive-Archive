import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_SERVER_URL || "http://localhost:3000");

function getClientId(){
    try{
        let id = localStorage.getItem("client_id");
        if (!id) {
            id = crypto.randomUUID();
            localStorage.setItem("client_id", id);
        }
        return id;
    } catch {
        return "anonymous";
    }
}

export const clientId = getClientId();

export function sendEntry(author, body, file){
    socket.emit("new_entry", {author, body, client_id: clientId, image: file || null, image_type: file ? file.type: null});
    socket.emit("get_entries");
}

export function deleteEntry(id){
    socket.emit("delete_entry", {id, client_id: clientId});
}
