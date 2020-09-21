
type args = {
  hello: string
}

export default {
  Mutation: {
    setHello: async (_: any, args: args, pubsub: any) => {
      const { hello } = args
      return hello + '-world'
    },
  },
}