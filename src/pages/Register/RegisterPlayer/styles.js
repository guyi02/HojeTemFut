import styled from 'styled-components/native';
import {colors, metrics, fonts} from '~/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {isIphoneX} from 'react-native-iphone-x-helper';

export const Container = styled.ImageBackground`
  flex: 1;
  z-index: -1000;
  /* background-color: ${colors.primary}; */
`;

export const Header = styled.View`
  width: 100%;
  height: ${hp(12)}px;
  background-color: #b33446;
`;

export const BackBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  padding-top: ${isIphoneX() ? '50px' : '10px'};
`;

export const BackBtnIcon = styled(Icon).attrs((props) => ({
  color: colors.white,
  name: 'angle-left',
  size: 35,
}))`
  margin: 10px;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const ContentWraper = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: ${hp(4)}px;
  text-align: center;
  margin: 0 30px;
  margin-top: 30px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 100%;
  height: 4px;
  background-color: #b33446;
  margin: 20px 0 10px 0;
`;

export const BubbleLargeTop = styled.View`
  background-color: #b33446;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  position: absolute;
  top: ${isIphoneX() ? '-10px' : '-30px'};
  left: -40px;
`;
export const BubbleBottomLeft = styled.View`
  background-color: #b33446;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  position: absolute;
  bottom: 20px;
  left: -20px;
`;
export const BubbleBottomRight = styled.View`
  background-color: #b33446;
  width: 75px;
  height: 75px;
  border-radius: 40px;
  position: absolute;
  bottom: 0;
  right: -20px;
  z-index: -1000;
`;
export const ContentArea = styled.ScrollView``;

export const AreaInput = styled.View`
  justify-content: space-evenly;
`;

export const InputWapper = styled.View.attrs(
  (style = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }),
)``;

export const InputText = styled.TextInput.attrs((props) => ({
  placeholderTextColor: 'rgba(255, 255, 255, 0.5)',
}))`
  margin: 10px;
  padding: 20px 10px;
  border-radius: 10px;
  border: 1px solid ${colors.white};
  color: ${colors.white};
  font-size: 16px;
`;

export const InputSelect = styled.Picker`
  margin: 10px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid white;
  height: 150px;
  justify-content: center;
  align-content: center;
`;

export const FootOptionsRow = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const FootOptionsCard = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  ${(props) => props.active && `border: 1px solid ${colors.success}`}
  margin: 5px 10px;
`;

export const FootOptionsImage = styled.Image`
  width: 130px;
  height: 100px;
`;

export const FootOptionsText = styled.Text`
  font-size: 20px;
  color: ${colors.primary};
  font-weight: bold;
  margin-top: 10px;
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

export const ButtonSelectModal = styled.TouchableOpacity`
  margin: 10px;
  padding: 20px 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid ${colors.white};
  color: ${colors.white};
`;

export const ButtonSelectModalText = styled.Text`
  font-size: 16px;
  color: 'rgba(255, 255, 255, 0.5)';
`;
