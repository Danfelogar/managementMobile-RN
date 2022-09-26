import {Platform, StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import {height, width} from '../../helpers';

export const stylesLogin = StyleSheet.create({
  //Login
  wrapperLogin: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },

  wrapperHeaderLogin: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height: height * 0.5,
  },
  wrapperTextLogo: {
    width: '45%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // padding: 10,
    // backgroundColor: 'green',
  },
  contentActionText: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    width: '95%',
    height: '81%',
    borderBottomRightRadius: 90,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  contentIconAction: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: Platform.OS === 'ios' ? 10 : 0,
  },
  textIcon: {
    marginLeft: -10,
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  contentLogoTextAct: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: Platform.OS === 'ios' ? 10 : 0,
  },
  textLogo: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
    color: 'rgba(0,63,116,1)',
  },

  wrapperLogo: {
    width: '55%',
    height: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  logoContent: {
    width: width * 0.5,
    height: height * 0.5,
    resizeMode: 'contain',
  },

  wrapperBodyLogin: {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    width,
    height: height * 0.5,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  textTitleBody: {
    fontSize: Platform.OS === 'android' ? 27.2 : 30,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
    textTransform: 'capitalize',
    marginBottom: 42,
  },
  contentInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '15.5%',
    marginBottom: 22,
  },
  contentBtnLogin: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '17%',
    marginBottom: 22,
  },

  btnLoginStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 27,
    width: '100%',
    height: '100%',
  },

  textBtnLogin: {
    fontWeight: '900',
    fontFamily: 'Roboto-Black',
    fontSize: 18,
  },

  textHelper: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
});
