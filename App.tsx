import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
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

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
