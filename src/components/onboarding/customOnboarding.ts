import {StyleSheet} from 'react-native';
import {width} from '../../helpers';

export const customOnboarding = StyleSheet.create({
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
