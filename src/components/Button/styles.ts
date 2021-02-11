import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 55px;
  background-color: #de2345;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #e7e7e8;
  font-size: 15px;
  font-family: 'RobotoSlab-Regular';
`;
