import { ApolloClient, InMemoryCache } from "@apollo/client";
const NEXT_PUBLIC_STRAPI_URL = "https://fs-strapi.herokuapp.com";
export const client = new ApolloClient({
  uri: `${NEXT_PUBLIC_STRAPI_URL}/graphql`,
  cache: new InMemoryCache(),
  // credentials: "include",
  // headers:
  //   typeof window === "object" && window.localStorage.token
  //     ? {
  //         Authorization: `Bearer ${window.localStorage.token}`,
  //       }
  //     : {},
});
