import { gql } from "@apollo/client";


export const homePageContent = gql`
    query HomePageContent{
    contents ( pagination: { limit: -1 }){
        data {
        attributes {
          publishedAt
          value
          value_1
          value_2
          value_3
          rich_content
          link
          lookup {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }

`

export const homePageContentWithImage = gql`
    query HomePageContent{
    contents ( pagination: { limit: -1 }){
        data {
        attributes {
          publishedAt
          value
          value_1
          value_2
          value_3
          rich_content
          link
          image {
            data {
              id
              attributes {
                width
                url
                previewUrl
              }
            }
          }
          lookup {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`

export const recentUpdates = gql`
  query RecentUpdates {
    updates(sort: "id:desc") {
      data {
        attributes {
          title
          link
          description
        }
      }
    }
  }
`