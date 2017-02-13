var express = require("express");
var path = require("path");
var app = express();

var server = require("http").Server(app);
var io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "./public")));

app.get("/hand", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/hand/index.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/table/index.html"));
});

server.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

io.on("connection", function(socket) {
  socket.on("send-to-hand", function(data) {
    console.log("send-to-hand");
    socket.broadcast.emit("receive-from-table", 1);
  });
  socket.on("send-to-table", function(data) {
    console.log("send-to-table");
    socket.broadcast.emit("receive-from-hand", 1);
  });
  socket.on("receive-from-table", function(data) {
    console.log("receive-from-table");
    socket.broadcast.emit("send-to-hand", 1);
  });
  socket.on("receive-from-hand", function(data) {
    console.log("receive-from-hand");
    socket.broadcast.emit("send-to-table", 1);
  });
});
