import { gql } from '@apollo/client';


export const QUERY_PATIENTS = gql`
  query patientLookUp($firstName: String!, $lastName: String!) {
    patientLookUp(firstName: $firstName, lastName: $lastName) {
      _id
     firstName
     lastName
     dob
     allergies
     prescriptions {
        name
        prescriptionID
        interactionCode
        category
      }
    }
  }
`;



export const QUERY_ME = gql`
   {
  currentUser {
    _id
    city
    email
    firstName
    lastName
    state
    streetAddress
    userType
    zip
    patients {
      _id
      dob
      firstName
      lastName
    }
  }
}
`;
