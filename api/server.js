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



io.on("connection", function(socket){
    console.log("connected");
    socket.on("message", (message) => {
        console.log(socket.emit("messageReceived", message));
        console.log(message);
    })

    socket.on("register", (user) => {
        registeredUsers.push(new User(user.id, user.pseudo, user.password, user.email));
        console.log(registeredUsers);
    })
})

const server = http.listen(3000, function() {
  console.log("listening on *:3000");
});