import styled from "styled-components/native";
import { colors, metrics, fonts } from "~/styles";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";



export const Container = styled.View`
  flex: 1;
  
`;

export const HeaderArea = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 15%;
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
export const SelectArea = styled.View`

`;

export const SelectFilter = styled.View`
 
`;

export const PlayersArea = styled.View`
    margin-top: 20px;
    border-width: 1; 
    padding: 5px;
    height: auto;
`;
export const CardInPlayer = styled.View`
    margin: 0 7px;
    width: ${wp(90)}px;
`;


export const PlayerCard = styled.View`
    border-radius: ${wp(2)}px;
    background-color: ${colors.primary};
    margin-top: 30px;
    box-shadow: 1px 3px 3px ${colors.primary};
`;

export const PlayerImage = styled.Image`
    width: ${wp(70)}px;
    height: ${wp(70)}px;
    z-index: 99;
    top: -20px;
`;


export const PlayerName = styled.Text`
    font-size: ${hp(4)}px;
    color: ${colors.secondary};
    position: absolute;
    right: 20px;
    top: 8px;
`;

export const PlayerSurname = styled.Text`
    font-size: ${hp(5)}px;
    color: ${colors.white};
    position: absolute;
    right: 20px;
    top: 40px;
`;

export const ShadowCard = styled.View`
   background-color: ${colors.primary};
   opacity: 0.5;
   height: ${wp(8)}px;
   width: 100%;
   position: absolute;
   bottom: 5px;
   z-index: 100;
   box-shadow: 10px 10px 10px ${colors.primary};
`;



