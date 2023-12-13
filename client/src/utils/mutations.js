import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userType
        firstName
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation addUser($userType:String!, $firstName: String!, $lastName: String! $email: String!, $password: String!, $streetAdress: String!, $city: String!, $state: String!, $zip: String!) {
    addUser(userType:$userType, firstName: $firstName, lastName: $lastName, email: $email, password: $password, streetAdress: $streetAdress, city: $city, state: $state, zip: $zip) {
      token
      user {
        _id
        userType
        firstName
        lastName
      }
    }
  }
`;
// Change to add prescription
export const ADD_PATIENT = gql`
  mutation addPatient($firstName: String!, $lastName: String!, $dob: String!, $allergies:[String], $physician:ID!, $prescriptions:[String],) {
    addPatient(firstName: $firstName, lastName: $lastName, dob: $dob, allergies: $allergies, physician: $physician, prescriptions: $prescriptions) {
      patient{
      _id
      firstName
      lastName
      dob
      prescriptions
      allergies
      ##prescription {
        ##_id
        ##interactionCode
      ##}
      }
    }
  }
`;

// export const ADD_COMMENT = gql`
//   mutation addComment($thoughtId: ID!, $commentText: String!) {
//     addComment(thoughtId: $thoughtId, commentText: $commentText) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
