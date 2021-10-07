import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";
import Progress from "react-native-progress";

const PText = ({ text1,progress }) => {
  return (
    <View style={styles.  modaldatacontainers}>
      <Text style={styles.modaldatatexts}>{text1}</Text>
      <Progress.Bar progress={progress} color="#39f108" style={styles.pgbarmodal} width={100} />
    </View>
  )
}
export default PText
