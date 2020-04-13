import styled from "styled-components/native";
import { colors, metrics, fonts } from "~/styles";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { getStatusBarHeight } from "react-native-iphone-x-helper";



export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: "padding"
})`
  flex: 1;
  align-items: center;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding: ${metrics.basePadding}px;
  width: 100%;
  height: auto;
  margin: 0px ${metrics.baseMargin}px;
`;

export const InputText = styled.TextInput`
  margin: ${metrics.baseMargin}px 0px;
  border: 1px solid ${colors.black};
  padding: ${hp(2)}px;
  border-radius: ${metrics.baseBorderRadius}px;
`;

export const ImageLogo = styled.Image.attrs({

})`
  width: ${wp(50)};
  height: ${wp(50)};
  margin: ${metrics.baseMargin}px;
`;



