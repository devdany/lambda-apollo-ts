"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const mutation_1 = __importDefault(require("./mutation"));
const query_1 = __importDefault(require("./query"));
exports.default = apollo_server_1.gql `
  ${mutation_1.default}
  ${query_1.default}
`;
//# sourceMappingURL=index.js.map