import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const WS = ({ text1,text2,text3,iconname,onPress }) => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 20, alignItems: "center",marginVertical:10 }} onPress={onPress}>
      <LinearGradient colors={["#0c0808", "#a49f9f"]} style={{ borderRadius: 50, paddingHorizontal: 10 }}>
        <Text style={{ color: "white", padding: 10 }}>{text1}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}
export default WS
