import React, {useState, useEffect, useContext} from 'react';

type UploadResponse = {
  uri: String;
  type: String;
  name: String;
};

type User = {
  Object: {
    name: String;
    surname: String;
    nick_name: String;
    cpf: String;
    phone: String;
    height: String;
    weight: String;
    foot: String;
    profile_img: String;
  };
};

import {
  Container,
  Content,
  AreaImage,
  ImageProfile,
  ImageProfileBtn,
  UserName,
  Description,
  ButtonSubmit,
  ButtonSubmitText,
} from './styles';

import assets from '~/services/imagesImport';

import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';
import {ReactNativeFile} from 'apollo-upload-client';
import ImagePicker from 'react-native-image-picker';
import LoadingFull from '~/components/LoadingFull';
import {TouchableOpacity, Text, Alert} from 'react-native';
import MessageContext from '~/contexts/MessageContext';

const UPLOAD = gql`
  mutation SingUpload($file: Upload!) {
    singleUpload(file: $file) {
      uri
      filename
      mimetype
      encoding
    }
  }
`;

const REGISTER_PLAYER = gql`
  mutation HANDLE_REGISTER(
    $name: String
    $surname: String
    $nick_name: String
    $cpf: String
    $phone: String
    $height: String
    $weight: String
    $foot: String
    $profile_img: String
  ) {
    RegisterPlayer(
      dados: {
        name: $name
        surname: $surname
        nick_name: $nick_name
        cpf: $cpf
        phone: $phone
        height: $height
        weight: $weight
        foot: $foot
        profile_img: $profile_img
      }
    ) {
      name
      surname
      nick_name
      cpf
      phone
      height
      weight
      foot
      profile_img
    }
  }
`;

const UploadArea = ({navigation}) => {
  useEffect(() => {
    const userInfo = navigation.getParam('data');
    setUser(userInfo);
  }, []);

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User>({});
  const [image, setImage] = useState<UploadResponse>();

  const [uploadFunc] = useMutation(UPLOAD);
  const [registerFunc] = useMutation(REGISTER_PLAYER);
  const context = useContext(MessageContext);

  const getImage = async () => {
    ImagePicker.showImagePicker({}, ({fileName, type, uri}) => {
      const Myfile: UploadResponse = new ReactNativeFile({
        uri: `${uri}`,
        type: `${type}`,
        name: `${fileName}`,
      });
      setImage(Myfile);
    });
  };

  const sendImage = async () => {
    setLoading(true);
    try {
      const res = await uploadFunc({variables: {file: image}});
      let file = res.data.singleUpload;

      setImage(file);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      const res = await registerFunc({
        variables: {
          name: user.name,
          surname: user.surname,
          nick_name: user.nick_name,
          cpf: user.cpf,
          phone: user.phone,
          height: user.height,
          weight: user.weight,
          foot: user.foot,
          profile_img: image.uri,
        },
      });
      console.log(res);
    } catch (error) {
      context.showAlert({
        msg: error.message,
      });
    }
  };

  return (
    <Container source={assets.bgUpload} resizeMode="cover">
      <Content>
        {loading ? (
          <LoadingFull />
        ) : (
          <>
            <AreaImage>
              <ImageProfileBtn onPress={() => getImage()}>
                <ImageProfile
                  source={!image ? assets.defaultPlayer : {uri: image.uri}}
                />
              </ImageProfileBtn>
            </AreaImage>

            <TouchableOpacity
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 30,
              }}
              onPress={() => sendImage()}>
              <Text style={{color: 'white'}}>enviar</Text>
            </TouchableOpacity>
            <UserName>Olá {user?.name}</UserName>
            <Description>
              Selecione acima uma imagem sua ou deixe a imagem padrão.
            </Description>
          </>
        )}

        <ButtonSubmit onPress={() => handleRegister()}>
          <ButtonSubmitText>Finalizar cadastro</ButtonSubmitText>
        </ButtonSubmit>
      </Content>
    </Container>
  );
};

export default UploadArea;
