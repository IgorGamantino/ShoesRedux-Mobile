import React from 'react';

import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import CardList from '../../components/CardList';

import {
  Container,
  Title,
  TotalItem,
  CardShoes,
  Contator,
  Price,
  TitleItem,
  ImgShoes,
  ButtonNext,
  ContainerSoma,
} from './styles';
import Img from '../../assets/shoes/nike.png';

const Cart: React.FC = () => {
  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Title>My Cart</Title>
        <TotalItem>Total 3 Items</TotalItem>
      </View>
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

      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <CardShoes>
            <ImgShoes source={Img} />
          </CardShoes>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TitleItem>Nike Flywire Force 1 </TitleItem>
            <Price>R$ 340,00</Price>
            <Contator>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                  }}
                >
                  —
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#b1b2be',
                  margin: 17,
                  marginTop: 0,
                }}
              >
                1
              </Text>
              <TouchableOpacity
                style={{
                  width: 22,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                    fontSize: 17,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </Contator>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CardShoes>
            <ImgShoes source={Img} />
          </CardShoes>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TitleItem>Nike Flywire Force 1 </TitleItem>
            <Price>R$ 340,00</Price>
            <Contator>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                  }}
                >
                  —
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#b1b2be',
                  margin: 17,
                  marginTop: 0,
                }}
              >
                1
              </Text>
              <TouchableOpacity
                style={{
                  width: 22,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                    fontSize: 17,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </Contator>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CardShoes>
            <ImgShoes source={Img} />
          </CardShoes>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TitleItem>Nike Flywire Force 1 </TitleItem>
            <Price>R$ 340,00</Price>
            <Contator>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                  }}
                >
                  —
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#b1b2be',
                  margin: 17,
                  marginTop: 0,
                }}
              >
                1
              </Text>
              <TouchableOpacity
                style={{
                  width: 22,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                    fontSize: 17,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </Contator>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CardShoes>
            <ImgShoes source={Img} />
          </CardShoes>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TitleItem>Nike Flywire Force 1 </TitleItem>
            <Price>R$ 340,00</Price>
            <Contator>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                  }}
                >
                  —
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#b1b2be',
                  margin: 17,
                  marginTop: 0,
                }}
              >
                1
              </Text>
              <TouchableOpacity
                style={{
                  width: 22,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                    fontSize: 17,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </Contator>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CardShoes>
            <ImgShoes source={Img} />
          </CardShoes>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TitleItem>Nike Flywire Force 1 </TitleItem>
            <Price>R$ 340,00</Price>
            <Contator>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                  }}
                >
                  —
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#b1b2be',
                  margin: 17,
                  marginTop: 0,
                }}
              >
                1
              </Text>
              <TouchableOpacity
                style={{
                  width: 22,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                    fontSize: 17,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </Contator>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CardShoes>
            <ImgShoes source={Img} />
          </CardShoes>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TitleItem>Nike Flywire Force 1 </TitleItem>
            <Price>R$ 340,00</Price>
            <Contator>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                  }}
                >
                  —
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#b1b2be',
                  margin: 17,
                  marginTop: 0,
                }}
              >
                1
              </Text>
              <TouchableOpacity
                style={{
                  width: 22,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                    fontSize: 17,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </Contator>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CardShoes>
            <ImgShoes source={Img} />
          </CardShoes>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TitleItem>Nike Flywire Force 1 </TitleItem>
            <Price>R$ 340,00</Price>
            <Contator>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                  }}
                >
                  —
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#b1b2be',
                  margin: 17,
                  marginTop: 0,
                }}
              >
                1
              </Text>
              <TouchableOpacity
                style={{
                  width: 22,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                    fontSize: 17,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </Contator>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CardShoes>
            <ImgShoes source={Img} />
          </CardShoes>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TitleItem>Nike Flywire Force 1 </TitleItem>
            <Price>R$ 340,00</Price>
            <Contator>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                  }}
                >
                  —
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#b1b2be',
                  margin: 17,
                  marginTop: 0,
                }}
              >
                1
              </Text>
              <TouchableOpacity
                style={{
                  width: 22,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                    fontSize: 17,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </Contator>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CardShoes>
            <ImgShoes source={Img} />
          </CardShoes>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TitleItem>Nike Flywire Force 1 </TitleItem>
            <Price>R$ 340,00</Price>
            <Contator>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                  }}
                >
                  —
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#b1b2be',
                  margin: 17,
                  marginTop: 0,
                }}
              >
                1
              </Text>
              <TouchableOpacity
                style={{
                  width: 22,
                  height: 20,
                  backgroundColor: '#303041',
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    backgroundColor: '#303041',
                    color: '#B1B2BE',
                    fontFamily: 'RobotoSlab-Medium',
                    fontWeight: '700',
                    fontSize: 17,
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </Contator>
          </View>
        </View>
      </ScrollView>

      <ContainerSoma>
        <View>
          <Text
            style={{
              marginTop: 18,
              fontFamily: 'RobotoSlab-Medium',
              color: '#e4e5ec',
              fontSize: 14,
            }}
          >
            TOTAL
          </Text>

          <Text
            style={{
              fontFamily: 'RobotoSlab-Medium',
              fontWeight: 'bold',
              fontSize: 24,
              marginTop: 10,
              color: '#e4e5ec',
            }}
          >
            R$ 1.050,00
          </Text>
        </View>

        <ButtonNext>
          <Text
            style={{
              fontFamily: 'RobotoSlab-Medium',
              fontSize: 18,
              color: '#e4e5ec',
            }}
          >
            Next
          </Text>
        </ButtonNext>
      </ContainerSoma>
    </Container>
  );
};

export default Cart;
