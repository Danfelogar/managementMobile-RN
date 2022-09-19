import {Dimensions, StyleSheet} from 'react-native';

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
  },
  cardOnboard: {
    backgroundColor: 'orange',
    flex: 0.7,
    justifyContent: 'center',
  },
  imgOnboard: {
    width: width / 2,
    height: height / 2,
    resizeMode: 'contain',
  },

  textTitle: {
    fontWeight: '800',
    fontSize: 24,
    marginBottom: 10,
  },
  textDescription: {
    fontWeight: '300',
  },

  //Indicator
  wrapperIndicator: {
    position: 'absolute',
    bottom: -25,
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
