import React,{useState} from 'react';
import {View,Text,Image,TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Comission from "./Comission";
import { useNavigation } from "@react-navigation/native";

export default function CustomTab(){

const navigation=useNavigation();
  return(

  <View style={{ top: -25,flex:1,alignItems:"center" }}>
    <TouchableOpacity onPress={()=>navigation.navigate('Commission')} style={{width:50,height:50,borderRadius:50,backgroundColor:"black",borderTopColor:"black",alignItems:"center",elevation:10}}>
      <Fontisto name="money-symbol" color="white" size={20} style={{position:"absolute",width:20,height:20,marginTop:14}}/>
    </TouchableOpacity>
  </View>
  )
}
