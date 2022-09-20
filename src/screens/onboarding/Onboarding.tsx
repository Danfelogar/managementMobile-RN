import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Animated,
  Image,
} from 'react-native';
import {Backdrop, Indicator, SquareDecorator} from './components';
import {styles} from './styles';
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
              <Indicator
                scrollX={scrollX}
                data={dataOnboarding}
                backgroundColor={textPrimary}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
