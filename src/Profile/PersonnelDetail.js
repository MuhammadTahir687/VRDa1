import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground, FlatList } from "react-native";
import { Avatar } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import styles from "../StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GETAPI } from "../API/APIResponse";
import axios from "axios";
import PRText from "../Components/PRText";

export default function ProfileDetail({ navigation }) {

  const [image, setImage] = useState();
  const [username, setUsername] = useState();
  const [joined, setJoined] = useState();
  const [identity, setIdentity] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [role, setrole] = useState();
  const [title, setTitle] = useState();

  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
      const response = await GETAPI("/api/profile");
      const res = await GETAPI("/api/profile");
      setUsername(response.data.user.name);
      setIdentity(response.data.user.identity);
      setEmail(response.data.user.email);
      setPhone(response.data.user.phone_no);
      setImage(response.data.user.picture);
      setJoined(response.data.user.created_at);
      setFirstname(res.data.user.first_name);
      setLastname(res.data.user.last_name);
      setTitle(res.data.user.title);
      setrole(res.data.user.role);
    } catch (e) {console.log(e)}
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
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
                  <Image source={{ uri: image }} style={styles.profileimgstyle} />
                </View>
                <Text style={styles.profilename}>{title} {firstname} {lastname}</Text>
                <Text style={styles.profiledesignation}>{role}</Text>
              </View>
              <View style={styles.pdatacontainer}>
                <Text style={{ fontWeight: "bold", marginLeft: 10 }}>PERSONAL DETAIL</Text>
              </View>
              <PRText text1={"Username"} text2={username}/>
              <PRText text1={"Joined"} text2={joined} backgroundColor={"#bfbfbf"}/>
              <PRText text1={"Identity"} text2={identity}/>
              <PRText text1={"Username"} text2={username} backgroundColor={"#bfbfbf"}/>
              <PRText text1={"Primary Email"} text2={email}/>
              <PRText text1={"Phone #1"} text2={phone} backgroundColor={"#bfbfbf"}/>
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
    </SafeAreaView>

  );
}
