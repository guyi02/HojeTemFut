import React, {useState} from 'react';

import {View} from 'react-native';

import {
  Container,
  Content,
  AreaImage,
  ImageProfile,
  ImageProfileBtn,
} from './styles';
import assets from '~/services/imagesImport';

import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';
import {ReactNativeFile} from 'apollo-upload-client';
import ImagePicker from 'react-native-image-picker';

const UPLOAD = gql`
  mutation HANDLE_UPLOAD($file: Upload!) {
    singleUpload(file: $file) {
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
      }
    ) {
      name
    }
  }
`;

const UploadArea = () => {
  const [uploadFunc] = useMutation(UPLOAD);
  const [register] = useMutation(REGISTER_PLAYER);

  const sendImage = () => {
    ImagePicker.showImagePicker({}, ({fileName, type, uri}) => {
      const file = new ReactNativeFile({
        uri: uri,
        type: type,
        name: fileName,
        encoding: '7bit',
      });
      uploadFunc({variables: {file}}).then((res) => {
        console.tron.log(res);
      });
    });
  };

  return (
    <Container source={assets.bgUpload} resizeMode="cover">
      <Content>
        <AreaImage>
          <ImageProfileBtn onPress={() => sendImage()}>
            <ImageProfile source={assets.player3} />
          </ImageProfileBtn>
        </AreaImage>
      </Content>
    </Container>
  );
};

export default UploadArea;
