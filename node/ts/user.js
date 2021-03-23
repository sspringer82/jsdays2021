"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}
exports.default = User;
