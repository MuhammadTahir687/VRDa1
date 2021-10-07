import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";

const MText = ({ text1,text2,backgroundColor,paddingRight}) => {
  return (
    <View style={[styles.  modaldatacontainers,{backgroundColor},{paddingRight}]}>
      <Text style={styles.modaldatatexts}>{text1}</Text>
      <Text style={styles.modaldatavaluess}>{text2}</Text>
    </View>
  )
}
export default MText
