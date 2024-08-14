import express from "express";
import { createServer } from "http";
import { join } from "path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
app.use(express.static(join(__dirname, "../../../client/dist")));

app.get("/", (req, res) => {
  console.log(__dirname)
  res.sendFile("index.html");
});

const io = new Server(server, {
  cors: {
    origin: "https://localhost:5173",
  },
});

app.listen(8080);

io.listen(3001);
