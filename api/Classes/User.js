 class User {
    constructor(pseudo, email, password) {
        this.id = self.crypto.randomUUID;
        this.pseudo = pseudo;
        this.email = email;
        this.password = password;
    }
}

module.exports = User;