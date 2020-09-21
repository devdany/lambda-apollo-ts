"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlHandler = void 0;
const apollo_server_lambda_1 = require("apollo-server-lambda");
const schema_1 = __importDefault(require("./schema"));
const server = new apollo_server_lambda_1.ApolloServer({
    schema: schema_1.default
});
const options = {
    cors: {
        origin: '*',
        credentials: false,
    },
    endpointURL: '/graphql',
};
exports.graphqlHandler = server.createHandler(options);
//# sourceMappingURL=index.js.map