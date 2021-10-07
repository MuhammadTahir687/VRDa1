import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { Avatar } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import styles from '../StyleSheet/Style'
import Ionicons from "react-native-vector-icons/Ionicons";
import { GETAPI } from "../API/APIResponse";

export default function  ProfileMain ({navigation}) {
  const [image, setImage] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [role, setrole] = useState();
  const [title, setTitle] = useState();
  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
      const response = await GETAPI("/api/profile");
      setFirstname(response.data.user.first_name);
      setLastname(response.data.user.last_name);
      setTitle(response.data.user.title);
      setImage(response.data.user.picture);
      setrole(response.data.user.role);
    } catch (e) {console.log(e)}
  };
  return(
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{flex:1}} contentContainerStyle={{flexGrow:1}} >
      <LinearGradient colors={["#0c0808", "#a49f9f"]} style={{flex:1}}>
        <ImageBackground source={require('../Assets/HEader.png')} style={styles.profilebackimg}>
          <TouchableOpacity onPress={()=>{navigation.navigate('Dashboard')}} style={{flexDirection:"row",marginLeft:10,alignItems:"center",marginTop:30}}>
            <Ionicons name="chevron-back-sharp" size={21} color="white"/>
          <Text style={{color:"white",fontSize:18}}>Profile</Text>
          </TouchableOpacity>

      <View style={styles.profilemaincontainer}>
        <View style={{bottom:55}} >
          <View style={{elevation:12}}>
          <Image source={{uri:image}} style={{width:100,height:100,borderWidth:5,borderColor:"white",borderRadius:50,backgroundColor:"red",alignSelf:"center"}}/>
          </View>
          <Text style={styles.profilename}>{title} {firstname} {lastname}</Text>
          <Text style={styles.profiledesignation}>{role}</Text>
        </View>
            <TouchableOpacity onPress={()=>{navigation.navigate('PDetail')}} >
              <LinearGradient colors={["#0c0808", "#a49f9f"]} style={styles.profilebutton}>
                <Ionicons name='person' color="white" size={18}/>
                <Text style={{color:"white"}}>Personel Detail</Text>
                <Ionicons name="arrow-redo-circle-outline" color="white" size={18}/>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate("PInfo")}} >
              <LinearGradient colors={["#0c0808", "#a49f9f"]} style={styles.profilebutton}>
                <Ionicons name='person' color="white" size={18}/>
                <Text style={{color:"white"}}>Personel Info</Text>
                <Ionicons name="arrow-redo-circle-outline" color="white" size={18}/>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate("BDetail")}} >
              <LinearGradient colors={["#0c0808", "#a49f9f"]} style={styles.profilebutton}>
                <Ionicons name='person' color="white" size={18}/>
                <Text style={{color:"white"}}>Bank Details</Text>
                <Ionicons name="arrow-redo-circle-outline" color="white" size={18}/>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity  onPress={()=>{navigation.navigate("BTC")}} >
              <LinearGradient colors={["#0c0808", "#a49f9f"]} style={styles.profilebutton}>
                <Ionicons name='person' color="white" size={18}/>
                <Text style={{color:"white"}}>BTC</Text>
                <Ionicons name="arrow-redo-circle-outline" color="white" size={18}/>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate("USDT")}}>
              <LinearGradient colors={["#0c0808", "#a49f9f"]} style={styles.profilebutton}>
                <Ionicons name='person' color="white" size={18}/>
                <Text style={{color:"white"}}>USDT</Text>
                <Ionicons name="arrow-redo-circle-outline" color="white" size={18}/>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate("ChangePassword")}} >
              <LinearGradient colors={["#0c0808", "#a49f9f"]} style={styles.profilebutton}>
                <Ionicons name='person' color="white" size={18}/>
                <Text style={{color:"white"}}>Change Password</Text>
                <Ionicons name="arrow-redo-circle-outline" color="white" size={18}/>
              </LinearGradient>
            </TouchableOpacity>
        </View>

        </ImageBackground>
      </LinearGradient>
      </ScrollView>
    </SafeAreaView>

  )
}
