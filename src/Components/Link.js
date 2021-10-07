import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";

const Link = ({ text,onPress,backgroundColor,color }) => {
  return (
    <TouchableOpacity style={[styles.link,{backgroundColor}]} onPress={onPress}>
      <Text style={[styles.linktext,{color}]}>{text}</Text>
    </TouchableOpacity>
  )
}
export default Link
