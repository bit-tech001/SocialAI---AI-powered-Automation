import { io } from "socket.io-client";
import { exec } from "child_process";

const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("command", (data: { type: string }) => {
  console.log("Received:", data);

  switch (data.type) {
    case "shutdown":
      exec("shutdown /s /t 0");
      break;

    case "restart":
      exec("shutdown /r /t 0");
      break;

    case "lock":
      exec("rundll32.exe user32.dll,LockWorkStation");
      break;

    default:
      console.log("Unknown command");
  }
});