import React, { Component } from 'react'
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Progress from "react-native-progress";

const ProgressBar = ({ text1,value1,text2,value2,text3,value3,value4,progress }) => {
  const devicewidth = Dimensions.get("screen").width;
  const deviceheight = Dimensions.get("screen").height;
  return (
    <View style={styles.progressbarcontainer}>
      <Text style={{ fontSize: 15, marginHorizontal: 10, marginTop: 10 }}>{text1}<Text
        style={styles.pgbottomtext}>{value1}</Text></Text>
      <View style={{ flexDirection: "row" }}>
        <Progress.Bar progress={progress} color="black" style={styles.pgbar} width={devicewidth / 1.35} />
        <Text style={styles.pgpercent}>{value4}</Text>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <Text style={styles.pgbottomtext}>{text2} {value2} </Text>
        <Text style={styles.pgbottomtext}>{text3} {value3}</Text>
      </View>
    </View>
  )
}
export default ProgressBar
