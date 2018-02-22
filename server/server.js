import express from 'express'
import bodyParser from 'body-parser'
import schema from './schema'
import mongoose from 'mongoose'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
const server = express()

const db = 'mongodb://localhost:27017/graphAuthors';
mongoose.Promise = global.Promise;
mongoose.connect(db, {});

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.use( '/graphql', bodyParser.json(), graphqlExpress({schema}) )

server.listen( 4000, () => {
  console.log('listening on port 4000')
})