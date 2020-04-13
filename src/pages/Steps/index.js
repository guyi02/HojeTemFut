import React, { Component } from 'react';
import { Image, View, Text, Platform } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import assets from '~/services/imagesImport';

const StepsPage = ({ navigation }) => {
  startRegister = () => {
    navigation.navigate('AuthStack');
  };

  return (
    <Onboarding
      nextLabel={'Próximo'}
      skipLabel={'Pular'}
      onDone={startRegister}
      onSkip={startRegister}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              resizeMode="contain"
              style={{ width: 300, height: 200 }}
              source={assets.escudoTime}
            />
          ),
          title: 'Crie e gerencie seu time de praia.',
          subtitle:
            'Seja você o técnico e comande seu time a conquistar títulos.',
        },
        {
          backgroundColor: '#1E2748',
          image: (
            <Image
              style={{ width: 300, height: 200, opacity: 0.6 }}
              source={assets.players}
            />
          ),
          title: 'Crie seu perfil como jogador.',
          subtitle: 'Encontre times buscando por jogadores de sua posição.',
        },
        {
          backgroundColor: '#000',
          titleStyles: { color: '#fff' },
          subTitleStyles: { color: '#fff' },
          image: Platform.OS == 'ios' && (
            <LottieView
              style={{ width: 200, height: 200 }}
              source={assets.ballLottie}
              autoPlay
              loop
            />
          ),
          title: 'Vamos começar?',
          subtitle: 'Avance e inicie seu cadastro em nosso app.',
        },
      ]}
    />
  );
};

export default StepsPage;
