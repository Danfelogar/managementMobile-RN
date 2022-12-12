import {Platform, StyleSheet} from 'react-native';

export const stylesCalendar = StyleSheet.create({
  //calendar
  wrapperHeaderText: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 6,
  },
  textDateTitleHeader: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
    color: '#fff',
  },
  textDateBodyHeader: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
    color: '#fff',
  },
  wrapperCalendar: {
    justifyContent: 'center',
  },
  textTitleTask: {
    fontSize: 23,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
  },
  wrapperTitleBodyText: {
    width: '100%',
    justifyContent: 'flex-start',
    marginVertical: 16,
  },
  wrapperListTask: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 7,
  },
  wrapperContentTaskList: {
    width: '100%',
    borderRadius: 13.5,
    height: 85,
    flexDirection: 'row',
    padding: 8,
    transition: 'all .2s',
  },
  contentBarTask: {
    width: '8%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  contentTextForTask: {
    width: '70%',
    marginLeft: 10,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  textTitleTaskCard: {
    fontSize: 18.6,
    marginBottom: 3,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
  },
  textDateTaskCard: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  contentIndicatorTask: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  barTask: {
    height: '100%',
    width: '30%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    borderRadius: 22,
  },
  circleTask: {
    height: 16.8,
    width: 16.8,
    borderRadius: 16.8,
    marginHorizontal: 2,
    alignSelf: 'center',
  },
  calendarComponent: {
    marginTop: 10,
    borderRadius: 12,
    paddingVertical: 10,
    minHeight: Platform.OS === 'android' ? 332 : 325,
    maxHeight: Platform.OS === 'android' ? 400 : 400,
  },
  textVoidTask: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  //Modal OT
  modalContent: {
    flex: 1,
    borderTopLeftRadius: 37,
    borderTopRightRadius: 37,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  wrapperHeaderOT: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 17,
  },
  titleModalOT: {
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
