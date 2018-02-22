import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import resolvers from './resolvers'

// NOTE HOW I COMBINED QUERIES
const typeDefs = 
`type Author {
  id: String
  name: String
  age: Int
  books: [String]
}

type Query {
  authors: [Author]
  authorsByAge(age: Int): [Author]
  author(id: String): Author
}

type Mutation {
  addAuthor(name: String!, age: Int!, books: [String]!): Author
  deleteAuthor(id: String!): Author
  updateAuthorName(id: String!, name: String!): Author
}
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export default schema