"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helloResolvers_1 = __importDefault(require("./helloResolvers"));
exports.default = {
    Query: Object.assign({}, helloResolvers_1.default.Query),
    Mutation: Object.assign({}, helloResolvers_1.default.Mutation)
};
//# sourceMappingURL=index.js.map