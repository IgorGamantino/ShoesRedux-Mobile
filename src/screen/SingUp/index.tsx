import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import Input from '../../components/Input';

import shoes from '../../assets/shoes/nike.png';

import {
  Container,
  Title,
  ContainerText,
  ForgotPassword,
  CreateAccount,
  Img,
  Sub,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>ReduxShoes</Title>

      <Img style={{ width: 230, height: 120 }} source={shoes} />

      <Sub>Faça seu Login </Sub>
      <Input icon="igor" name="email" placeholder="E-mail" />
      <Input icon="helo" name="senha" placeholder="Senha" />

      <Button onPress={() => navigation.navigate('Home')}>Entrar</Button>

      <ContainerText>
        <ForgotPassword>Forgot password?</ForgotPassword>
        <CreateAccount> Create account </CreateAccount>
      </ContainerText>
    </Container>
  );
};

export default SignUp;
