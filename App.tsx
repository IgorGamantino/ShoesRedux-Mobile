import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import store from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
