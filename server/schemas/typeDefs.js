const { gql } = require('apollo-server');

const typeDefs = gql`
type Patient{
    _id: ID!
    physician:[User]
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
    streetAddress: String!
    city: String!
    state: String!
    zip: String!
    patients: [Patient]
}

type Prescription{
    _id: ID!
    medication: String!
    dosage: String!
    frequency: String!
    duration: String!
    refills: String!
    notes: String!
}

type Auth{
    token: ID!
    user: User
}

type Query{
    users: [User]
    currentUser: User
    prescriptions:  [Prescription]
    prescriptionByCategory(category: String!): [Prescription]
    pharmacyByCity(city: String!) : [User]
    patientLookUp(firstName: String!, lastName: String!) : [Patient]
    patients:[Patient]
}

type Mutation {
    addUser(
    userType: String!, 
    firstName: String!, 
    lastName: String!,
    email: String!,
    password: String!,
    streetAddress: String!,
    city: String!,
    state: String!,
    zip: String!
    ) : Auth

    addPatient(
        firstName: String!,
        lastName: String!,
        dob: String!
        #allergies:[String],
        #physician:ID
        #prescriptions:[String],
        ): Patient

    addPrescription(
        medication: String!,
        dosage: String!,
        frequency: String!,
        duration: String!,
        refills: String!,
        notes: String!
    ): Prescription

    login(
    email: String!,
    password: String!
    ): Auth
}
`
module.exports = typeDefs;