import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';
import {colors} from '~/styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${colors.blackTransparent};
`;

export const Indicator = styled(ActivityIndicator).attrs({
  size: 'large',
  color: colors.bgPrimary,
})``;
