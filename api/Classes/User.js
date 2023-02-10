 class User {
    constructor(id, pseudo, email, password) {
        this.id = id;
        this.pseudo = pseudo;
        this.email = email;
        this.password = password;
        this.socketId = null;
    }

    static getUserByName(pseudo, array) {
        return array.find(user => user.pseudo === pseudo);
    }


    static getUserById(id, searchArray) {
        return searchArray.find(user => user.id == id)
    }
}

module.exports = User;