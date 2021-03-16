import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GRAPHQL_ENDPOINT } from '@env';
import { Context } from '@apollo/client';

const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT
});

const authLink = setContext(async (_: any, { headers }: Context) => {
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token || ''
    }
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const GraphQLProvider: React.FC = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
