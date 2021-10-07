import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";

const RBTextHighLight = ({ text1,text2 }) => {
  return (
    <View style={styles.pdpickervaluesbcolorcontainer}>
      <Text style={styles.pdpickervaluesbtext}>{text1}</Text>
      <Text style={styles.pdpickervaluesbvalues}>{text2}</Text>
    </View>
  )
}
export default RBTextHighLight
