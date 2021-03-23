"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const user_1 = __importDefault(require("./user"));
http_1.createServer((req, res) => {
    const klaus = new user_1.default('Klaus', 'Müller');
    res.end(klaus.getFullname());
}).listen(8081);
