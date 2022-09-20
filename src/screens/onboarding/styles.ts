import {Dimensions, StyleSheet, Platform} from 'react-native';

export const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  //Onboarding

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOnboard: {
    width: width,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cardOnboard: {
    flex: Platform.OS === 'ios' ? 0.6 : 0.7,
    justifyContent: 'center',
  },
  imgOnboard: {
    width: width / 2,
    height: height / 2,
    resizeMode: 'contain',
  },
  cardOnboardText: {
    flex: Platform.OS === 'ios' ? 0.4 : 0.3,
    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-start',
    paddingHorizontal: 25,
  },

  textTitle: {
    fontWeight: '800',
    fontSize: 24,
    marginBottom: 17,
  },
  textDescription: {
    fontWeight: '300',
  },

  //Indicator
  wrapperIndicator: {
    position: 'absolute',
    bottom: -25,
    // left: 0,
    // width,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  ballIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    margin: 10,
  },
});
