import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Inventory, InventoryByID} from '../screens';

export type RootStackParams = {
  NavigationInventory: undefined;
  // color como argumento independiente porque no sabemos en que momento lo tendremos
  NavigationInventoryByID: {singleInventoryID: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const NavigationInventory = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        // contentStyle: {backgroundColor: 'orange'},
      }}>
      <Stack.Screen name="NavigationInventory" component={Inventory} />

      <Stack.Screen name="NavigationInventoryByID" component={InventoryByID} />
    </Stack.Navigator>
  );
};
