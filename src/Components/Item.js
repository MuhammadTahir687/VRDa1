import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";

const Item = ({ text1, onPress, backgroundColor, color }) => {
  return (

    <TouchableOpacity onPress={onPress} style={[styles.item1, {backgroundColor}]}>
      <Text style={[styles.item1title, {color}]}>{text1}</Text>
    </TouchableOpacity>
  )
}
export default Item
