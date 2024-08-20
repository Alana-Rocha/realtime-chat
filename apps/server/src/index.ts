import express from "express";
import { createServer } from "http";
import { join } from "path";
import { Server } from "socket.io";

const PORT = 3001;
const app = express();
const server = createServer(app);
app.use(express.static(join(__dirname, "../../../client/dist")));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile("index.html");
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("usuário conectado!", socket.id);
  socket.on("set_username", (username) => {
    socket.data.username = username;
    console.log(socket.data.username);
  });
});

server.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}...`));
