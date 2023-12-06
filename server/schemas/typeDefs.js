const { gql } = require('apollo-server');

const typeDefs = gql`

type Pharmacist{
    _id: ID
    name: String
    
}

`

module.exports = typeDefs;