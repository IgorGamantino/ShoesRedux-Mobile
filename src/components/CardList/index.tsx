import React from 'react';

import { Text, ScrollView, View } from 'react-native';

import {
  Container,
  Title,
  TotalItem,
  CardShoes,
  Icons,
  ImgShoes,
  SecondTitle,
  PriceSecond,
} from './styles';
import Img from '../../assets/shoes/nike.png';

const CardList: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <CardShoes>
          <ImgShoes source={Img} />

          <SecondTitle>Nike Flywire</SecondTitle>

          <PriceSecond>R$ 340,00 </PriceSecond>
        </CardShoes>
        <CardShoes>
          <ImgShoes source={Img} />

          <SecondTitle>Nike Flywire</SecondTitle>

          <PriceSecond>R$ 340,00 </PriceSecond>
        </CardShoes>
        <CardShoes>
          <ImgShoes source={Img} />

          <SecondTitle>Nike Flywire</SecondTitle>

          <PriceSecond>R$ 340,00 </PriceSecond>
        </CardShoes>
        <CardShoes>
          <ImgShoes source={Img} />

          <SecondTitle>Nike Flywire</SecondTitle>

          <PriceSecond>R$ 340,00 </PriceSecond>
        </CardShoes>
      </ScrollView>
    </Container>
  );
};

export default CardList;
