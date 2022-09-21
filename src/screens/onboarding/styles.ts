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

  //contentActions
  contentActions: {
    position: 'absolute',
    bottom: -35,
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
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 13,
    width: width / 7,
    height: height / 17.5,
  },

  btnLoginStyle: {
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 13,
    width: width / 3.4,
    height: height / 17.5,
  },

  //Indicator
  wrapperIndicator: {
    display: 'flex',
    width: width / 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    paddingHorizontal: 25,
  },

  ballIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    margin: 10,
  },
});
