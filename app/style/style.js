import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  center: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  containerTopSplash1: {
    alignItems: 'center',
    marginTop: 40,
  },
  containerBody1Splash1: {
    alignItems: 'center',
    marginTop: 20,
  },
  containerBody2Splash1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  containerBody3Splash1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 90,
  },
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  textSplash: {
    fontSize: 24,
    marginTop: 20,
  },
  textSplash1: {
    color: 'black',
  },
  textSplash2: {
    color: 'white',
  },
  textGeneral: {
    fontSize: 14
  }, 
  button: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 20,
    borderRadius: 16,
    width: '100%',
  },
  forgotPassword: {
    marginBottom: 24,
  },
  remember: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: '#3187EA',
    //color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: '#3187EA'
    //color: theme.colors.primary,
  },
  titleTextinput: {
    width: '100%',
    flexDirection: 'row',
  },
  mandatoryColor: {
    color: '#D63F5C',
    marginStart: 5,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginLeft: -10,
    marginTop: -15,
    color: '#23262F',
    size: 16
  },
  flexRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  LineRegistration: {
    borderBottomColor: '#E6E8EC;',
    borderBottomWidth: 1,
    flex: 1,
  },
  viewTextRegistration: {
    flex: 2, 
    alignItems: 'center',
  },
  textRegistration: {
    bottom: -8, 
    position: 'absolute'
  },
  googleButton: {
    
  },
  textCenter: {
    textAlign: 'center'
  } 

});
