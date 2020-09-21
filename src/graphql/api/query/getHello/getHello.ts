
type args = {

}

export default {
  Query: {
    getHello: async (_: any, args: args, pubsub: any) => {
      return 'hello world'
    },
  },
}