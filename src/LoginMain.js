import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function LoginMain({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient  colors={["#0c0808", "#c1bdbd"]} style={{flex:1}}>
      <View style={{alignItems:"center",marginTop:20}}>
        <Image source={require('./Assets/Logo.png')} style={{width:180,height:200}}/>
      </View>
        <View style={{flex:1,justifyContent:"center",marginHorizontal:10}}>
          <Image source={require('./Assets/vrda1.png')} style={{width:"100%",height:"35%",resizeMode:"contain",borderRadius:10,backfaceVisibility:"hidden",marginBottom:10}}/>
          <Text style={{textAlign:"center",color:"white",fontSize:17}}>Becoming part of VRDa1 will help you Globally-Growing-Comunity</Text>
        </View>
      <View style={styles.loginbcontainer}>
        <TouchableOpacity style={styles.loginmainb1} onPress={()=>navigation.navigate('Login')}><Text style={{color:"white",fontSize:15}}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginmainb2} onPress={()=>navigation.navigate('Signup')}><Text style={{color:"black",fontSize:15}}>Signup</Text></TouchableOpacity>
      </View>
      </LinearGradient>
    </SafeAreaView>
  )
}
