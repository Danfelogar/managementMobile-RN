import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import 'react-native-gesture-handler';

import {Button} from '../../components';
import {AuthContext} from '../../context';

export const Home = () => {
  const {logout, user, isLoggedIn} = useContext(AuthContext);
  const navigation = useNavigation<any>();
  console.log({user});

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate('Login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  return (
    <SafeAreaView>
      <View>
        <Text>daniel testing</Text>
        <Button
          buttonStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 27,
            width: '100%',
            height: '80%',
            backgroundColor: 'orange',
          }}
          activeOpacity={0.9}
          onPress={logout}
          textContent={
            <Text
              style={{
                fontWeight: '900',
                fontFamily: 'Roboto-Black',
                fontSize: 18,
                color: 'red',
              }}>
              salir de la session
            </Text>
          }
        />
        <Text>{user?.token!}</Text>
        <Text>
          {user?.user.email},{user?.user.nombre},{user?.user.rol},{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
};
