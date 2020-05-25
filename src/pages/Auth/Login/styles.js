import styled from 'styled-components/native';
import {colors, metrics, fonts} from '~/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${colors.white};
  align-items: center;
`;

export const ImageArea = styled.View`
  padding-top: 20px;
`;

export const ImageLogo = styled.Image.attrs({})`
  width: ${wp(60)}px;
  height: ${wp(60)}px;
  align-self: center;
`;

export const ImagePlayer = styled.Image.attrs({})`
  width: ${wp(90)}px;
  height: ${wp(90)}px;
  opacity: 0.8;
`;

export const Form = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.bgPrimary};
  padding: ${metrics.basePadding}px;
  width: 100%;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  height: ${wp(80)}px;
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
})`
  margin: ${metrics.baseMargin}px 0px;
  padding: 10px;
  height: 50px;
  border-radius: ${metrics.baseBorderRadius}px;
  background-color: ${colors.white};
  color: ${colors.primary};
  border: 1px solid ${colors.bgPrimary};
`;

export const ButtonSubmitText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
`;

export const ButtonSubmit = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 20px 0;
  border-radius: 10px;
  height: 50px;
  border: 1px solid ${colors.white};
`;
