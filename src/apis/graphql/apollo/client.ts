import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://flyby-gateway.herokuapp.com/",
  cache: new InMemoryCache(),
});

/*
uri:  process.env.NODE_ENV !== 'development'
? `${process.env.PRO_END_POINT}`
: `${process.env.DEV_END_POINT}`,
*/
