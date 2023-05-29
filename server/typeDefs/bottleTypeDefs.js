const { gql } = require("apollo-server");

const bottleTypeDefs = gql`
  type Bottle {
    id: ID!
    name: String!
    price: Float!
    year: Int!
    quality: String!
    ref: String!
  }

  type Query {
    getBottles: [Bottle!]!
  }
`;

module.exports = bottleTypeDefs;