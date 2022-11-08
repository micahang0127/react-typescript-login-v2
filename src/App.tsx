import Router from "./routes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apis/graphql/apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
