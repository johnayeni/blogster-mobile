import { gql } from '@apollo/client';

export const GET_PROFILE_QUERY = gql`
  query GetProfile {
    profile {
      id
      displayName
      email
    }
  }
`;

export const GET_POSTS_QUERY = gql`
  query GetPosts {
    posts {
      id
      title
      body
      timestamp
    }
  }
`;

export const GET_POST_QUERY = gql`
  query GetPost($id: String!) {
    post(id: $id) {
      id
      title
      body
      timestamp
    }
  }
`;
