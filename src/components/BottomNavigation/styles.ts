import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  margin-top: 35px;
  width: 100%;
  height: 67px;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonHome = styled(RectButton)``;

export const ButtonFavorit = styled(RectButton)``;

export const ButtonCart = styled(RectButton)``;

export const ButtonProfile = styled(RectButton)``;
