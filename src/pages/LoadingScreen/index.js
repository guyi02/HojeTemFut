import React, {Component, useState, useEffect} from 'react';
import assets from '~/services/imagesImport';

import {Container, Logo, Texto, Indicador} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import LottieView from 'lottie-react-native';

import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';

const REFREH_TOKEN = gql`
  mutation REFRESH_TOKEN($token: String!) {
    refreshToken(dados: {token: $token}) {
      token
      logged
    }
  }
`;

const LoadingScreen = ({navigation}) => {
  // Apollo client status
  const [refreshFunc] = useMutation(REFREH_TOKEN);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      getUserInfo();
    }, 4000);
  }, []);

  getUserInfo = async () => {
    const {navigate} = navigation;
    const userToken = await AsyncStorage.getItem('@user:token');
    const userStringfy = await AsyncStorage.getItem('@user:user');
    let token = JSON.parse(userToken);
    let user = JSON.parse(userStringfy);
    try {
      const res = await refreshFunc({variables: {token: token}});
      if (user.is_team) {
        navigate('TeamStack');
      } else {
        // navigate('PlayerStack');
        navigate('RegisterStack');
      }
    } catch (error) {
      navigate('AuthStack');
    }
  };

  return (
    <Container>
      <LottieView source={assets.shirtLottie} autoPlay loop />
      {/* <Indicador /> */}
      {/* <Texto>Carregando...</Texto> */}
    </Container>
  );
};

export default LoadingScreen;
