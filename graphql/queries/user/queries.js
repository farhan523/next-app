import { gql } from "@apollo/client";

export const UsersQuery = gql`
  query Users {
    users {
      id
      firstName
      lastName
      email
      isAdmin
    }
  }
`;

export const UserQuery = gql`
  query User($email: String, $id: ID) {
    user(where: { email: $email, id: $id }) {
      id
      firstName
      lastName
      email
      isAdmin
    }
  }
`;

export const currentLoggedInQuery = gql`
  query LoggedInUser {
    me {
      email
      username
      id
    }
  }
`;

export const LoginUser = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      user {
        id
        username
      }
      jwt
    }
  }
`;
