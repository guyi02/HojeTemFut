import React, { useState } from 'react';
import {
  Container,
  Form,
  InputText,
  ImageLogo,
  ButtonSubmit,
  ButtonSubmitText,
} from './styles';
import assets from '~/services/imagesImport';
import { Platform } from 'react-native';
import { colors } from '~/styles';

import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import AsyncStorage from '@react-native-community/async-storage';

const LOGIN_AUTH = gql`
  mutation HANDLE_AUTH($email: String!, $password: String!) {
    login(dados: { email: $email, password: $password }) {
      token
      user {
        email
        is_team
        trial {
          is_trial
          start_in
        }
      }
    }
  }
`;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('guyi__@hotmail.com');
  const [password, setPassword] = useState('123456');
  const [login] = useMutation(LOGIN_AUTH);

  handleSubmit = () => {
    if (email == '' || password == '') {
      alert('Existem campos vazios');
    }
    login({ variables: { email: email, password: password } })
      .then(async response => {
        let tokenResp = response.data.login.token;
        const [bearer, token] = tokenResp.split(' ');
        await AsyncStorage.setItem('@user:token', JSON.stringify(token));
        navigation.navigate('RegisterStack');
      })
      .catch(error => {
        alert('Opss algo deu errado');
      });
  };

  return (
    <Container
      behavior={Platform.select({
        ios: 'padding',
        android: null,
      })}
    >
      <ImageLogo source={assets.newLogo} />
      <Form>
        <InputText
          placeholder="E-mail"
          autoCapitalize={false}
          value={email}
          onChangeText={email => setEmail({ email })}
          onEndEditing={() => this.passwordInput.focus()}
          returnKeyType="next"
          placeholderTextColor={colors.whiteTransparent}
        />

        <InputText
          ref={input => (this.passwordInput = input)}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword({ password })}
          returnKeyType="send"
          onSubmitEditing={() => alert('executa função de login')}
          placeholderTextColor={colors.whiteTransparent}
        />

        <ButtonSubmit onPress={handleSubmit}>
          <ButtonSubmitText>Entrar</ButtonSubmitText>
        </ButtonSubmit>
      </Form>
    </Container>
  );
};
// manipulando o header (navigation)
Login.navigationOptions = () => ({
  header: null,
});

export default Login;
