"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Query: {
        getHello: () => {
            return 'hello world';
        }
    },
    Mutation: {
        setHello: (_, args) => {
            const { hello } = args;
            return hello + 'world';
        }
    }
};
//# sourceMappingURL=index.js.map