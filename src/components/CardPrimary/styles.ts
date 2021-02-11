import styled from 'styled-components/native';
import { Image } from 'react-native';
import linearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Card = styled(linearGradient)`
  width: 209px;
  height: 264px;
  margin-left: 48px;
  margin-top: 26px;
  border-radius: 16px;
  padding: 18px;
`;

export const TitleItem = styled.Text`
  font-size: 15px;
  font-family: 'RobotoSlab-Regular';
  color: #d9dadf;
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-family: 'RotoSlab-Medium';
  color: #d9dadf;
  font-weight: bold;
`;

export const Img = styled(Image)`
  width: 200px;
  height: 104px;
  transform: rotate(-15deg);
  position: relative;
  right: 15px;
  margin-top: 35px;
  margin-bottom: 10px;
`;

export const Icons = styled(Icon)`
  position: absolute;
  color: #d9dadf;
  font-size: 24px;
  bottom: 0;
  left: 165px;
  margin-bottom: 18px;
`;

export const SubPrice = styled.Text`
  color: #d9dadf;
  font-size: 13px;
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
  text-decoration: line-through solid;
`;
