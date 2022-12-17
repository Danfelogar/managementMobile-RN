import {StyleSheet} from 'react-native';
import {height} from '../../helpers';

export const stylesInventoryByID = StyleSheet.create({
  //inventoryByID
  wrapperImgMain: {
    width: '100%',
    height: height / 2.7,
  },
  wrapperBtnBack: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 6,
    paddingRight: 23,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    zIndex: 2,
  },
  wrapperInitCardBorder: {
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    bottom: 0,
    height: 20,
    borderTopLeftRadius: 160,
    borderTopRightRadius: 160,
  },
  typeInventoryText: {
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
    textAlign: 'center',
  },
});
