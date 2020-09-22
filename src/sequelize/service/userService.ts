
import User from '../model/User'
import sequelize from '../index'

const userRepository = sequelize.getRepository(User)

export default {
  createUser: (email: string, password: string, username: string) => {
    const today = Date.now()
    return userRepository.create({
      email: email,
      password: password,
      username: username,
      createdAt: today,
      isInitalize: false,
      lastLogin: false,
    })
  },
  findUser: (userId: number) => {
    return userRepository.findOne({
      where: {
        id: userId
      }
    })
  }
}