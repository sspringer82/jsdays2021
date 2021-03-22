"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
let n = 42;
n = 'foo';
const klaus = new user_1.default('Klaus', 'Müller');
klaus.greet();
function sayHello(user) {
    console.log('Hello', user.getFullname());
}
sayHello(klaus);
