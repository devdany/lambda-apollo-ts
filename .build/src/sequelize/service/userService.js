"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../model/User"));
const index_1 = __importDefault(require("../index"));
const userRepository = index_1.default.getRepository(User_1.default);
exports.default = {
    createUser: (email, password, username) => {
        const today = Date.now();
        return userRepository.create({
            email: email,
            password: password,
            username: username,
            createdAt: today,
            isInitalize: false,
            lastLogin: false,
        });
    },
    findUser: (userId) => {
        return userRepository.findOne({
            where: {
                id: userId
            }
        });
    }
};
//# sourceMappingURL=userService.js.map