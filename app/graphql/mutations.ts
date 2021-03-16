import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation Register(
    $displayName: String!
    $email: String!
    $password: String!
  ) {
    register(displayName: $displayName, email: $email, password: $password) {
      message
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
      title
      body
      timestamp
    }
  }
`;
