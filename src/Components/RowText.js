import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";

const RowText = ({ text1,text2,text3,iconname,backgroundColor }) => {
  return (
    <View style={[styles.sheetcontainer,{backgroundColor}]}>
      <Ionicons name={iconname} size={18} style={styles.sheeticon} />
      <Text style={styles.sheettext}>{text1}</Text>
      <Text style={styles.sheetvalues}>{text2} {text3}</Text>
    </View>
  )
}
export default RowText
