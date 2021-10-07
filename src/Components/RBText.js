import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";

const RBText = ({ text1,text2,backgroundColor }) => {
  return (
    <View style={[styles.pdpickervaluesbcontainer,{backgroundColor}]}>
      <Text style={styles.pdpickervaluesbtext}>{text1}</Text>
      <Text style={styles.pdpickervaluesbvalues}>{text2}</Text>
    </View>
  )
}
export default RBText
