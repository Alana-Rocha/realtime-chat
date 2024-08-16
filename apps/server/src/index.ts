import express from "express";
import { createServer } from "http";
import { join } from "path";
import { Server, Socket } from "socket.io";

const PORT = 3001;
const app = express();
const server = createServer(app);
app.use(express.static(join(__dirname, "../../../client/dist")));

// app.get("/", (req, res) => {
//   console.log(__dirname);
//   res.sendFile("index.html");
// });

const io = new Server(server, {
  cors: {
    origin: "https://localhost:5173",
  },
});

io.on('connection', Socket => {
  console.log('usuário conectado!')
})


server.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}...`));

// app.listen(8080, () => console.log("Servidor iniciado na porta 8080"));

// io.listen(3001);
