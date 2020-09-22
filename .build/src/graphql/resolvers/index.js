"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helloResolvers_1 = __importDefault(require("./helloResolvers"));
const userResolvers_1 = __importDefault(require("./userResolvers"));
exports.default = {
    Query: Object.assign(Object.assign({}, helloResolvers_1.default.Query), userResolvers_1.default.Query),
    Mutation: Object.assign(Object.assign({}, helloResolvers_1.default.Mutation), userResolvers_1.default.Mutation)
};
//# sourceMappingURL=index.js.map