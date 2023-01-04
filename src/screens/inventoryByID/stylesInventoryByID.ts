import {StyleSheet, Platform} from 'react-native';
import {height, width} from '../../helpers';

export const stylesInventoryByID = StyleSheet.create({
  //inventoryByID
  wrapperImgMain: {
    width: '100%',
    height: height / 2.7,
    overflow: 'hidden',
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
  wrapperBtnAdd: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 12 : 10,
    paddingLeft: 23,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
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
  contentTypeInventor: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 11,
    zIndex: 2,
    bottom: 75,
    borderRadius: 10,
    left: width / 2.65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeInventoryText: {
    fontSize: 19,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  wrapperContentStandard: {
    width: '100%',
    paddingHorizontal: 20,
  },
  wrapperHeadContent: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  titleName: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  contentTypeInventoryForID: {
    borderRadius: 17,
    justifyContent: 'center',
    alignContent: 'center',
    width: width / 3.4,
  },
  textTypeInventoryByID: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#fff',
    paddingVertical: 10,
    alignSelf: 'center',
    textTransform: 'capitalize',
  },
  textBodyInventoryByID: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    marginVertical: 17,
    alignSelf: 'center',
  },
  wrapperStatsGeneralContent: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  wrapperGenericCardForStats: {
    padding: 8,
    shadowColor: '#000',
    borderRadius: 14,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    alignItems: 'flex-start',
  },
  wrapperHeadCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10.5,
  },
  titleCard: {
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
    textTransform: 'capitalize',
    marginLeft: 7,
  },
  textContentCard: {
    fontSize: 14.6,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    alignSelf: 'flex-start',
    marginBottom: Platform.OS === 'ios' ? 7 : 0,
  },

  //snap-carousel
  wrapperSnapCarouselByID: {
    marginTop: 30,
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  contentCardForSnapCarousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  contentImgCardForSnap: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  containerPagination: {
    backgroundColor: 'transparent',
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dotActive: {
    width: 25,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  dotInactive: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginHorizontal: 1,
    backgroundColor: '#fff',
  },

  //snap-carousel-by-repuesto
  wrapperSnapCarouselByRep: {
    marginTop: 30,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  wrapperContentInventoryRep: {
    width: '100%',
    borderRadius: 13.5,
    height: 85,
    flexDirection: 'row',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  wrapperImgContainerRep: {
    width: '35%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  boxImgRep: {
    width: '100%',
    height: '100%',
    borderRadius: 19,
    overflow: 'hidden',
  },
  wrapperTextContainerRep: {
    width: '65%',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 10,
  },
  textTitleCardRep: {
    ontSize: 18,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
  },
  textTypeInventoryRep: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },

  //Modal Stocks
  modalContent: {
    width: width / 1.2,
    height: Platform.OS === 'android' ? height / 3.16 : height / 3.7,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  modalContentFollow: {
    flex: 1,
    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  wrapperHeaderStocks: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 17,
  },
  titleModalStocks: {
    fontSize: 27.5,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
    marginLeft: 8.9,
  },
  titleOfInput: {
    fontSize: 16.3,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
    marginBottom: 10,
  },
  contentInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // maxHeight: '18%',
    marginBottom: 22,
  },
  btnSaveInfo: {
    borderRadius: 30,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    paddingHorizontal: 35,
    marginBottom: 15,
  },
  textBtnSaveInfo: {
    fontSize: 20.5,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
  },
});
