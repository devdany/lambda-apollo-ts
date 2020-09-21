"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const types_1 = __importDefault(require("./graphql/types"));
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs: types_1.default,
    resolvers: resolvers_1.default,
});
//# sourceMappingURL=schema.js.map