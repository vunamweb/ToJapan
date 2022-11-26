import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  // General
  error: {
    color: 'red'
  },
  success: {
    color: 'green'
  },
  show: {
    display: 'flex'
  },
  hide: {
    display: 'none'
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    backgroundColor: "#3187EA",
  },
  circleSmall: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
  },
  circleSmall: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
  },
  padding: {
    padding: 20,
  },
  paddingSmall: {
    padding: 10,
  },
  margin: {
    margin: 20
  },
  paddingLeft: {
    paddingLeft: 20,
  },
  borderNormal: {
    borderRadius: 20,
  },
  flexRowStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  flexRowEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
  },
  alignCenter: {
    alignItems: "center",
  },
  marginHeader: {
    marginTop: 30,
  },
  marginLeft10: {
    marginLeft: 10,
  },
  marginLeft5: {
    marginLeft: 5,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop15: {
    marginTop: 15,
  },
  marginTop5: {
    marginTop: 5,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginTop30: {
    marginTop: 30,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginBottom15: {
    marginBottom: 15,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  paddingBottom20: {
    paddingBottom: 20,
  },
  bgWhite: {
    backgroundColor: "white",
  },
  fontBold: {
    fontWeight: "700",
  },
  href: {
   fontSize: 18,
   color: '#3187EA'
  },
  line: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
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
  buttonNotFull: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginTop: 20,
    borderRadius: 16,
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
    marginTop: 40
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
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
  },
  shopText1: {
    fontSize: 20,
    color: "black",
    fontWeight: "700",
    marginBottom: 5,
  },
  shopText2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#777E90",
  },
  // END
  // RATING
  rating: {
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 10,
  },
  // END
  // BOTTOM
  bottom: {
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: "white",
    marginTop: 20,
  },
  iconBottom: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  touchableOpacityBottom: {
    alignItems: "center",
    padding: 10,
  },
  // END
  // HISTORY SEARCH
  history: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 50,
  },
  // END
  // SEARCH
  seach: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  // END
  // Short
  shortOption: {
    flexDirection: "row",
    padding: 10,
  },
  shortText: {
    marginLeft: 10,
    marginTop: 8,
  },
  shortModal: {
    position: "absolute",
    bottom: -30,
    width: "100%",
    //height: 'auto'
  },
  shortModal1: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  shortHeaderModal: {
    backgroundColor: "#3187EA",
    padding: 10,
    justifyContent: "center",
    flexDirection: "row",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  // END
  // FILTER
  filterModal: {
    position: "absolute",
    top: -10,
    backgroundColor: "white",
    right: 0,
    width: "90%",
    borderTopLeftRadius: 20,
    borderBottomStartRadius: 20,
  },
  filterHeaderModal: {
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  filterTitle: {
    color: "#3187EA",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 10,
  },
  // END
  // CART
  money1: {
    fontSize: 18,
    color: "#23262F",
  },
  money2: {
    fontSize: 18,
    color: "#23262F",
    fontWeight: "700",
  },
  money3: {
    color: "#23262F",
    fontSize: 16,
    fontWeight: "700",
  },
  // END
  // Adress
  address: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  addressText1: {
    fontSize: 14,
    color: "#23262F",
  },
  addressText2: {
    fontSize: 12,
    color: "#23262F",
  },
  addressContent: {
    paddingLeft: 20,
    paddingRight: 25,
  },
  // END
  // PAYMENT
  paymentText1: {
    fontWeight: "700",
    fontSize: 16,
    color: "#23262F",
  },
  paymentText2: {
    fontSize: 14,
    color: "#777E90",
  },
  paymentText3: {
    fontSize: 16,
    color: "#23262F",
  },
  paymentText4: {
    fontSize: 18,
    color: "#23262F",
    fontWeight: "700",
  },
  paymentText5: {
    fontSize: 16,
    color: "#23262F",
  },
  paymentText6: {
    fontSize: 16,
    color: "#777E90",
  },
  paymentText7: {
    fontSize: 18,
    color: "#777E90",
  },
  paymentText8: {
    fontSize: 18,
    color: "#141416",
  },
  // END
  // MANAGER ORDER
  mangerOderText1: {
    fontSize: 14,
    color: '#F5B204'
  },
  mangerOderText2: {
    fontSize: 14,
    color: '#23262F'
  },
  mangerOderText3: {
    fontSize: 16,
    color: '#D63F5C'
  },
  // END
  // WALET 
  waletText1: {
fontSize: 22,
color: '#23262F'
  },
  waletText2: {
    fontSize: 20,
    color: '#23262F'
      },
  // END
  // INFORMATION PAYMENT
  inforPaymentText1: {
color: '#3187EA',
fontSize: 22
},
  // END
  // PROFILE
  profileText1: {
    fontSize: 22,
    color: 'white'
  },
  profileText2: {
    fontSize: 14,
    color: "#E6E8EC"
  },
  // END 
  // AUCTION
  auctionText1: {
    color: '#D63F5C',
    fontSize: 14
  },
  auctionText2: {
    color: '#3187EA',
    fontSize: 16
  },
  // END 
  // FILTER
  filter1: {
    backgroundColor: "white",
    marginTop: 0,
    borderColor: "#23262F",
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginLeft: 20
  }
  // END
});
