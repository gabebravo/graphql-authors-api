import mongoose from 'mongoose'
import Author from './models/author'

export const resolvers = {

  Query: { 

    author: (root, { id }) => {
      return Author.findOne({ id: id })
    },

    authors: () => Author.find({}),

    authorsByAge: (root, { age }) => Author.find({ age }),

  },

  Mutation: {

    addAuthor: (root, { name, age, books }) => {
      const author = new Author({ name, age, books })
      return author.save();
    }, 

    deleteAuthor: (root, { id }) => {
      return Author.remove({ id })
    }, 

    updateAuthorName: (root, { id, name }) => {
      return Author.findOneAndUpdate({ id }, { name })
    }, 

  }
}

export default resolvers

// MORE ROBUST VERSION OF THE QUERY ABOVE - A LITTLE MORE CLEAR
// Query: { // root is almost never used, but args is used a lot
  //   author: (root, args) => {
  //     const age = args.age
  //     return authors.find( author => author.age === age )
  //   } 
  // }

