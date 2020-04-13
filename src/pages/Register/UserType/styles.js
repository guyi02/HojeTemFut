import styled from 'styled-components/native';
import { colors, metrics, fonts } from '~/styles';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
  background-color: #282828;
`;

export const HeaderText = styled.Text`
  color: ${colors.white};
  margin: 0 5px;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;

export const AreaSelected = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const TypeBtn = styled.TouchableWithoutFeedback`
  margin: 0 10px;
`;

export const TypeImage = styled.Image`
  height: ${(Dimensions.get('screen').width - 140) / 2}px;
  width: ${(Dimensions.get('screen').width - 140) / 2}px;
  border-radius: 10px;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid white;
  margin: 0 12px;
`;

export const TextBtnConfirm = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  font-weight: bold;
`;
