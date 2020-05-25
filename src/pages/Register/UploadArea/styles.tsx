import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '~/styles';
import {isIphoneX} from 'react-native-iphone-x-helper';

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const Content = styled.View`
  height: 100%;
  padding-top: ${isIphoneX() ? '50px' : '30px'};
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-content: center;
`;

export const AreaImage = styled.View`
  height: 200px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const ImageProfileBtn = styled.TouchableOpacity``;
export const ImageProfile = styled.Image`
  border-width: 1;
  border-color: ${colors.white};
  height: ${wp(35)}px;
  width: ${wp(35)}px;
  border-radius: ${wp(17)}px;
`;

export const UserName = styled.Text`
  font-size: 30px;
  color: ${colors.white};
  font-weight: bold;
  margin: 20px 0;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  margin: 20px;
  text-align: center;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  padding: 20px;
  border-radius: 10px;
  background-color: #b33446;
  justify-content: center;
  align-items: center;
  margin: 20px 10px 80px 10px;
`;

export const ButtonSubmitText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.white};
`;
