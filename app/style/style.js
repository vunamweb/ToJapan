import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  //Background 
  background_1: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FAFAFA',
  },
  // END
  // Container root
  container_root_full_center: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_root_align_center: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
  },
  container_root_align_center_full: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignItems: 'center'
  },
  // END
  // HEADER
  header: {
    fontSize: 24,
    color: '#3187EA',
    paddingVertical: 12,
    fontWeight: '600',
    textAlign: 'center'
  },
  // END
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
  },
  
  // CUSTOM HEADER 
  navBar: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  leftContainer: {
    /*justifyContent: "flex-start",
    flexDirection: "row",*/
    
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1
  },
  rightIcon: {
    paddingHorizontal: 10,
    resizeMode: "contain",
  },
  // END 
  fullWith: {
    width: '100%'
  }

});
