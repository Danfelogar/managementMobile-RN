import {StyleSheet} from 'react-native';

export const stylesInventory = StyleSheet.create({
  //inventory
  wrapperHeaderIcon: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 8,
  },
  wrapperHeaderText: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 6,
  },
  textTitleHeader: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
  },
  textBodyHeader: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  wrapperListInventory: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 7,
  },
  wrapperContentInventoryList: {
    width: '100%',
    borderRadius: 13.5,
    height: 85,
    flexDirection: 'row',
    padding: 8,
  },
  wrapperImgContainer: {
    width: '20%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  wrapperTextContainer: {
    width: '58%',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 6,
  },
  textTitleCard: {
    ontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
  },
  textTypeInventory: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  contentTypeInventory: {
    borderRadius: 17,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  wrapperIndicatorContainer: {
    width: '20%',
    paddingRight: 7,
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
});
