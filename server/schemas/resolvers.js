const { Tech, Matchup } = require("../models");

const resolvers = {
  Query: {
    tech: async () => {},
    matchups: async (parent, { _id }) => {},
  },
  Mutation: {
    createMatchup: async (parent, args) => {},
    createVote: async (parent, { _id, techNum }) => {},
  },
};

module.exports = resolvers;
