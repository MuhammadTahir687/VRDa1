import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { Avatar } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import styles from "../StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { GETAPI } from "../API/APIResponse";

export default function BTC({ navigation }) {

  const [btcaddress, setBtcaddress] = useState();
  const [branchname, setBranchname] = useState();
  const [image, setImage] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [role, setrole] = useState();
  const [title, setTitle] = useState();

  useEffect(async () => {await response()}, []);

  const response = async () => {
    try {
      const response = await GETAPI("/api/profile");
      const res =  await GETAPI("/api/btc-profile")
      setBtcaddress(res.data.btc)
      setFirstname(response.data.user.first_name);
      setLastname(response.data.user.last_name);
      setTitle(response.data.user.title);
      setImage(response.data.user.picture);
      setrole(response.data.user.role);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient colors={["#0c0808", "#a49f9f"]} style={{ flex: 1 }}>
          <ImageBackground source={require("../Assets/HEader.png")} style={styles.profilebackimg}>
            <TouchableOpacity onPress={() => {
              navigation.navigate("PMain");
            }} style={{ flexDirection: "row", marginLeft: 10, alignItems: "center", marginTop: 30 }}>
              <Ionicons name="chevron-back-sharp" size={21} color="white" />
              <Text style={{ color: "white", fontSize: 18 }}>Profile</Text>
            </TouchableOpacity>
            <View style={styles.profilemaincontainer}>
              <View style={{ bottom: 55 }}>
                <View style={{ elevation: 12 }}>
                  <Image source={{uri:image}} style={styles.profileimgstyle} />
                </View>
                <Text style={styles.profilename}>{title} {firstname} {lastname}</Text>
                <Text style={styles.profiledesignation}>{role}</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("UBTC")}}>
                  <LinearGradient colors={["#0c0808", "#a49f9f"]} style={styles.bdbutton}>
                     <FontAwesome name="bitcoin" size={20} color="white" style={{marginRight:8}}/>
                    <Text style={styles.modalhtext}>Update BTC</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={styles. pdatacontainer}>
                <Text style={{fontWeight:"bold",marginLeft:25}}>BTC Detail</Text>
              </View>
              <View style={styles. pdatacontainer}>
                <Text style={styles.pddatatext}>QR Code</Text>
                <Image style={{width:115,height:111,marginHorizontal:10,marginVertical:10}} source={require('../Assets/qrcode.jpg')}/>
              </View>
              <View style={styles. pdatacontainers}>
                <Text style={styles.pddatatexts}>BTC Address</Text>
                <Text style={styles.pddatavaluess}>{btcaddress}</Text>
              </View>
            </View>
          </ImageBackground>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>

  );
}
