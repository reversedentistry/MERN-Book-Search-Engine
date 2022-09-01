import { gql } from '@apollo/client';

// export const GET_ME = gql`
//     query me($userId: ID!) {
//         user(userId: $userId) {
//             _id
//             username
//             bookCount
//             savedBooks
//         }
//     }
// `;

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      bookCount
      savedBooks
    }
  }
`;