"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = __importDefault(require("./model/User"));
const storage_1 = __importDefault(require("../config/storage"));
const dbConnectConfig = storage_1.default.deveopment;
const sequelize = new sequelize_typescript_1.Sequelize({
    repositoryMode: true,
    dialect: 'mysql',
    host: dbConnectConfig.host,
    username: dbConnectConfig.username,
    password: dbConnectConfig.password,
    database: dbConnectConfig.schema,
    models: [User_1.default],
    operatorsAliases: {
        $and: sequelize_1.Op.and,
        $or: sequelize_1.Op.or,
        $eq: sequelize_1.Op.eq,
        $gt: sequelize_1.Op.gt,
        $gte: sequelize_1.Op.gte,
        $lt: sequelize_1.Op.lt,
        $lte: sequelize_1.Op.lte,
        $like: sequelize_1.Op.like,
        $ne: sequelize_1.Op.ne,
        $notIn: sequelize_1.Op.notIn,
    },
    logging: false,
});
exports.connect = () => {
    sequelize.authenticate()
        .then(() => {
        console.log('db Connection success!');
    })
        .catch((err) => {
        if (err)
            throw err;
    });
    sequelize.sync({ force: false });
};
exports.default = sequelize;
//# sourceMappingURL=index.js.map