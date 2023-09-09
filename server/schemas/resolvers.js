const { User } = require("../models");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {},
  },
  Mutation: {
    login: async (parent, args) => {},
    addUser: async (parent, args) => {
      const user = await User.create(args);
      if (!user) {
        return;
      }
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, args) => {},
    removeBook: async (parent, args) => {},
  },
};

module.exports = resolvers;
