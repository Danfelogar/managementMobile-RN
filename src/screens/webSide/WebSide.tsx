import React, {useContext, useState} from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';

import {ThemeContext} from '../../context';
import {height} from '../../helpers';

import {IPropsWebSide} from './types';
import {stylesWebSide} from './stylesWebSide';

export const WebSide = ({route, navigation}: IPropsWebSide) => {
  const {idForIND} = route.params;
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  // console.log({idForIND, navigation});
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.secondary}}>
      <View style={{width: '100%', marginBottom: 10}}>
        <TouchableOpacity
          style={{
            ...stylesWebSide.contentBtn,
          }}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={height / 28}
            color={'#FFF'}
          />
          <Text style={{...stylesWebSide.callbackText}}>Regresar</Text>
        </TouchableOpacity>
      </View>
      {!isLoaded && (
        <Progress.Bar
          borderWidth={0}
          borderRadius={0}
          color={colors.primary}
          progress={progress}
          width={null}
        />
      )}
      <WebView
        source={{uri: 'https://www.npmjs.com/package/react-native-webview'}}
        onError={event =>
          console.log(`webview error ${event.nativeEvent.description}`)
        }
        originWhitelist={['*']}
        style={{width: '100%'}}
        onLoadEnd={() => setIsLoaded(true)}
        onLoadProgress={({nativeEvent}) => {
          setProgress(nativeEvent.progress);
          console.log('testing====>', nativeEvent.progress);
        }}
      />
    </SafeAreaView>
  );
};
