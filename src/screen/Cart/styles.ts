import styled from 'styled-components/native';
import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { css } from 'styled-components';

export const Container = styled.View`
  background: #191a23;
  flex: 1;
  padding: 35px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #e4e5ec;
  font-family: 'RobotoSlab-Medium';
`;
export const CardShoes = styled(RectButton)`
  width: 110px;
  height: 111px;
  background: #383848;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-left: 17px;
  margin-bottom: 30px;
`;

export const TotalItem = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 14px;
  font-weight: bold;
  color: #e4e5ec;
  align-self: center;
`;

export const ImgShoes = styled(Image)`
  width: 100px;
  height: 65px;
  transform: rotate(-3deg);
`;

export const Icons = styled(Icon)`
  font-size: 20px;
  color: #e4e5ec;
  position: relative;
  top: 9px;
  left: 45px;
  margin-bottom: 18px;
`;
export const TitleItem = styled.Text`
  font-size: 12px;
  font-family: 'RobotoSlab-Medium';
  color: #e4e5ec;
  margin-left: 35px;
`;

export const Price = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  color: #e4e5ec;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const Contator = styled.View`
  font-size: 20px;
  color: #e4e5ec;
  flex-direction: row;
`;

export const ContainerSoma = styled.View`
  width: 100%;
  background: #1c1d27;
  height: 60px;
  flex-direction: row;
`;

export const ButtonNext = styled(RectButton)`
  width: 144px;
  height: 52px;
  position: relative;
  left: 30px;
  bottom: -20px;
  border-radius: 16px;
  background: #de2345;
  justify-content: center;
  align-items: center;
`;
