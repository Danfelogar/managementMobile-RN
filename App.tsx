import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ThemeProvider} from './src/context';
import {Navigation} from './src/navigation';

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
