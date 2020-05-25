import React, {useState, useEffect, useContext} from 'react';
import {
  Container,
  Form,
  InputText,
  ImageArea,
  ImageLogo,
  ImagePlayer,
  ButtonSubmit,
  ButtonSubmitText,
} from './styles';
import assets from '~/services/imagesImport';
import {Platform, KeyboardAvoidingView, Keyboard} from 'react-native';
import {colors} from '~/styles';

import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';
import AsyncStorage from '@react-native-community/async-storage';
import MessageContext from '~/contexts/MessageContext';

const LOGIN_AUTH = gql`
  mutation HANDLE_AUTH($email: String!, $password: String!) {
    login(dados: {email: $email, password: $password}) {
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

const Login = ({navigation}) => {
  const context = useContext(MessageContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useMutation(LOGIN_AUTH);

  const handleSubmit = async () => {
    if (email == '' || password == '') {
      context.showAlert({msg: 'existem campos vazios'});
    } else {
      try {
        const res = await login({
          variables: {email: email.email, password: password.password},
        });
        let tokenResp = res.data.login.token;
        let userResp = res.data.login.user;
        await AsyncStorage.setItem('@user:token', JSON.stringify(tokenResp));
        await AsyncStorage.setItem('@user:user', JSON.stringify(userResp));
        navigation.navigate('RegisterStack');
      } catch (error) {
        context.showAlert({
          msg: error.message,
        });
      }
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ImageArea>
          <ImageLogo source={assets.newLogo} />
          {/* <ImagePlayer
            source={assets.cr7}
            active={activeKeyboard}
            resizeMode="contain"
          /> */}
        </ImageArea>

        <Form
          behavior={Platform.select({
            ios: 'padding',
            android: null,
          })}>
          <InputText
            placeholder="E-mail"
            autoCapitalize={false}
            value={email}
            onChangeText={(email) => setEmail({email})}
            returnKeyType="next"
            placeholderTextColor={colors.whiteTransparent}
          />

          <InputText
            placeholder="Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword({password})}
            placeholderTextColor={colors.whiteTransparent}
          />

          <ButtonSubmit onPress={() => handleSubmit()}>
            <ButtonSubmitText>Entrar</ButtonSubmitText>
          </ButtonSubmit>
        </Form>
      </Container>
    </KeyboardAvoidingView>
  );
};
// manipulando o header (navigation)
Login.navigationOptions = () => ({
  header: null,
});

export default Login;
