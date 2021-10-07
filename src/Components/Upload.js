import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const Select = ({ text1,iconname,onPress }) => {
  return (
    <TouchableOpacity style={styles.bankbutton} onPress={onPress}>
      <LinearGradient colors={["#0c0808", "#747272"]} style={styles.shoplineargradientbank}>
        <Text style={styles.bankbuttontext}>{text1}</Text>
        <Ionicons name={iconname} color="white" size={20} style={styles.bankbuttontext} />
      </LinearGradient>
    </TouchableOpacity>
  )
}
export default Select
