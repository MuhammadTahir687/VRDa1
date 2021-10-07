import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const Submit = ({ text,onPress,iconname }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.bankbutton1}>
      <LinearGradient colors={["#0c0808", "#747272"]} style={styles.submitbutton}>
        <Text style={styles.bankbuttontext}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}
export default Submit
