import React from 'react';
import {StyleSheet} from "react-native";

export default StyleSheet.create({

  item: { flex: 1, flexDirection: "column", backgroundColor: 'black', marginHorizontal:10, marginVertical:10,borderRadius:10, },
  itemheadercontainer:{ marginVertical:10,marginLeft:10 },
  itemtitle:{fontSize:18,fontWeight:"bold",color:"white"},
  itemprice:{fontSize:15,fontWeight:"bold",color:"white"},

  subscriptionbutton:{borderWidth:1,borderColor:"white",justifyContent:"center",alignItems:"center",marginHorizontal:14,marginVertical:40,borderRadius:5,padding:8},
  subscriptiontext:{color:"white"},
  subscriptionprice:{margin:10,fontWeight:"bold",color:"white"},

  itemfootercontainer:{flex:1,flexDirection:"row",marginHorizontal:10,marginVertical:10,alignItems:"center"},
  itempoints:{backgroundColor:"black",color:"#A4A4A4",paddingLeft:5,paddingRight:2,borderRadius:5},
  itempointtext:{marginHorizontal:15,color:"white",marginVertical:10},

  loginh:{fontWeight:"bold",color:"white",fontSize:30,marginLeft:10},
  input:{color:"white",marginHorizontal:30,marginVertical:0,borderBottomWidth:3,borderBottomColor:"white",flexDirection:"row",alignItems:"center"},
  inputtext:{color:"white",width:"75%"},

  sinput:{color:"white",marginHorizontal:10,height:40,borderBottomWidth:3,borderBottomColor:"white",flexDirection:"row",alignItems:"center"},
  sinputtext:{color:"white",width:"75%"},

  slinput:{flex:1,color:"white",borderBottomWidth:3,borderBottomColor:"white",flexDirection:"row",alignItems:"center",width:"40%"},
  slinputtext:{flex:1,color:"white"},

  srinput:{color:"white",marginLeft:10,borderBottomWidth:3,borderBottomColor:"white",flexDirection:"row",alignItems:"center",width:"40%"},
  srinputtext:{color:"white",width:"80%"},

  loginbutton:{backgroundColor:"white",marginTop:20,alignSelf:"center",paddingVertical:10,paddingHorizontal:20,borderRadius:50},
  logintext:{fontSize:20,color:'#636161',paddingHorizontal:20},
  loginfgp:{color:"white",marginVertical:10},
  passwordvisibility:{flex:1,flexDirection:"row-reverse",marginLeft:10},
  logoimage:{height:180,width:160,alignSelf:"center",justifyContent:"center" },

  sheetcontainer:{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:25,borderRadius:5,marginBottom:4},
  buttonsheetcontainer:{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",marginHorizontal:10,alignSelf:"center"},
  buttonsheetcontainer1:{alignItems:"center",marginHorizontal:10,padding:10},
  sheetvalues:{flex:1,paddingLeft:"25%"},
  sheettext:{flex:1,},
  sheeticon:{marginLeft:20,marginRight:5},
  sheetcontainerhighlight:{flex:1,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",backgroundColor:"#bfbfbf",marginHorizontal:25,marginVertical:5,borderRadius:5},
  sheetitemtitle:{fontSize:18,fontWeight:"bold",color:"black",marginTop:10},
  sheetitemcontainer:{flex:1,flexDirection:"row",justifyContent:"space-between",marginHorizontal:"15%"},

  dahboardicon:{width:20,height:20},

  loginmainb1:{elevation:8,borderWidth:1,borderColor:"black",paddingVertical:15,paddingHorizontal:25,borderBottomLeftRadius:50,borderTopLeftRadius:50,backgroundColor:"black"},
  loginmainb2:{elevation:8,borderWidth:1,borderColor:"white",paddingVertical:15,paddingHorizontal:22,borderBottomRightRadius:50,borderTopRightRadius:50,backgroundColor:"white"},
  loginbcontainer:{flexDirection:"row",alignSelf:"center",marginVertical:30},
  sloginbcontainer:{flexDirection:"row",justifyContent:"center",alignItems:"center"},
  sloginmainb1:{elevation:6,alignItems:"center",borderWidth:1,borderColor:"white",paddingVertical:5,paddingHorizontal:20,borderBottomRightRadius:50,borderTopRightRadius:50,backgroundColor:"white"},
  sloginmainb2:{elevation:6,alignItems:"center",borderWidth:1,borderColor:"white",paddingVertical:5,paddingHorizontal:20,borderBottomRightRadius:50,borderTopRightRadius:50,backgroundColor:"white"},
  sicon:{marginVertical:10,elevation:6,marginLeft:5,borderWidth:1,paddingVertical:14.2,borderBottomLeftRadius:50,borderTopLeftRadius:50,paddingHorizontal:14,backgroundColor:"black"},
  sicon1:{marginVertical:10,elevation:6,marginLeft:5,borderWidth:1,paddingVertical:14.2,borderBottomLeftRadius:50,borderTopLeftRadius:50,paddingHorizontal:10,backgroundColor:"black"},

  card:{elevation:8,paddingVertical:15,flex: 1,flexDirection:"row",backgroundColor: 'black', marginHorizontal:4, marginVertical:10,borderRadius:5,alignItems:"center",paddingRight:10},
  cardtext:{color:"white",textAlign:"left",fontSize:15,fontWeight:"bold"},
  cardvalue:{color:"white",textAlign:"left",fontSize:12},
  cardicon:{color:"white",marginLeft:10,marginTop:5},

  dashboardh1:{ fontWeight: "bold", fontSize: 20, marginLeft: 10},
  pg1container:{flex:1,flexDirection:"row",marginHorizontal:10,marginVertical:10},
  pgbottomcontainer:{ flex: 1, flexDirection: "row", justifyContent: "space-between" },
  pgbottomtext:{fontSize:12,marginHorizontal:10},
  pgbar:{backgroundColor: "white", borderColor: "#e7e1e1",marginVertical:10,marginHorizontal:10 },
  pgpercent:{fontWeight: "bold", fontSize: 18},

  linkcontainer:{flexDirection: "row",marginTop:10,marginHorizontal:8},
  link:{elevation:6,borderRadius:10,flexDirection:"row",alignItems:"center",paddingHorizontal:10,marginHorizontal:2},
  linktext:{fontSize:13},
  linkicon:{marginRight:3},

  pdh:{marginHorizontal:"15%"},
  pdpickervaluesbcontainer:{flex:1,flexDirection:"row",marginHorizontal:20,justifyContent:"space-between",alignItems:"center",padding:2,borderRadius:5},
  pdpickervaluesbcolorcontainer:{flex:1,flexDirection:"row",marginHorizontal:20,justifyContent:"space-between",backgroundColor:"#bfbfbf",borderRadius:5,alignItems:"center",padding:2},
  pdpickervaluesbtext:{flex:1,textAlign:"left",marginRight:10,color:"#000",fontWeight:"bold",marginLeft:10},
  pdpickervaluesbvalues:{flex:1,textAlign:"left",paddingLeft:12,paddingVertical:5,marginRight:10},
  bankbutton:{marginHorizontal:15,marginTop:5,padding:4},
  bankbutton1:{marginHorizontal:15,marginBottom:10,padding:4},
  bankbuttontext:{color:"white",fontWeight:"bold",padding:10},
  bankinput:{borderWidth:1,borderColor:"black",marginHorizontal:10,marginVertical:0,borderRadius:10,position:"absolute"},
  submitbutton:{alignItems:"center",borderRadius:5},

  timerhcontainer:{alignItems:"center",marginVertical:10},
  timercard:{flex:1,alignItems:"center",backgroundColor:"white",borderRadius:20,marginHorizontal:20,marginVertical:10,elevation:10},
  timerh:{marginTop:5,fontWeight:"bold"},
  comitem:{fontSize:16,fontWeight:"bold"},
  comitem2:{fontSize:16,marginLeft:10},
  comitem1:{fontSize:16,marginLeft:10,fontWeight:"bold"},

  activityfeeditemh:{marginLeft:10,fontSize:16,fontWeight:"bold"},

  modaluser:{flexDirection:"row",justifyContent:"space-between",marginHorizontal:10,marginVertical:10},
  modalh:{backgroundColor:"black",borderRadius:10,flexDirection:"row",paddingHorizontal:10,paddingVertical:5},
  modalhtext:{color:"white",marginLeft:2},
  modaliconclose:{backgroundColor:"#d4d0d0",alignItems:"center",justifyContent:"center",borderRadius:20,},

  modaldatacontainers:{flexDirection:"row",marginHorizontal:0,justifyContent:"space-between",alignItems:"center",},
  modaldatatexts:{flex:1,textAlign:"left",marginRight:10,padding:6,color:"#000",marginLeft:25},
  modaldatavaluess:{flex:1,textAlign:"left",paddingLeft:12},

  modaldatacontainer:{flexDirection:"row",marginHorizontal:0,justifyContent:"space-between",backgroundColor:"#d4d0d0",alignItems:"center"},
  modaldatatext:{flex:1,textAlign:"left",marginRight:10,padding:6,color:"#000",marginLeft:25},
  modaldatavalues:{flex:1,textAlign:"left",paddingLeft:12},
  pgbarmodal:{backgroundColor: "#d4d0d0", borderColor: "#d4d0d0",marginVertical:10,marginRight:"13%" },

  profilebackimg:{flex:1,width:"100%",height:"30%"},
  profilemaincontainer:{backgroundColor:"white",marginHorizontal:30,borderRadius:15,justifyContent:"center",marginTop:55,paddingBottom:10 },
  profileavatar:{alignSelf:"center",backgroundColor:"red"},
  profilename:{textAlign:"center",fontWeight:"bold",fontSize:18},
  profiledesignation:{textAlign:"center"},
  profilebutton:{marginHorizontal:10,justifyContent:"space-between",flexDirection:"row",marginVertical:5,borderRadius:5,padding:10},

  pdatacontainer:{flexDirection:"row",marginHorizontal:0,justifyContent:"space-between",alignItems:"center"},
  pddatatext:{flex:1,textAlign:"left",marginRight:10,padding:6,color:"#000",marginLeft:20,fontWeight:"bold"},
  pddatavalues:{flex:1,textAlign:"left",paddingLeft:12},

  pdatacontainers:{flexDirection:"row",marginHorizontal:0,justifyContent:"space-between",alignItems:"center",backgroundColor:"#d4d0d0"},
  pddatatexts:{flex:1,textAlign:"left",marginRight:10,padding:6,color:"#000",marginLeft:20,fontWeight:"bold"},
  pddatavaluess:{flex:1,textAlign:"left",paddingLeft:12,paddingRight:5},

  bdbutton:{flex:1,backgroundColor:"black",borderRadius:50,flexDirection:"row",paddingHorizontal:10,paddingVertical:5,justifyContent:"center",marginHorizontal:"20%",marginTop:10},
  cpbutton:{flex:1,backgroundColor:"black",borderRadius:50,flexDirection:"row",paddingHorizontal:10,paddingVertical:5,justifyContent:"center",marginHorizontal:"20%",marginVertical:10},

  pinputcontainer:{flex:1,flexDirection:"row",alignItems:"center",color:"black",marginLeft:10,height:40,borderBottomWidth:2,borderBottomColor:"black",marginHorizontal:10},
  pinput:{ width:"90%",color:"black"},
  rpinput:{ width:"80%",color:"black"},

  signupinputcontainer:{flex:1,flexDirection:"row",alignItems:"center",marginLeft:10,height:40,borderBottomWidth:3,borderBottomColor:"white",marginHorizontal:10},
  signinput:{ width:"90%"},
  rsigninput:{ width:"80%",color:"white"},

  profilebtncnt:{flexDirection:"row",alignItems:"center",marginHorizontal:2,marginTop:10,elevation:15},
  profilebtnicon:{backgroundColor:"black",borderTopLeftRadius:50,borderBottomLeftRadius:50,borderWidth:1,borderColor:"black",paddingVertical:10,paddingLeft:8,paddingRight:2},
  profilebtntext:{backgroundColor:"white",borderTopRightRadius:50,borderBottomRightRadius:50,borderWidth:1,borderColor:"white",paddingHorizontal:5,paddingVertical:10},

  profilebtntext1:{backgroundColor:"white",borderTopRightRadius:50,borderBottomRightRadius:50,borderWidth:1,borderColor:"white",width:115,paddingHorizontal:5,paddingVertical:10},

  walletbuttoncontainer:{flexDirection:"row",justifyContent:"center",alignItems:"center",marginHorizontal:10,marginVertical:20},
  walletbtn:{borderRadius:10,flex:1,borderWidth:1,borderColor:"black",marginVertical:10,alignItems:"center",paddingVertical:10},
  walletbtn1:{borderRadius:10,flex:1,marginHorizontal:10,marginVertical:10,alignItems:"center",paddingVertical:10},

  wvaluesbcontainer:{flexDirection:"row",marginHorizontal:30,justifyContent:"space-between",alignItems:"center"},
  wvaluesbcolorcontainer:{flexDirection:"row",marginHorizontal:30,justifyContent:"space-between",backgroundColor:"#bfbfbf",borderRadius:5,alignItems:"center"},
  wvaluesbtext:{flex:1,textAlign:"left",marginRight:10,padding:10,},
  wvaluesbvalues:{flex:1,textAlign:"left",paddingLeft:12,marginLeft:20},

  wh:{fontWeight:"bold",marginLeft:20,marginVertical:0},

  allcomreportlist:{flex:1,backgroundColor: "white",marginHorizontal: 5,marginVertical: 5,borderRadius: 10,elevation: 6,alignItems: "flex-start", justifyContent: "center", paddingVertical:10,paddingHorizontal:10,borderWidth:4,borderColor:"black"},
  profileimgstyle:{ width: 100, height: 100, borderWidth: 5,borderColor: "white", borderRadius: 50, backgroundColor: "black", alignSelf: "center",},
  activityind:{flex:1,justifyContent:"center",alignItems:"center",alignSelf:"center",position:"absolute", left: 0, right: 0, top: 0, bottom: 0},

  shoplineargradientbank:{flexDirection: "row", justifyContent: "space-between", borderRadius: 5},
  shopmodal:{backgroundColor: "white", height: 150, alignSelf: "center", width: 300, borderRadius: 20},
  modalcrossicon:{ justifyContent: "flex-end", flexDirection: "row", marginVertical: 10, marginRight: 20},
  crossicon:{backgroundColor: "gray", borderRadius: 50},
  modalcontentcontainer:{flex: 1, justifyContent: "center", alignItems: "center"},
  modaltexth:{fontWeight: "bold", fontSize: 18 },

  rbsinput:{borderWidth:1,borderColor:"#000",marginHorizontal:20,borderRadius:5,marginVertical:5,height:40,},
  activityfeedflatlist:{flex: 1, backgroundColor: "white", marginHorizontal: 10, marginVertical: 5, borderRadius: 10, elevation: 6, alignItems: "flex-start", justifyContent: "center", padding: 10,borderWidth:4,borderColor:"black"},
  pickerbottom:{marginHorizontal: "12%", borderBottomWidth: 2, borderBottomColor: "black", marginBottom: 5,},
  pickerabove:{color: "#999797", marginTop: 5},
  progressbarcontainer:{flex: 1, marginVertical: 10, marginHorizontal: 10, borderRadius: 10, elevation: 8, backgroundColor: "white",},

  modalcontainer:{backgroundColor: "white", height: 280, alignSelf: "center", width: 300, borderRadius: 20},
  closeicon:{margin: 5, borderRadius: 50},

  item1:{ flex:1,marginVertical: 0,justifyContent:"center",paddingVertical:10,marginHorizontal:20,alignItems:"center",alignSelf:"center",borderRadius:5,borderWidth:1},
  item1title:{paddingVertical:0,fontSize:15},
  wpickercontainer:{marginHorizontal: "6%", borderBottomWidth: 2, borderBottomColor: "black", marginBottom: 0},
  wheadings:{fontWeight: "bold"},
  winput:{borderBottomWidth: 2, borderBottomColor: "black", marginHorizontal: 20},

  rbusdtimage:{flex:1,marginVertical:10,width:200,height:200,resizeMode:"contain",alignSelf:"center",borderWidth:0,borderColor:"black"},
  rbwalletmsg:{flex:1,textAlign:"center",fontWeight:"bold"},

  loginerror:{color:"red",marginLeft:30,marginTop:3},
  walleterror:{color:"red",marginLeft:20,marginTop:0},

  notes:{backgroundColor:"#bfbfbf",marginHorizontal:20,paddingHorizontal:10,borderRadius:10,paddingVertical:10},
  srcontainer:{flex:1},
  profileerror:{color:"red",marginLeft:10,height:16,padding:0,fontSize:12},

  shoperror:{color:"red",marginLeft:20}
})
