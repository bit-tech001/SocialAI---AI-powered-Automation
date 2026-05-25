import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("PC Agent Connected");

  socket.on("disconnect", () => {
    console.log("Agent Disconnected");
  });
});

app.get("/shutdown", (_, res) => {
  io.emit("command", {
    type: "shutdown",
  });

  res.json({
    message: "Shutdown command sent",
  });
});

app.get("/restart", (_, res) => {
  io.emit("command", {
    type: "restart",
  });

  res.json({
    message: "Restart command sent",
  });
});

app.get("/lock", (_, res) => {
  io.emit("command", {
    type: "lock",
  });

  res.json({
    message: "Lock command sent",
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});