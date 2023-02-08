const app = require('express')();
const User = require('./Classes/User.js');

const registeredUsers = [];

app.set("port", process.env.PORT || 3000);

var http = require("http").Server(app);
var io = require("socket.io")(http, {
    cors: {
        origin : "*",
    }
});

io.on("register", (user) => {
    const test = new User(user);
    console.log(test);
})

io.on("connection", function(socket){
    console.log("connected");
    socket.on("message", (message) => {
        console.log(socket.emit("messageReceived", message));
        console.log(message);
    })
})

const server = http.listen(3000, function() {
  console.log("listening on *:3000");
});