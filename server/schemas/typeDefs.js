
const { gql } = require('apollo-server');

const typeDefs = gql`
type Patient{
    _id: ID!
    physician:[User]!
    firstName: String!
    lastName: String!
    dob: String!
    allergies: [String]
    prescriptions: [Prescription]
}
"User is a Physician or Pharmacy that is defined by its userType field"
type User{
    _id: ID!
    userType: String!
    firstName: String!
    lastName: String!
    email: String!
    streetAdress: String!
    city: String!
    state: String!
    zip: String!
    patients: [Patient]
}

type Prescription{
    prescriptionID: ID!
    name: String!
    interactionCode: String!
    category: String!
}

type Auth{
    token: ID!
    user: User
}


type Query{
    users: [User]
    currentUser: User
    prescriptionByCategory(category: String!): [Prescription]
    pharmacyByCity(city: String!) : [User]
    patientLookUp(firstName: String!, lastName: String!) : [Patient]

}

type Mutation {
    addUser(
    userType: String!, 
    firstName: String!, 
    lastName: String!,
    email: String!,
    password: String!,
    streetAdress: String!,
    city: String!,
    state: String!,
    zip: String!
    ) : Auth

    addPatient(
        firstName: String!,
        lastName: String!,
        dob: String!
        allergies:[String],
        physician:ID!
        prescriptions:[String],
        ) : Patient
    # addPrescription(prescription:[String]) : Patient
    # addAllergies(allergies:[String]) : Patient

    login
    (email: String!,
    password: String!
    ): Auth
    # docLogin(email: String!, password: String!): Auth
    # pharmLogin(email:String!, password: String!): Auth
}
`

module.exports = typeDefs;