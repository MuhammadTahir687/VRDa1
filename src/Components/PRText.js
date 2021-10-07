import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";

const PRText = ({ text1,text2,backgroundColor }) => {
  return (
    <View style={[styles.pdatacontainer,{backgroundColor}]}>
      <Text style={styles.pddatatext}>{text1}</Text>
      <Text style={styles.pddatavalues}>{text2}</Text>
    </View>
  )
}
export default PRText
