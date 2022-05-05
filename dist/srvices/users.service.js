"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = void 0;
const axios_1 = __importDefault(require("axios"));
exports.usersService = {
    getAll: () => axios_1.default.get('https://jsonplaceholder.typicode.com/users'),
    getById: (id) => axios_1.default.get('https://jsonplaceholder.typicode.com/users/' + `${id}`)
};
//# sourceMappingURL=users.service.js.map