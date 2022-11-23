import React, {useContext} from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {Calendar, Inventory} from '../screens';
import {ThemeContext} from '../context';

// export const TabNavigation = () => {
//   return (
//     <View>
//       <Text>TabNavigation</Text>
//     </View>
//   );
// };

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: `${colors.primary}`,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: `${colors.secondary}`,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: Platform.OS === 'android' ? 60 : 90,
        },
        tabBarShowLabel: false,
      }}
      initialRouteName="Calendar">
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendario',
          tabBarIcon: ({color, focused}) => (
            <>
              {focused ? (
                <Icon2 name="calendar-alt" size={23} color={color} />
              ) : (
                <Icon name="calendar" size={23} color={color} />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          tabBarLabel: 'Inventario',
          tabBarIcon: ({color, focused}) => (
            <Icon name={focused ? 'file' : 'file-o'} size={23} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
