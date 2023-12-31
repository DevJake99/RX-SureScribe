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
  mutation addUser($userType:String!, $firstName: String!, $lastName: String! $email: String!, $password: String!, $streetAddress: String!, $city: String!, $state: String!, $zip: String!) {
    addUser(userType:$userType, firstName: $firstName, lastName: $lastName, email: $email, password: $password, streetAddress: $streetAddress, city: $city, state: $state, zip: $zip) {
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

export const ADD_PATIENT = gql`
  # mutation addPatient($firstName: String!,$lastName: String!, $dob: String!) {
  #   addPatient(firstName: $firstName, lastName: $lastName, dob: $dob) {
  #     patient{
  #     _id
  #     firstName
  #     lastName
  #     dob
  #     }
  #   }
  # }
  mutation addPatient($firstName: String!, $lastName: String!, $dob: String!) {
  addPatient(firstName: $firstName, lastName: $lastName, dob: $dob) {
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

export const ADD_PRESCRIPTION = gql`
  mutation addPrescription($medication: String!, $dosage: String!, $frequency: String!, $duration: String!, $refills: String!, $notes: String!) {
    addPrescription(medication: $medication, dosage: $dosage, frequency: $frequency, duration: $duration, refills: $refills, notes: $notes) {
      _id
      medication
      dosage
      frequency
      duration
      refills
      notes
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
