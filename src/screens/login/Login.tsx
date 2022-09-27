import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {Button, InputGeneric} from '../../components';
import {height} from '../../helpers';
import {stylesLogin} from './stylesLogin';
import {useLogin} from './useLogin';

interface Props extends NativeStackScreenProps<any, any> {}

export function Login({navigation}: Props) {
  const {
    textPrimary,
    textSecondary,
    isPasswordSecret,
    background,
    primary,
    secondary,
    tertiary,
    card,
    changePasswordSecret,
  } = useLogin();
  // console.log(Platform.OS, StatusBar.currentHeight);
  return (
    <KeyboardAvoidingView
      style={{...stylesLogin.wrapperLogin, backgroundColor: tertiary}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={{...stylesLogin.wrapperHeaderLogin}}>
          <View style={{...stylesLogin.wrapperTextLogo}}>
            <SafeAreaView
              style={{
                ...stylesLogin.contentActionText,
                backgroundColor: background,
                shadowColor: background,
              }}>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => navigation.goBack()}
                style={{...stylesLogin.contentIconAction}}>
                <Icon
                  name="arrow-back-ios"
                  size={height / 28}
                  color={textPrimary}
                />
                <Text style={{...stylesLogin.textIcon, color: textPrimary}}>
                  Regresar
                </Text>
              </TouchableOpacity>
              <View style={{...stylesLogin.contentLogoTextAct}}>
                <Text style={{...stylesLogin.textLogo}}>Una Herramienta</Text>
                <Text style={{...stylesLogin.textLogo}}>a tu</Text>
                <Text style={{...stylesLogin.textLogo}}>Medida</Text>
              </View>
            </SafeAreaView>
          </View>
          <View style={{...stylesLogin.wrapperLogo}}>
            <Image
              style={{...stylesLogin.logoContent}}
              source={require('../../public/loginLogo.png')}
            />
          </View>
        </View>
        <View
          style={{
            ...stylesLogin.wrapperBodyLogin,
            backgroundColor: background,
            shadowColor: background,
          }}>
          <Text style={{...stylesLogin.textTitleBody, color: textPrimary}}>
            Empecemos la experiencia
          </Text>
          <View style={{...stylesLogin.contentInput}}>
            <InputGeneric
              borderColor={textPrimary}
              firstIcon={
                <IconFeather
                  name="mail"
                  size={height / 34}
                  color={textPrimary}
                />
              }
              placeholder="Correo"
              keyboardType="email-address"
              placeholderTextColor={textSecondary}
              inputColor={textPrimary}
              autoCorrect
            />
          </View>
          <View style={{...stylesLogin.contentInput}}>
            <InputGeneric
              borderColor={textPrimary}
              lastIcon={
                <IconIonicons
                  onPress={changePasswordSecret}
                  name={isPasswordSecret ? 'eye' : 'eye-off'}
                  size={height / 34}
                  color={textPrimary}
                />
              }
              placeholder="Contraseña"
              isSecretText={isPasswordSecret}
              placeholderTextColor={textSecondary}
              inputColor={textPrimary}
              autoCorrect
            />
          </View>
          <View style={{...stylesLogin.contentBtnLogin}}>
            <Button
              buttonStyle={{
                ...stylesLogin.btnLoginStyle,
                backgroundColor: card,
              }}
              activeOpacity={0.9}
              onPress={() => navigation.push('Login')}
              textContent={
                <Text
                  style={{
                    ...stylesLogin.textBtnLogin,
                    color: secondary,
                  }}>
                  INICIAR SESIÓN
                </Text>
              }
            />
          </View>
          <Text style={{...stylesLogin.textHelper, color: textSecondary}}>
            No recuerdas tus credenciales ?{' '}
            <Text style={{color: primary}}>Preciosa aquí</Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

{
  /* <SafeAreaView
      style={{
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}></SafeAreaView> */
}
