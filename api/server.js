const app = require('express')();
const User = require('./Classes/User.js');
const ChatMessage = require('./Classes/ChatMessage.js');

const registeredUsers = [];
const registeredMessages = [];

app.set("port", process.env.PORT || 3000);

var http = require("http").Server(app);
var io = require("socket.io")(http, {
    cors: {
        origin : "*",
    }
});

io.on("connection", function(socket){
    console.log("connected");
    socket.on("messageSent", (message) => {
        registeredMessages.push(new ChatMessage(User.getUserById("99904c9d-6d8c-4890-ba30-fa5ebcbb5cc5", registeredUsers)))
        console.log(socket.emit("messageReceived", message));
        console.log(registeredMessages);

    })

    socket.on("register", (user) => {
        registeredUsers.push(new User(user.id, user.pseudo, user.password, user.email));
        console.log(registeredUsers);
    })

    socket.on("login", (credentials) => {
        let foundUser = User.getUserByName(credentials.pseudo, registeredUsers);
        if(foundUser && credentials.password === foundUser.password){
            socket.emit('checkedUser', foundUser);
        }
    })
    
})

const server = http.listen(3000, function() {
  console.log("listening on *:3000");
});