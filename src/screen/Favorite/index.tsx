import React, { useCallback, useEffect, useState } from 'react';

import { Text, View, ScrollView, SafeAreaView } from 'react-native';

import {
  Container,
  Title,
  CardShoes,
  ImgShoes,
  PriceSecond,
  SecondTitle,
  Icons,
} from './styles';

import api from '../../services/api';

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: URL;
}

const Favorite: React.FC = () => {
  const [isFavorite, setIsfavorite] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('favorite').then(response => {
      setIsfavorite(response.data);
    });
  }, []);

  return (
    <Container>
      <Title> My Favorite</Title>

      <Text
        style={{
          paddingBottom: 1,
          color: '#2d2d3d',
          marginTop: 5,
          marginBottom: 20,
        }}
      >
        _______________________________________________
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isFavorite.map(item => (
            <CardShoes>
              <Icons name="heart" />

              <ImgShoes source={{ uri: item.image }} />

              <SecondTitle>{item.title}</SecondTitle>

              <PriceSecond>{item.price.toFixed(2)}</PriceSecond>
            </CardShoes>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};

export default Favorite;
