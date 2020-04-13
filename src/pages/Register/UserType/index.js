import React, { Component, useState, useEffect } from 'react';
import {
  Text,
  Animated,
  TouchableWithoutFeedback,
  Image,
  StatusBar,
} from 'react-native';
import assets from '~/services/imagesImport';

import {
  Container,
  HeaderText,
  AreaSelected,
  ButtonConfirm,
  TextBtnConfirm,
  TypeBtn,
  TypeImage,
} from './styles';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const UserType = ({ navigation }) => {
  const [animPlayerCard] = useState(new Animated.Value(1));
  const [animTeamCard] = useState(new Animated.Value(1));
  const [choise, setChoise] = useState('');

  useEffect(() => {
    playerCardAnim();
  }, []);
  // Functions to animated
  playerCardAnim = () => {
    setChoise('player');
    Animated.parallel([
      Animated.timing(animPlayerCard, {
        toValue: 1.7,
        duration: 500,
      }),
      Animated.timing(animTeamCard, {
        toValue: 1,
        duration: 400,
      }),
    ]).start();
  };

  teamCardAnim = () => {
    setChoise('team');
    Animated.parallel([
      Animated.timing(animTeamCard, {
        toValue: 1.7,
        duration: 500,
      }),
      Animated.timing(animPlayerCard, {
        toValue: 1,
        duration: 400,
      }),
    ]).start();
  };

  // Styles Animated
  const scalePlayerStyle = {
    transform: [
      {
        scale: animPlayerCard,
      },
    ],
  };

  const scaleTeamStyle = {
    transform: [
      {
        scale: animTeamCard,
      },
    ],
  };

  redirect = () => {
    if (choise === 'team') {
      navigation.push('RegisterTeam');
    } else {
      navigation.push('RegisterPlayer');
    }
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderText>
        Selecione abaixo o tipo de cadastro para seu usuário dentro de nosso
        app.
      </HeaderText>
      <AreaSelected>
        <TypeBtn onPress={playerCardAnim}>
          <TypeImage
            as={Animated.Image}
            style={[scalePlayerStyle]}
            source={assets.playerOption}
            resizeMode="cover"
          />
        </TypeBtn>

        <TypeBtn onPress={teamCardAnim}>
          <TypeImage
            as={Animated.Image}
            style={[scaleTeamStyle]}
            source={assets.teamOption}
            resizeMode="cover"
          />
        </TypeBtn>
      </AreaSelected>

      <ButtonConfirm onPress={redirect}>
        <TextBtnConfirm>
          {choise === 'team' ? 'Cadastrar como time' : 'Cadastrar como jogador'}
        </TextBtnConfirm>
      </ButtonConfirm>
    </Container>
  );
};

export default UserType;
