import styled from "styled-components/native";
import { colors, metrics, fonts } from "~/styles";
import { getStatusBarHeight } from "react-native-iphone-x-helper";


export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()};
  justify-content: center;
  align-items: center;
`;

export const BemVindo = styled.Text`
  font-size: ${fonts.fontSmall};
  color: ${colors.black};
  text-align: center
`;
