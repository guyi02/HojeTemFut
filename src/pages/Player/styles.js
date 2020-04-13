import styled from "styled-components/native";
import { colors, metrics, fonts } from "~/styles";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";



export const Container = styled.View`
  flex: 1;
  background-color: red
`;

export const HeaderArea = styled.View`
  justify-content: space-between;
  flex-direction: row;
  height: ${hp(12)}px;
  align-items: center;
  background-color: ${colors.primary};
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const IconButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 10px;
`;
export const IconLeft = styled(Icon).attrs({
    name: 'solar-panel',
    color: colors.secondary,
    size: 25
})`
margin-top: 15px;
`;

export const IconRight = styled(Icon).attrs({
    name: 'search',
    color: colors.secondary,
    size: 25
})`
margin-top: 15px;
`;


