"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const mutation_1 = __importDefault(require("./mutation"));
const query_1 = __importDefault(require("./query"));
const model_1 = __importDefault(require("./model"));
const graphql = apollo_server_1.gql `
${model_1.default}
${mutation_1.default}
${query_1.default}
`;
exports.default = graphql;
//# sourceMappingURL=index.js.map