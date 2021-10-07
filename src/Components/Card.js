import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const Card = ({ text1,text2,iconname }) => {
  return (
    <LinearGradient colors={["#0c0808", "#8d8a8a"]} style={styles.card}>
      <View style={styles.cardicon}>
        <Ionicons name={iconname} color="white" size={25} />
      </View>
      <View>
        <Text style={styles.cardtext}>{text1}</Text>
        <Text style={styles.cardvalue}>{text2}</Text>
      </View>
    </LinearGradient>
  )
}
export default Card
