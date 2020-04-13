import styled from "styled-components/native";
import { colors, metrics, fonts } from "~/styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: ${wp(80)};
  height: ${wp(80)};
  margin-bottom: ${metrics.baseMargin * 2};
`;
export const Texto = styled.Text`
  font-weight: bold;
  font-size: ${fonts.fontDefault};
  color: ${colors.black};
`;

export const Indicador = styled.ActivityIndicator.attrs({
  size: fonts.fontLarge,
  color: '#f00',
})`

`
