import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";

const H = ({ text }) => {
  return (
    <View>
      <Text style={styles.dashboardh1}>{text}</Text>
    </View>
  )
}
export default H
