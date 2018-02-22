import uuid from 'node-uuid'
import mongoose from 'mongoose'
const schema = mongoose.Schema

const authorSchema = new schema({
  // id, name, age, books

  id: {type: String, default: uuid.v1},
  name: String,
  age: Number,
  books: [String]

})

const model = mongoose.model('author', authorSchema)
export default model