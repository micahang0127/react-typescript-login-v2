import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      id
      name
      token
    }
  }
`;

export const LOGOUT = gql`
  mutation LogOut {
    revokeToken {
      revoked
    }
    deleteRefreshTokenCookie {
      deleted
    }
  }
`;
