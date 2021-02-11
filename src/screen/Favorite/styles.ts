/* eslint-disable prettier/prettier */
import { Image, } from 'react-native';
import { RectButton  } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { css } from 'styled-components';
import styled from 'styled-components/native';

interface CardShoesProps {
  isFocused: boolean;
}

export const Container = styled.View`
  background: #191a23;
  flex: 1;
  padding: 18px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #e4e5ec;
  font-family: 'RobotoSlab-Medium';
`;



export const CardShoes = styled(RectButton)<CardShoesProps>`
  width: 144px;
  max-width: 144px;
 height: 156px;
  background: #383848;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-right: 17px;
  margin-bottom: 10px;

  ${(props) =>
    props.isFocused &&
    css`
      background: red;
    `}
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
