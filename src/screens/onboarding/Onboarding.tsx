import React from 'react';
import {Button} from '@rneui/themed';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Animated,
  Image,
} from 'react-native';
import {Backdrop, Indicator, SquareDecorator} from './components';
import {styles, height, width} from './styles';
import {useOnboarding} from './useOnboarding';

export const Onboarding = () => {
  const {dataOnboarding, scrollX, textPrimary, textSecondary, background} =
    useOnboarding();
  return (
    <SafeAreaView style={{...styles.wrapper, backgroundColor: background}}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <SquareDecorator scrollX={scrollX} background={background} />
      <Animated.FlatList
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
            <View style={styles.containerOnboard}>
              <View style={styles.cardOnboard}>
                <Image source={item.imgLogo} style={styles.imgOnboard} />
              </View>
              <View style={styles.cardOnboardText}>
                <Text style={{...styles.textTitle, color: textPrimary}}>
                  {item.title}
                </Text>
                <Text style={{...styles.textDescription, color: textSecondary}}>
                  {item.description}
                </Text>
              </View>
              <View style={{...styles.contentActions}}>
                <Indicator
                  scrollX={scrollX}
                  data={dataOnboarding}
                  backgroundColor={textPrimary}
                />
                {['1', '2'].includes(item.key) && (
                  <Button
                    icon={{
                      name: 'arrow-right',
                      type: 'font-awesome',
                      size: height / 37.5,
                      color: textPrimary,
                    }}
                    iconRight
                    iconContainerStyle={{marginLeft: 10}}
                    titleStyle={{fontWeight: '700'}}
                    buttonStyle={{
                      ...styles.btnStyle,
                      backgroundColor: background,
                    }}
                    containerStyle={{
                      ...styles.contentBtn,
                    }}
                  />
                )}
                {item.key === '3' && (
                  <Button
                    title="INGRESAR"
                    iconContainerStyle={{marginLeft: 10}}
                    titleStyle={{fontWeight: '700', color: textPrimary}}
                    buttonStyle={{
                      ...styles.btnLoginStyle,
                      backgroundColor: background,
                    }}
                    containerStyle={{
                      ...styles.contentBtn,
                    }}
                  />
                )}
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
