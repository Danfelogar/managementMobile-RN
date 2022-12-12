import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  AuthProvider,
  InventoryProvider,
  OTsProvider,
  PermissionsProvider,
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
        <PermissionsProvider>
          <OTsProvider>
            <InventoryProvider>
              <UIProvider>{children}</UIProvider>
            </InventoryProvider>
          </OTsProvider>
        </PermissionsProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
