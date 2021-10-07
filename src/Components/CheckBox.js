import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";
import { CheckBox } from "react-native-elements";

const Check = ({ text1,text2,text3,iconname,onPress,checked }) => {
  return (
    <CheckBox
      checkedIcon={<Ionicons name="checkmark-done-circle" size={18} />}
      uncheckedIcon={<Ionicons name="checkmark-done-circle-outline" size={18} />}
      onPress={onPress}
      checked={checked}
      containerStyle={{ backgroundColor: "transparent", padding:0,marginLeft:18,height:25,marginBottom:0 }}
      title="Term of Condition"

    />
  )
}
export default Check
