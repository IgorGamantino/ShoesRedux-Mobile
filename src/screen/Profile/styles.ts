import styled from 'styled-components/native';
import { Image, ImageBackground } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 35px;
  background: #191a23;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const CardShoes = styled.View`
  width: 120px;
  height: 120px;
  background: #383848;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  margin-left: 17px;
`;

export const Img = styled(Image)`
  width: 124px;
  height: 131px;
  border-radius: 80px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
  color: #e4e5ec;
`;

export const ImgShoes = styled(Image)`
  width: 92px;
  height: 51px;
  transform: rotate(-3deg);
`;
export const SecondTitle = styled.Text`
  margin-top: 10px;
  font-family: 'RobotoSlab-Medium';
  color: #e4e5ec;
  font-size: 14px;
`;

export const PriceSecond = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 12px;
  color: #e4e5ec;
`;

export const ContainerAddress = styled.View`
  flex-direction: row;
  width: 304px;
  height: 160px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const WorkContainer = styled.TouchableOpacity`
  margin-right: 14px;
  width: 176px;
  background: #2c2e3a;
  height: 160px;
  border-radius: 10px;
`;

export const Work = styled(Image)`
  width: 176px;
  height: 100px;
  position: absolute;
  bottom: 0;
  border-radius: 10px;
`;

export const Home = styled.TouchableOpacity`
  width: 176px;
  height: 160px;
  background: #2c2e3a;
  border-radius: 8px;
`;

export const Imagehome = styled(Image)`
  width: 176px;
  height: 100px;
  position: absolute;
  bottom: 0;
  border-radius: 10px;
`;

export const ContainerCredit = styled.View`
  width: 304px;
  height: 130px;
  margin-top: 20px;
  background: red;
`;
