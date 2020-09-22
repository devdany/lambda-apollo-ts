"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../../../sequelize/service/userService"));
exports.default = {
    Query: {
        getUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { userId } = args;
                const user = yield userService_1.default.findUser(userId);
                return {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    createdAt: user.createdAt,
                    isInitalize: user.isInitalize,
                };
            }
            catch (err) {
                throw new Error(err);
            }
        })
    },
    Mutation: {
        setUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { email, username, password } = args;
                const createdUser = yield userService_1.default.createUser(email, password, username);
                return {
                    id: createdUser.id,
                    email: createdUser.email,
                    username: createdUser.username,
                    createdAt: createdUser.createdAt,
                    isInitalize: createdUser.isInitalize,
                };
            }
            catch (err) {
                throw new Error(err);
            }
        })
    }
};
//# sourceMappingURL=index.js.map