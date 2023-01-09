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
    color: '#fff',
  },
  textBodyHeader: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#fff',
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

  //modal filter
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    position: 'absolute',
  },

  wrapperModalFilter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    height: 300,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
  },

  //ModalFilters

  modalContent: {
    flex: 0.52,
    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  wrapperHeaderFilter: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 17,
  },
  titleModalFilters: {
    fontSize: 27.5,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
    marginLeft: 8.9,
  },
  titleOfSubFilters: {
    fontSize: 16.3,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
  },
  contentSelectors: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  textOptionsFilter: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  cornerLeftBox: {
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2.2,
    marginRight: -1,
    // borderTopWidth: 2.2,
    // borderBottomWidth: 2.2,
    // borderLeftWidth: 2.2,
    // borderRightWidth: 0,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    height: 50,
  },
  centerBox: {
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2.2,
    height: 50,
  },
  cornerRightBox: {
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2.2,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    height: 50,
  },
  btnFilter: {
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 35,
    marginBottom: 40,
  },
  titleBntFilters: {
    fontSize: 17.5,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    marginLeft: 8.9,
  },
});
