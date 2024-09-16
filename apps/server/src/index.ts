import console from "console";
import express from "express";
import { createServer } from "http";
import path, { join } from "path";
import { Server } from "socket.io";

const PORT = 3001;
const app = express();
const server = createServer(app);
app.use(express.static(join(__dirname, "../../../client/dist")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("usuário conectado!", socket.id);
  socket.on("disconnect", (reason) => {
    console.log("Usuário desconectado!", socket.id);
  });

  socket.on("set_username", (username) => {
    socket.data.username = username;
    console.log(socket.data.username);
  });

  socket.on("message", (text) => {
    io.emit("receive_message", {
      text,
      authorId: socket.id,
      author: socket.data.username,
    });
  });
});

server.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}...`));
