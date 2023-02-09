 class User {
    constructor(id, pseudo, email, password) {
        this.id = id;
        this.pseudo = pseudo;
        this.email = email;
        this.password = password;
    }

    static getUserById(id, searchArray) {
        return searchArray.find(user => user.id == id)
    }
}

module.exports = User;