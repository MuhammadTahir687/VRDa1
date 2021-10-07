import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";

const MCText = ({ text1,text2 }) => {
  return (
    <View style={styles.  modaldatacontainer}>
      <Text style={styles.modaldatatext}>{text1}</Text>
      <Text style={styles.modaldatavalues}>{text2}</Text>
    </View>
  )
}
export default MCText
