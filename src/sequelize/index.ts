import { Op } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'
import User from './model/User'
import storageConfig from '../config/storage'

const dbConnectConfig = storageConfig.deveopment

const sequelize = new Sequelize({
  repositoryMode: true,
  dialect: 'mysql',
  host: dbConnectConfig.host,
  username: dbConnectConfig.username,
  password: dbConnectConfig.password,
  database: dbConnectConfig.schema,
  models: [User],
  operatorsAliases: {
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $gt: Op.gt,
    $gte: Op.gte,
    $lt: Op.lt,
    $lte: Op.lte,
    $like: Op.like,
    $ne: Op.ne,
    $notIn: Op.notIn,
  },
  logging: false,
})
export const connect = () => {
  sequelize.authenticate()
  .then(() => {
    console.log('db Connection success!')
  })
  .catch((err: any) => {
    if (err) throw err
  })
sequelize.sync({ force: false })
}
export default sequelize