import React, {useContext, useState} from 'react';
import {Platform, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {Calendar, useCalendar} from '../screens';
import {ThemeContext} from '../context';
import {NavigationInventory} from './NavigationInventory';

function EmptyScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />
  );
}

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [routeIdx, setRouteIdx] = useState<number>(0);
  const {changeModalCreate} = useCalendar();

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
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      }}
      screenListeners={{
        state: (e: any) => {
          // Do something with the state
          setRouteIdx(e?.data?.state?.index!);
        },
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
                <Icon name="calendar" size={23} color={'#fff'} />
              )}
            </>
          ),
        }}
      />
      <>
        {routeIdx === 0 && (
          <Tab.Screen
            name={'ActionButton'}
            component={EmptyScreen}
            options={{
              tabBarLabel: 'x',
              tabBarIcon: () => (
                <TouchableOpacity
                  onPress={() => {
                    if (routeIdx === 0) {
                      changeModalCreate();
                    } else if (routeIdx !== 2) {
                      return;
                    }
                  }}
                  activeOpacity={0.9}>
                  <View
                    style={{
                      width: 55,
                      height: 55,
                      backgroundColor: colors.secondary,
                      borderRadius: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 3,
                      borderColor: colors.background,
                      marginBottom: 55,
                    }}>
                    <Icon2 name="plus" size={23} color={'#fff'} />
                  </View>
                </TouchableOpacity>
              ),
            }}
          />
        )}
      </>

      <Tab.Screen
        name="Inventory"
        component={NavigationInventory}
        options={{
          tabBarLabel: 'Inventario',
          tabBarIcon: ({color, focused}) => (
            <>
              {focused ? (
                <Icon
                  name={focused ? 'file' : 'file-o'}
                  size={23}
                  color={color}
                />
              ) : (
                <Icon
                  name={focused ? 'file' : 'file-o'}
                  size={23}
                  color={'#fff'}
                />
              )}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
