import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import {Button, InputGeneric} from '../../components';
import {height, ICredencial} from '../../helpers';
import {stylesLogin} from './stylesLogin';
import {useLogin} from './useLogin';
import {FormProvider, useFormContext} from 'react-hook-form';

const LoginForm = () => {
  const {
    textPrimary,
    textSecondary,
    isPasswordSecret,
    secondary,
    card,
    isLoading,
    changePasswordSecret,
    validateCredentialsLogin,
  } = useLogin();
  const {control, handleSubmit: onSubmit} = useFormContext<ICredencial>();
  return (
    <>
      <View style={{...stylesLogin.contentInput}}>
        <InputGeneric
          control={control}
          name={'email'}
          borderColor={textPrimary}
          firstIcon={
            <IconFeather name="mail" size={height / 34} color={textPrimary} />
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
          control={control}
          name={'contrasena'}
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
          isLoading={isLoading}
          buttonStyle={{
            ...stylesLogin.btnLoginStyle,
            backgroundColor: card,
          }}
          activeOpacity={0.9}
          onPress={onSubmit(validateCredentialsLogin)}
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
    </>
  );
};

export function Login() {
  const {textPrimary, textSecondary, background, primary, formMethods} =
    useLogin();
  // console.log(Platform.OS, StatusBar.currentHeight);
  return (
    <KeyboardAvoidingView
      style={{...stylesLogin.wrapperLogin, backgroundColor: '#e3f2fe'}}
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
          <FormProvider {...formMethods}>
            <LoginForm />
          </FormProvider>
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
