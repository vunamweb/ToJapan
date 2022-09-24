import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  // General
  circle: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    backgroundColor: '#3187EA'
  },
  // END
  //Background
  background_1: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FAFAFA",
  },
  // END
  // Container root
  container_root_full_center: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  container_root_align_center: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
  },
  container_root_align_center_full: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  // END
  // HEADER
  header: {
    fontSize: 24,
    color: "#3187EA",
    paddingVertical: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  header1: {
    fontSize: 18,
    color: "#23262F",
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 20,
  },
  // END
  center: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  containerTopSplash1: {
    alignItems: "center",
    marginTop: 40,
  },
  containerBody1Splash1: {
    alignItems: "center",
    marginTop: 20,
  },
  containerBody2Splash1: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  containerBody3Splash1: {
    flexDirection: "row",
    justifyContent: "flex-end",
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
    color: "black",
  },
  textSplash2: {
    color: "white",
  },
  textGeneral: {
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 20,
    borderRadius: 16,
    width: "100%",
  },
  forgotPassword: {
    marginBottom: 24,
  },
  remember: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: "#3187EA",
    //color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: "#3187EA",
    //color: theme.colors.primary,
  },
  titleTextinput: {
    width: "100%",
    flexDirection: "row",
  },
  mandatoryColor: {
    color: "#D63F5C",
    marginStart: 5,
  },
  checkbox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginLeft: -10,
    marginTop: -15,
    color: "#23262F",
    size: 16,
  },
  flexRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 30,
  },
  LineRegistration: {
    borderBottomColor: "#E6E8EC;",
    borderBottomWidth: 1,
    flex: 1,
  },
  viewTextRegistration: {
    flex: 2,
    alignItems: "center",
  },
  textRegistration: {
    bottom: -8,
    position: "absolute",
  },
  googleButton: {},
  textCenter: {
    textAlign: "center",
  },

  // CUSTOM HEADER
  navBar: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  leftContainer: {
    /*justifyContent: "flex-start",
    flexDirection: "row",*/
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
  },
  rightIcon: {
    paddingHorizontal: 10,
    resizeMode: "contain",
  },
  // END
  // HOME
  homeBody: {
    width: "100%",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: "#FAFAFA",
  },
  homeContent: {
    padding: 20,
  },
  containerHeader: {
    backgroundColor: "#E3F2FC",
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
  },
  containerHeaderStart: {
    paddingRight: 20,
  },
  containerHeaderText1: {
    fontSize: 16,
    fontWeight: "400",
    color: "#23262F",
  },
  containerHeaderText2: {
    fontSize: 12,
    color: "#777E90",
  },
  // END
  fullWith: {
    width: "100%",
  },
  // SHOP
  shop: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor: 'white', 
    padding: 20, 
    borderRadius: 16, 
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white'
  },
  shopText1: {
    fontSize: 20, 
    color: 'black', 
    fontWeight: '700',
    marginBottom: 5
  },
  shopText2: {
    fontSize: 16, 
    fontWeight: '500', 
    color: '#777E90'
  },
  // END
  // RATING
  rating: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10
  },
  // END
  // BOTTOM
  bottom: {
    width: "100%",
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginTop: 20
  },
  iconBottom: {
    width: '100%', 
    backgroundColor: 'white', 
    alignItems: 'center', 
    paddingTop: 20, 
    paddingBottom: 20
  },
  touchableOpacityBottom: {
    alignItems: 'center', 
    padding: 10
  },
  // END
  // HISTORY SEARCH
  history: {
    flexDirection: 'row',
     width: '100%', 
     justifyContent: 'space-between', 
     marginTop: 50
  },
  // END
  // SEARCH
  seach: {
    flexDirection: "row", 
    justifyContent: 'space-between', 
    marginTop: 50
  }
  // END
});
