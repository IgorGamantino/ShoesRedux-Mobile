import styled from 'styled-components/native';

import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Heart from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  background: #191a23;
  flex: 1;
  padding: 35px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #e4e5ec;
`;

export const Promotions = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #e4e5ec;
  margin-top: 40px;
`;

export const TitleShoes = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  color: #e4e5ec;
  margin-bottom: 20px;
`;

export const CardShoes = styled.TouchableOpacity`
  width: 133px;
  height: 156px;
  background: #383848;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-left: 17px;
`;

export const ImgShoes = styled(Image)`
  width: 110px;
  height: 51px;
  transform: rotate(-3deg);
`;
export const SecondTitle = styled.Text`
  margin-top: 28px;
  font-family: 'RobotoSlab-Medium';
  color: #e4e5ec;
  font-size: 14px;
`;

export const PriceSecond = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 12px;
  color: #e4e5ec;
  margin-bottom: 9px;
`;

export const Icons = styled(Icon)`
  font-size: 20px;
  color: #e4e5ec;
  position: relative;
  margin-bottom: 18px;
`;

export const HeartIcon = styled(Heart)`
  font-size: 20px;
  color: #e4e5ec;
  position: relative;
  margin-bottom: 18px;
`;

export const ButtonHeart = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  position: relative;
  left: 50;
`;
