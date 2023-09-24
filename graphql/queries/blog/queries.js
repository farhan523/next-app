import { gql } from "@apollo/client";

export const blogListQuery = gql`
  query Blogs {
    blogs {
      data {
        attributes {
          title
          description
          updatedAt
          createdAt
          publishedAt
        }
      }
    }
  }
`;

export const blogById = gql`
  query Blog($id: ID!) {
    blog(where: { id: $id }) {
      id
      title
      updatedAt
      blogImage {
        id
        url
      }
    }
  }
`;
