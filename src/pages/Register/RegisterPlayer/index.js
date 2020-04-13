import React, {Component, useState, useEffect} from 'react';
import assets from '~/services/imagesImport';
import {Picker, Platform} from 'react-native';

import {
  Container,
  Content,
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
  ButtonSubmit,
  ButtonSubmitText,
} from './styles';

import InputMask from '~/components/InputMask';
import {colors} from '~/styles';

const RegisterPlayerPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [nick_name, setNickname] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [foot, setFoot] = useState('');

  return (
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
      <Content source={assets.bgPlayer1}>
        <BackBtn onPress={() => navigation.goBack()}>
          <BackBtnIcon />
        </BackBtn>
        <Title>Cadastro rápido como jogador</Title>
        <Divider />
        <BubbleLargeTop />
        {/* <BubbleBottomLeft /> */}
        <BubbleBottomRight />
        <ContentArea>
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
              <InputSelect
                onValueChange={(val) => setFoot(val)}
                selectedValue={foot}>
                <Picker.Item
                  color={colors.white}
                  label="Perna que chuta"
                  value=""
                />
                <Picker.Item
                  color={colors.white}
                  label="Direita"
                  value="destro"
                />
                <Picker.Item
                  color={colors.white}
                  label="Esquerda"
                  value="canhoto"
                />
              </InputSelect>
            </InputWapper>
          </AreaInput>

          <ButtonSubmit onPress={() => navigation.push('UploadArea')}>
            <ButtonSubmitText>Próximo</ButtonSubmitText>
          </ButtonSubmit>
        </ContentArea>
      </Content>
    </Container>
  );
};

export default RegisterPlayerPage;
