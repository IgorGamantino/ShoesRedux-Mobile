import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';

import { Card, TitleItem, Price, Img, Icons, SubPrice } from './styles';
import api from '../../services/api';

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: URL;
  subprice: string;
}

const CardPrimary: React.FC = () => {
  const [shoes, setShoes] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('promotions').then(response => {
      setShoes(response.data);
    });
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {shoes.map(item => (
        <Card colors={['#DE2345', '#222330']}>
          <TitleItem>{item.title}</TitleItem>
          <Price>
            R$
            {item.price.toFixed(2)}
          </Price>
          <SubPrice>{item.subprice}</SubPrice>
          <Img source={{ uri: item.image }} />
          <Icons name="long-arrow-right" />
        </Card>
      ))}

      {/* <Card colors={['#DE2345', '#222330']}>
        <TitleItem>Nike Air Max 720</TitleItem>
        <Price>R$: 250,00</Price>
        <Img source={shoes} />
        <Icons name="long-arrow-right" />
      </Card>
      <Card colors={['#DE2345', '#222330']}>
        <TitleItem>Nike Air Max 720</TitleItem>
        <Price>R$: 250,00</Price>
        <Img source={shoes} />
        <Icons name="long-arrow-right" />
      </Card> */}
    </ScrollView>
  );
};

export default CardPrimary;
