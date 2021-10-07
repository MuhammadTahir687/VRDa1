import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from "react-native";
import styles from '../StyleSheet/Style';
import Ionicons from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";

const RBModal= ({ text1,text2,onPress,iconname }) => {
  return (
    <Modal isVisible={text2}>
      <View style={styles.shopmodal}>
        <TouchableOpacity onPress={onPress} style={styles.modalcrossicon}>
          <Ionicons name={iconname} color="white" size={20} style={styles.crossicon} />
        </TouchableOpacity>
        <View style={styles.modalcontentcontainer}>
          <Text style={styles.modaltexth}>{text1}</Text>
        </View>
      </View>
    </Modal>
  )
}
export default RBModal
