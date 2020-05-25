import React, {Component} from 'react';
import {YellowBox} from 'react-native';

import './config/ReactotronConfig';
// Desabilita aviso (warning) de proptypes com tipagem divergente

//  GRAPHQL
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import {createUploadLink} from 'apollo-upload-client';
import {setContext} from 'apollo-link-context';
import AsyncStorage from '@react-native-community/async-storage';

const authLink = setContext(async (_, {headers}) => {
  let asyncToken = await AsyncStorage.getItem('@user:token');
  const token = JSON.parse(asyncToken);
  return {
    headers: {
      ...headers,
      authorization: token ? token : null,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(createUploadLink({uri: 'http://localhost:4000'})),
  cache: new InMemoryCache(),
});

// Serviço que adiciona funções de roteamento para redux/redux sagas
import {setNavigator} from '~/services/navigationService';

import Routes from '~/routes';
import {MessageProvider} from './contexts/MessageContext';

console.disableYellowBox = true;
export default class App extends Component {
  static navigationOptions = {header: null};

  render() {
    return (
      <ApolloProvider client={client}>
        <MessageProvider>
          <Routes ref={setNavigator} />
        </MessageProvider>
      </ApolloProvider>
    );
  }
}
