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
    marginStart: 20,
    marginEnd: 20,
    marginTop: 20,
    borderRadius: 16,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    //color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
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
});
