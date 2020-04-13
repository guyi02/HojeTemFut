import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import {colors} from '~/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const InputWithMask = styled(TextInputMask).attrs((props) => ({
  placeholderTextColor: colors.white,
}))`
  margin: 10px;
  padding: 20px 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid ${colors.white};
  color: ${colors.white};
`;
