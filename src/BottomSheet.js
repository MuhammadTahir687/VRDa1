import React, { useState, useRef } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "./StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

export default function Bottomsheet() {

  return (
    <View>
      <View style={styles.sheetitemcontainer}>
        <Text style={styles.sheetitemtitle}>{props.getdata.title}</Text>
        <TouchableOpacity onPress={() => refRBSheet.current.close()} style={{ marginTop: 10 }}><Ionicons
          name="close-circle" color="grey" size={28} /></TouchableOpacity>
      </View>
      <View style={styles.sheetcontainer}>
        <LinearGradient colors={["#0c0808", "#a49f9f"]} style={{ borderRadius: 5 }}>
          <TouchableOpacity><Text style={{ color: "white", padding: 10 }}>Package Detais</Text></TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity style={{ borderRadius: 5, borderColor: "#999797", borderWidth: 1 }}><Text style={{ color: "#999797", padding: 8 }}>Proceed Order</Text></TouchableOpacity>
      </View>
      <View style={styles.sheetcontainer}>
        <Ionicons name="checkmark-circle-outline" size={18} style={styles.sheeticon} />
        <Text style={styles.sheettext}>Price</Text>
        <Text style={styles.sheetvalues}>{getdata.Price}</Text>
      </View>
      <View style={styles.sheetcontainerhighlight}>
        <Ionicons name="checkmark-circle-outline" size={18} style={styles.sheeticon} />
        <Text style={styles.sheettext}>Subscription Fee</Text>
        <Text style={styles.sheetvalues}>$50</Text>
      </View>
      <View style={styles.sheetcontainer}>
        <Ionicons name="checkmark-circle-outline" size={18} style={styles.sheeticon} />
        <Text style={styles.sheettext}>Business Volume</Text>
        <Text style={styles.sheetvalues}>50000 BV</Text>
      </View>
      <View style={styles.sheetcontainer}>
        <Ionicons name="checkmark-circle-outline" size={18} style={styles.sheeticon} />
        <Text style={styles.sheettext}>Escrow Time</Text>
        <Text style={styles.sheetvalues}>1095 days</Text>
      </View>
      <View style={styles.sheetcontainer}>
        <Ionicons name="checkmark-circle-outline" size={18} style={styles.sheeticon} />
        <Text style={styles.sheettext}>Direct Commission</Text>
        <Text style={styles.sheetvalues}>10%</Text>
      </View>
      <View style={styles.sheetcontainerhighlight}>
        <Ionicons name="checkmark-circle-outline" size={18} style={styles.sheeticon} />
        <Text style={styles.sheettext}>Binary Comission</Text>
        <Text style={styles.sheetvalues}>8%</Text>
      </View>
      <View style={styles.sheetcontainer}>
        <Ionicons name="checkmark-circle-outline" size={18} style={styles.sheeticon} />
        <Text style={styles.sheettext}>Maxout Per Week </Text>
        <Text style={styles.sheetvalues}>$20000</Text>
      </View>
      <View style={styles.sheetcontainerhighlight}>
        <Ionicons name="checkmark-circle-outline" size={18} style={styles.sheeticon} />
        <Text style={styles.sheettext}>Extra Tokens</Text>
        <Text style={styles.sheetvalues}>150%</Text>
      </View>
    </View>
  );
}

