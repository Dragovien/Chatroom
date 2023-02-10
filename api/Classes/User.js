 class User {
    constructor(id, pseudo, password, email, socketId) {
        this.id = id;
        this.pseudo = pseudo;
        this.email = email;
        this.password = password;
        this.socketId = socketId;
    }

    static getUserByName(pseudo, array) {
        return array.find(user => user.pseudo === pseudo);
    }

    static getUserById(id, searchArray) {
        return searchArray.find(user => user.id == id)
    }

    static getUserBySocketId(socketId, searchArray) {
        return searchArray.find(user => user.socketId == socketId)
    }
}

module.exports = User;