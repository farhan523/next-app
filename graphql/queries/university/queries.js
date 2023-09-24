import { gql } from "@apollo/client";

export const listAllUniversittiesQuery = gql`
  query UniversityList {
    universities {
      data {
        id
        attributes {
          name
          description
          createdAt
          updatedAt
          link
          logo {
            data {
              id
              attributes {
                width
                url
                previewUrl
              }
            }
          }
        }
      }
    }
  }
`;
