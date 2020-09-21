import { setHelloArgs } from '../../types/args/helloArgs'

export default {
  Query: {
    getHello: (): string => {
      return 'hello world'
    }
  },
  Mutation: {
    setHello: (_: any, args: setHelloArgs ): string => {
      const { hello } = args
      return hello + 'world'
    }
  }
}