import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${colors.primary};
`;

export const Form = styled.View`
  flex: 1;
  padding: ${metrics.basePadding}px;
  width: 100%;
  margin: 0px ${metrics.baseMargin}px;
`;

export const InputText = styled.TextInput.attrs({})`
  margin: ${metrics.baseMargin}px 0px;
  padding: ${hp(2.5)}px;
  height: 50px;
  border-radius: ${metrics.baseBorderRadius}px;
  background-color: ${colors.secondary};
  color: ${colors.white};
`;

export const ImageLogo = styled.Image.attrs({})`
  width: ${wp(50)};
  height: ${wp(50)};
  margin: ${metrics.baseMargin}px;
`;

export const ButtonSubmitText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
`;

export const ButtonSubmit = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  background-color: ${colors.success};
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  height: 80px;
`;
