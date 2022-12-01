import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  AuthProvider,
  OTsProvider,
  ThemeProvider,
  UIProvider,
} from './src/context';
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
      <ThemeProvider>
        <OTsProvider>
          <UIProvider>{children}</UIProvider>
        </OTsProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
