/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback, useEffect, useState } from 'react';
import { Text, ScrollView, } from 'react-native';

import { useSelector } from 'react-redux';
import {
  Container,
  Title,
  Promotions,
  Icons,
  CardShoes,
  ImgShoes,
  SecondTitle,
  PriceSecond,
  TitleShoes, HeartIcon,ButtonHeart
} from './styles';
import CardPrimary from '../../components/CardPrimary';
import api from '../../services/api';
import { ContainerText } from '../SingUp/styles';

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: URL;
}

const Home: React.FC = () => {
  // const state = useSelector(state => state);
  // console.log(state)

  const [isFavorite,SetIsFavorite] = useState(false)

 const handleIcon = useCallback(()=> {
   SetIsFavorite((state) => !state)
 },[]);

 console.log(isFavorite)
  const [shoes, setShoes] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setShoes(response.data);
    });
  }, []);

  return (
    <Container>
      <Title>Discover</Title>
      <Promotions>Promotions</Promotions>

      <CardPrimary />

      <TitleShoes>Shoes</TitleShoes>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {shoes.map(item => (
          <CardShoes key={item.id}>
            <Icons name="heart" />

            <ImgShoes source={{ uri: item.image }} />

            <SecondTitle>{item.title}</SecondTitle>
            <PriceSecond>R$ { item.price.toFixed(2)}</PriceSecond>
          </CardShoes>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Home;


