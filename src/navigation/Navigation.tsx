import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator, View} from 'react-native';

import {AuthContext, ThemeContext} from '../context';
import {Login, Onboarding} from '../screens';
import {TabNavigation} from './TabNavigation';
import {WebSide} from '../screens/webSide';

export type RootStackMainParams = {
  TabNavigation: undefined;
  Onboarding: undefined;
  Login: undefined;
  WebScreen: {
    idForIND: string;
  };
};

const Stack = createStackNavigator<RootStackMainParams>();

export const Navigation = () => {
  const {isBlockedOnboard, isLoggedIn} = useContext(AuthContext);
  const {theme} = useContext(ThemeContext);
  // console.log({isBlockedOnboard, isLoggedIn});

  if (isLoggedIn === 'pending') {
    return (
      <View
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator
      // initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        // contentStyle: {backgroundColor: 'orange'},
      }}>
      {isLoggedIn === 'login' && (
        <>
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="WebScreen" component={WebSide} />
        </>
      )}
      {isLoggedIn === 'logout' && (
        <>
          {!isBlockedOnboard && (
            <Stack.Screen name="Onboarding" component={Onboarding} />
          )}
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
};
