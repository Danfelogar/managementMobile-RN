import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider, ThemeProvider} from './src/context';
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
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default App;
