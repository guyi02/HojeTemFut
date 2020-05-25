import React, {useState, useContext} from 'react';
import assets from '~/services/imagesImport';
import {Animated, Platform, View, Text} from 'react-native';

import {
  Container,
  Content,
  ContentWraper,
  Header,
  BackBtn,
  BackBtnIcon,
  Title,
  Divider,
  BubbleLargeTop,
  BubbleBottomLeft,
  BubbleBottomRight,
  ContentArea,
  AreaInput,
  InputText,
  InputSelect,
  InputWapper,
  FootOptionsRow,
  FootOptionsCard,
  FootOptionsImage,
  FootOptionsText,
  ButtonSubmit,
  ButtonSubmitText,
  ButtonSelectModal,
  ButtonSelectModalText,
} from './styles';

import InputMask from '~/components/InputMask';
import ModalDefault from '~/components/ModalDefault';
import {colors} from '~/styles';
import MessageContext from '~/contexts/MessageContext';
import AsyncStorage from '@react-native-community/async-storage';

const RegisterPlayerPage = ({navigation}) => {
  const context = useContext(MessageContext);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [nick_name, setNickname] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [foot, setFoot] = useState('');
  const [scrollY] = useState(new Animated.Value(0));

  const handleRegister = async () => {
    if (name == '') {
      context.showAlert({msg: 'campo nome vazio'});
    } else if (surname == '') {
      context.showAlert({msg: 'campo sobrenome vazio'});
    } else if (nick_name == '') {
      context.showAlert({msg: 'campo apelido vazio'});
    } else if (cpf == '') {
      context.showAlert({msg: 'campo cpf vazio'});
    } else if (phone == '') {
      context.showAlert({msg: 'campo telefone vazio'});
    } else if (height == '') {
      context.showAlert({msg: 'campo altura vazio'});
    } else if (weight == '') {
      context.showAlert({msg: 'campo peso vazio'});
    } else if (foot == '') {
      context.showAlert({msg: 'selecione sua perna que chuta'});
    } else {
      const data = {
        name,
        surname,
        nick_name,
        cpf,
        phone,
        height,
        weight,
        foot,
      };
      navigation.push('UploadArea', {data: data});
    }
  };

  const _getScrollPosition = () => {
    scrollY;

    return scrollY.interpolate({
      inputRange: [0, 35],
      outputRange: [0, 1],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  };

  return (
    <Container source={assets.bgPlayer1}>
      <Content
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
        <ContentWraper>
          <Header
            as={Animated.View}
            style={{
              opacity: _getScrollPosition(),
            }}></Header>
          <BackBtn onPress={() => navigation.goBack()}>
            <BackBtnIcon />
          </BackBtn>
          {/* <BubbleBottomLeft /> */}

          <ContentArea
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {
                nativeEvent: {contentOffset: {y: scrollY}},
              },
            ])}
            bounces={false}
            showsVerticalScrollIndicator={false}>
            <Title>Cadastro rápido como jogador</Title>
            <Divider />
            <AreaInput>
              <InputWapper>
                <InputText
                  placeholder={'Nome'}
                  value={name}
                  onChangeText={(name) => setName(name)}
                />
              </InputWapper>
              <InputWapper>
                <InputText
                  value={surname}
                  onChangeText={(surname) => setSurname(surname)}
                  placeholder="Sobrenome"
                />
              </InputWapper>
              <InputWapper>
                <InputText
                  value={nick_name}
                  onChangeText={(nickname) => setNickname(nickname)}
                  placeholder="Apelido"
                />
              </InputWapper>
              <InputWapper>
                <InputMask
                  placeholder={'CPF'}
                  type={'cpf'}
                  value={cpf}
                  setValue={(val) => setCpf(val)}
                  keyboardType="number-pad"
                />
              </InputWapper>
              <InputWapper>
                <InputMask
                  placeholder={'Telefone'}
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                  }}
                  value={phone}
                  setValue={(val) => setPhone(val)}
                  keyboardType="number-pad"
                />
              </InputWapper>

              <InputWapper>
                <InputText
                  value={height}
                  onChangeText={(height) => setHeight(height)}
                  maxLength={4}
                  placeholder="Altura - ex: 1,75"
                  keyboardType="numbers-and-punctuation"
                />
              </InputWapper>

              <InputWapper>
                <InputText
                  value={weight}
                  onChangeText={(weight) => setWeight(weight)}
                  maxLength={2}
                  placeholder="Peso - ex: 75"
                  keyboardType="number-pad"
                />
              </InputWapper>

              <InputWapper>
                <ButtonSelectModal onPress={() => setVisible(true)}>
                  <ButtonSelectModalText>
                    {foot == '' ? 'Perna que chuta' : foot}
                  </ButtonSelectModalText>
                </ButtonSelectModal>
              </InputWapper>
            </AreaInput>

            <ButtonSubmit onPress={() => handleRegister()}>
              <ButtonSubmitText>Próximo</ButtonSubmitText>
            </ButtonSubmit>

            <ModalDefault
              visible={visible}
              change={(visible) => setVisible(visible)}
              heightModal={50}>
              <FootOptionsRow>
                <FootOptionsCard
                  activeOpacity={0.9}
                  active={foot == 'destro'}
                  onPress={() => {
                    setFoot('destro');
                    setVisible(false);
                  }}>
                  <FootOptionsImage source={assets.rigthFoot} />
                  <FootOptionsText>Destro</FootOptionsText>
                </FootOptionsCard>

                <FootOptionsCard
                  activeOpacity={0.9}
                  active={foot == 'canhoto'}
                  onPress={() => {
                    setFoot('canhoto');
                    setVisible(false);
                  }}>
                  <FootOptionsImage source={assets.leftFoot} />
                  <FootOptionsText>Canhoto</FootOptionsText>
                </FootOptionsCard>
              </FootOptionsRow>
            </ModalDefault>
          </ContentArea>
        </ContentWraper>
      </Content>
    </Container>
  );
};

export default RegisterPlayerPage;
