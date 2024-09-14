import { GraphQLClient } from "graphql-request";

const endpoint = process.env.HYGRAPH_ENDPOINT as string;

console.log(endpoint);

export const hygraphClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.HYGRAPH_ACCESS_TOKEN}`,
  },
});
