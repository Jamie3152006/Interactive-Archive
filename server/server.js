import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, { cors: {origin: '*'}});
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});