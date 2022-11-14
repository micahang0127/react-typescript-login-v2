import Router from "./routes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apis/graphql/apollo/client";
import "./assets/css/style.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
