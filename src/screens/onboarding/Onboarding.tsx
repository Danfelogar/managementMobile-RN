import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Animated,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Backdrop, Button, Indicator, SquareDecorator} from '../../components';
import {AuthContext} from '../../context';
import {height} from '../../helpers';
import {stylesOnboarding} from './stylesOnboarding';
import {useOnboarding} from './useOnboarding';

interface Props extends NativeStackScreenProps<any, any> {}

export const Onboarding = ({navigation}: Props) => {
  const {
    dataOnboarding,
    scrollX,
    textPrimary,
    textSecondary,
    background,
    slidesRef,
    idxSlides,
    slidesScroll,
  } = useOnboarding();
  const {changeBlockedOnboard} = useContext(AuthContext);

  return (
    <SafeAreaView
      style={{...stylesOnboarding.wrapper, backgroundColor: background}}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <SquareDecorator scrollX={scrollX} background={background} />
      <Animated.FlatList
        ref={slidesRef}
        initialScrollIndex={idxSlides}
        data={dataOnboarding}
        keyExtractor={item => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        contentContainerStyle={{paddingBottom: 100}}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => {
          return (
            <View style={stylesOnboarding.containerOnboard}>
              <View style={stylesOnboarding.cardOnboard}>
                <Image
                  source={item.imgLogo}
                  style={stylesOnboarding.imgOnboard}
                />
              </View>
              <View style={stylesOnboarding.cardOnboardText}>
                <Text
                  style={{...stylesOnboarding.textTitle, color: textPrimary}}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    ...stylesOnboarding.textDescription,
                    color: textSecondary,
                  }}>
                  {item.description}
                </Text>
              </View>
              <View style={{...stylesOnboarding.contentActions}}>
                <Indicator
                  scrollX={scrollX}
                  data={dataOnboarding}
                  backgroundColor={textPrimary}
                />
                {['1', '2'].includes(item.key) && (
                  <View style={{...stylesOnboarding.contentBtn}}>
                    <Button
                      buttonStyle={{
                        ...stylesOnboarding.btnStyle,
                        backgroundColor: background,
                      }}
                      activeOpacity={0.9}
                      onPress={() => slidesScroll(item.indexSlide)}
                      firstIcon={
                        <Icon
                          name="arrow-right"
                          size={height / 28}
                          color={textPrimary}
                        />
                      }
                    />
                  </View>
                )}

                {item.key === '3' && (
                  <View style={{...stylesOnboarding.contentBtn}}>
                    <Button
                      buttonStyle={{
                        ...stylesOnboarding.btnLoginStyle,
                        backgroundColor: background,
                      }}
                      activeOpacity={0.9}
                      onPress={() => {
                        // console.log('setTrue');
                        changeBlockedOnboard();
                        navigation.push('Login');
                      }}
                      textContent={
                        <Text
                          style={{
                            ...stylesOnboarding.TextBtnLogin,
                            color: textPrimary,
                          }}>
                          INGRESAR
                        </Text>
                      }
                    />
                  </View>
                )}
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
