import styled from 'styled-components/native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface ModalDefaultProps {
  heightModal: number;
}

export const Container = styled.View`
  flex: 1;
`;

export const Body = styled.View`
  position: absolute;
  bottom: 0;
  height: ${(props: ModalDefaultProps) => `${hp(props.heightModal)}px`};
  background-color: #fff;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 10px;
`;
