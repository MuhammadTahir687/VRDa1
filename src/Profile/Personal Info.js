import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { Avatar } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import styles from "../StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { GETAPI } from "../API/APIResponse";
import PRText from "../Components/PRText";



export default function ProfileInfo({ navigation }) {

  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [identity, setIdentity] = useState();
  const [passport, setPassport] = useState();
  const [kin, setKin] = useState();
  const [image, setImage] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [role, setrole] = useState();
  const [title, setTitle] = useState();

  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
      const response=await GETAPI('/api/profile')
      console.log("Profile Info=======",response.data.user.country)
          setCountry(response.data.user.country);
          setIdentity(response.data.user.identity);
          setCity(response.data.user.city);
          setPassport(response.data.user.passport);
          setKin(response.data.user.kin_name)
          setImage(response.data.user.picture)
          setFirstname(response.data.user.first_name);
          setLastname(response.data.user.last_name);
          setTitle(response.data.user.title);
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
                <TouchableOpacity onPress={()=>{navigation.navigate('UPInfo')}}>
                  <LinearGradient colors={["#0c0808", "#a49f9f"]} style={styles.bdbutton}>
                    <Ionicons name="person" size={15} color="white" style={{marginRight:8}}/>
                    <Text style={styles.modalhtext}>Update Profile Info</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={styles. pdatacontainer}>
                <Text style={{fontWeight:"bold",marginLeft:10}}>PERSONAL INFO</Text>
              </View>
              <PRText text1={"Country"} text2={country} />
              <PRText text1={"City"} text2={city} backgroundColor={"#bfbfbf"}/>
              <PRText text1={"Identity"} text2={identity} />
              <PRText text1={"Passport"} text2={passport} backgroundColor={"#bfbfbf"}/>
              <PRText text1={"Next to Kin"} text2={kin} />
            </View>
          </ImageBackground>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>

  );
}
