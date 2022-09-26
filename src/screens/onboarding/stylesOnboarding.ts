import {StyleSheet, Platform} from 'react-native';
import {height, width} from '../../helpers';

export const stylesOnboarding = StyleSheet.create({
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
    position: 'relative',
  },
  cardOnboard: {
    flex: 0.9,
    justifyContent: 'center',
  },
  imgOnboard: {
    width: width / 2,
    height: height / 2,
    resizeMode: 'contain',
  },
  cardOnboardText: {
    flex: 0.45,
    justifyContent: Platform.OS === 'ios' ? 'flex-start' : 'flex-start',
    paddingHorizontal: 25,
  },

  textTitle: {
    fontWeight: '800',
    fontSize: 29,
    marginBottom: 17,
    fontFamily: 'Roboto-Regular',
  },
  textDescription: {
    fontWeight: '400',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    // color: 'rgba(255, 255, 255, 0.7)',
  },

  //contentActions
  contentActions: {
    position: 'absolute',
    bottom: -37,
    left: 0,
    width,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },

  contentBtn: {
    display: 'flex',
    width: width / 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
    paddingHorizontal: 25,
  },

  btnStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 13,
    width: width / 7,
    height: height / 17.5,
  },

  btnLoginStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 13,
    width: width / 3.4,
    height: height / 17.5,
  },

  TextBtnLogin: {
    fontWeight: '900',
    fontFamily: 'Roboto-Black',
    fontSize: 16.5,
  },
});
