 class User {
    constructor(id, pseudo, email, password) {
        this.id = id;
        this.pseudo = pseudo;
        this.email = email;
        this.password = password;
    }

    static getUserByName(pseudo, array) {
        return array.find(user => user.pseudo === pseudo);
    }

}

module.exports = User;