import React, { Component, useEffect } from "react";
import { View, Text, SafeAreaView } from 'react-native'
import { BemVindo, Container } from "./styles";
import CenterSpinner from '~/utils/CenterSpinner'


import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';

const FETCH_USERS = gql`
   query{
      getUsers{
        id
        email
        is_team
      }
   }
`;


const Home = ({ navigation }) => {
  // Apollo client status
  const { loading, error, data } = useQuery(FETCH_USERS);

  if (loading) {
    return <CenterSpinner />;
  }

  if (error) {
    return <Text>{error.graphQLErrors[0].message}</Text>;
  }

  return data.getUsers.map(({ email }) => (
    <SafeAreaView>
      <Text>{email}</Text>
    </SafeAreaView>
  ));
}

export default Home;
