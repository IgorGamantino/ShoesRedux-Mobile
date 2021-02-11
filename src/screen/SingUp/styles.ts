import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #191a23;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Title = styled.Text`
  color: #e7e7e8;
  font-size: 48px;
  position: relative;
  top: -60px;
  font-family: 'RobotoSlab-Medium';
`;

export const Img = styled(Image)`
  transform: rotate(-15deg);
  margin-bottom: 10px;
`;

export const ContainerText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ForgotPassword = styled.Text`
  color: #e7e7e8;
  margin-right: 92px;
  font-size: 15px;
  font-family: 'RobotoSlab-Medium';
`;

export const CreateAccount = styled.Text`
  color: #de2345;
  font-family: 'RobotoSlab-Medium';
  font-size: 15px;
`;

export const Sub = styled.Text`
  margin: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 25px;
`;
