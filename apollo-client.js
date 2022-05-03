import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://35.203.80.2/graphql",
    cache: new InMemoryCache(),
});

export default client;