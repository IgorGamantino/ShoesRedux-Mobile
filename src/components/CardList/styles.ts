import styled from 'styled-components/native';
import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { css } from 'styled-components';

export const Container = styled.View`
  background: #191a23;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #e4e5ec;
  font-family: 'RobotoSlab-Medium';
`;
export const CardShoes = styled(RectButton)`
  width: 133px;
  height: 156px;
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
  top: 9px;
  left: 45px;
  margin-bottom: 18px;
`;
