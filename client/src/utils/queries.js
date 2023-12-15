import { gql } from '@apollo/client';


export const QUERY_PATIENTS = gql`
 query getPatients {
  patients {
    _id
    allergies
    dob
    firstName
    lastName
    physician {
      _id
    }
    prescriptions {
      _id
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
