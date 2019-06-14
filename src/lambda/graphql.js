const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return 'Hello, world!'
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // CREATE A PR AND ADD THIS TO DOCS https://spectrum.chat/zeit/general/apollo-server-get-query-missing~ae8d5ca5-2faf-4c8d-8097-c3f6e25cad56
  introspection: true, // enables introspection of the schema
  playground: true, // enables the actual playground
})

exports.handler = server.createHandler()
