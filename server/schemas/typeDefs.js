/* If you encounter errors with this file, try: 
const gql = require('graphql-tag'); instead? */
const { gql } = require('apollo-server');

const typeDefs = gql`
type Patient{
    _id: ID
    name: String!
    dob: Date!
    allergies: [String]
    prescriptions: [String]
}

type Physician{
    _id: ID
    name: String!
    streetAdress: String!
    city: String!
    state: String!
    zip: String!
    patients: [Patient]
}

type Pharmacist{
    _id: ID
    name: String!
    streetAdress: String!
    city: String!
    state: String!
    zip: String!
}

`

module.exports = typeDefs;