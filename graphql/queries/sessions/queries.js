import { gql } from "@apollo/client";

export const SessionsListQuery = gql`
  query SessionsListQuery {
    sessions {
      data {
        id
        attributes {
          deadline_date
          upcoming_date
          previous_session_date
          apply_now_link
          university {
            data {
              id
              attributes {
                name
                logo {
                  data {
                    id
                    attributes {
                      url
                      previewUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
