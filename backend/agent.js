const io = require("socket.io-client");
const { exec } = require("child_process");

const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("Agent Connected");
});

socket.on("command", (data) => {
  console.log("Received:", data);

  if (data.type === "shutdown") {
    exec("shutdown /s /t 0");
  }

  if (data.type === "restart") {
    exec("shutdown /r /t 0");
  }

  if (data.type === "lock") {
    exec("rundll32.exe user32.dll,LockWorkStation");
  }
});