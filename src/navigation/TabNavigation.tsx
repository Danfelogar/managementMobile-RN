import React, {useContext} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
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

const Tab = createMaterialBottomTabNavigator();

export const TabNavigation = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName="Calendar"
      activeColor={colors.primary}
      barStyle={{backgroundColor: `${colors.secondary}`}}>
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendario',
          tabBarIcon: ({color, focused}) => (
            <>
              {focused ? (
                <Icon2 name="calendar-alt" size={20} color={color} />
              ) : (
                <Icon name="calendar" size={20} color={color} />
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
            <Icon name={focused ? 'file' : 'file-o'} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
