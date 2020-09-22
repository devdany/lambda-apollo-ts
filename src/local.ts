import { ApolloServer }  from 'apollo-server';
import sequelize from './sequelize'
import schema from './schema';

sequelize.authenticate()
  .then(() => {
    console.log('db Connection success!')
  })
  .catch((err: any) => {
    if (err) throw err
  })
sequelize.sync({ force: false })

const server = new ApolloServer({
  schema
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});