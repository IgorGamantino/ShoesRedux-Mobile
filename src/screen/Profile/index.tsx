/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';

import { ScrollView, Text, View, ImageBackground } from 'react-native';
import shoes from '../../assets/shoes/nike.png';
import work from '../../assets/user/work.jpeg';
import home from '../../assets/user/home.jpeg';
import {
  Container,
  Header,
  Name,
  Img,
  ImgShoes,
  PriceSecond,
  SecondTitle,
  CardShoes,
  ContainerAddress,
  Home,
  WorkContainer,
  Work,
  Imagehome,
  ContainerCredit,
} from './styles';

import user from '../../assets/user/profile.jpg';
import api from '../../services/api';

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: URL;
}

const Profile: React.FC = () => {
  const [Orders, setOrders] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('Orders').then(response => {
      setOrders(response.data);
    });
  }, []);
  return (
    <Container>
      <Header>
        <Img source={user} />
        <View style={{ width: 153, height: 94, marginLeft: 20 }}>
          <Name>Igor Amantino</Name>

          <Text
            style={{
              fontFamily: 'RobotoSlab-Regular',
              fontSize: 14,
              color: '#D9DADF',
              marginTop: 17,
            }}
          >
            (14) 998441160
          </Text>
          <Text
            style={{
              fontFamily: 'RobotoSlab-Regular',
              fontSize: 14,
              color: '#D9DADF',
              marginTop: 17,
            }}
          >
            City: Ipaussu-SP
          </Text>
        </View>
      </Header>
      <ScrollView>
        <Text
          style={{
            fontFamily: 'RobotoSlab-Medium',
            fontWeight: 'bold',
            fontSize: 14,
            marginBottom: 18,
            marginTop: 38,
            color: '#E4E5EC',
          }}
        >
          Orders
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Orders.map(item => (
            <CardShoes>
              <ImgShoes source={{uri:item.image}} />

              <SecondTitle>{item.title}</SecondTitle>

              <PriceSecond>R$ { item.price.toFixed(2)} </PriceSecond>
            </CardShoes>
          ))}
        </ScrollView>

        <Text
          style={{
            fontFamily: 'RobotoSlab-Medium',
            fontSize: 14,
            fontWeight: 'bold',
            color: '#e4e5ec',
            marginTop: 30,
            marginBottom: 30,
          }}
        >
          Address
        </Text>

        <ContainerAddress>
          <WorkContainer>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'RobotoSlab-Medium',
                fontWeight: 'bold',
                color: '#d9dadf',
                marginTop: 10,
                marginLeft: 8,
              }}
            >
              Work
            </Text>

            <Text
              style={{
                fontFamily: 'RobotoSlab-Regular',
                fontSize: 12,
                marginBottom: 10,
                marginTop: 5,
                color: '#d9dadf',
                marginLeft: 8,
              }}
            >
              Av.São João,145- SP
            </Text>
            <Work source={work} />
          </WorkContainer>

          <Home>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'RobotoSlab-Medium',
                fontWeight: 'bold',
                color: '#d9dadf',
                marginTop: 10,
                marginLeft: 8,
              }}
            >
              Home
            </Text>

            <Text
              style={{
                fontFamily: 'RobotoSlab-Regular',
                fontSize: 12,
                marginBottom: 10,
                marginTop: 5,
                color: '#d9dadf',
                marginLeft: 8,
              }}
            >
              São João Pedro,137-Ipa
            </Text>
            <Imagehome source={home} />
          </Home>
        </ContainerAddress>
      </ScrollView>
    </Container>
  );
};

export default Profile;
