import { getUserArgs, setUserArgs } from '../../types/args/userArgs'
import { User } from '../../types/res/userRes'
import userService from '../../../sequelize/service/userService'

export default {
  Query: {
    getUser: async (_: any, args: getUserArgs ): Promise<User> => {
      try {
        const { userId } = args
        const user = await userService.findUser(userId)
        
        if (!user) {
          throw new Error('존재하지 않는 사용자입니다.')
        }
        
        return {
          id: user.id,
          email: user.email,
          username: user.username,
          createdAt: user.createdAt,
          isInitalize: user.isInitalize,
        }
      } catch (err) {
        throw new Error(err)
      }
    }
  },
  Mutation: {
    setUser: async (_: any, args: setUserArgs ): Promise<User> => {
      try {
        const { email, username, password } = args
        const createdUser = await userService.createUser(email, password, username)
        return {
          id: createdUser.id,
          email: createdUser.email,
          username: createdUser.username,
          createdAt: createdUser.createdAt,
          isInitalize: createdUser.isInitalize,
        }
      } catch (err) {
        throw new Error(err)
      }
      
    }
  }
}