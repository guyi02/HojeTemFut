import React, { Component } from 'react';
import { YellowBox, StatusBar } from 'react-native';

import './config/ReactotronConfig';
import AsyncStorage from '@react-native-community/async-storage';

// Desabilita aviso (warning) de proptypes com tipagem divergente
YellowBox.ignoreWarnings(['Warning: Each', 'Warning: Failed prop type']);
console.disableYellowBox = true;

//  GRAPHQL
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from 'apollo-upload-client';

const authLink = setContext(async (_, { headers }) => {
  let asyncToken = await AsyncStorage.getItem('@user:token');
  const token = JSON.parse(asyncToken);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(createUploadLink({ uri: 'http://192.168.15.25:4000' })),
  cache: new InMemoryCache(),
});

// Serviço que adiciona funções de roteamento para redux/redux sagas
import { setNavigator } from '~/services/navigationService';

import Routes from '~/routes';

export default class App extends Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <ApolloProvider client={client}>
        <Routes ref={setNavigator} />
      </ApolloProvider>
    );
  }
}
