import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("authToken");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

export const client = new ApolloClient({
  uri: "https://flyby-gateway.herokuapp.com/",
  cache: new InMemoryCache(),
});

/*
uri:  process.env.NODE_ENV !== 'development'
? `${process.env.PRO_END_POINT}`
: `${process.env.DEV_END_POINT}`,
*/
