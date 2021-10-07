import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Button, Dimensions } from "react-native";
import styles from "./StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { ProgressBar } from "react-native-paper";
import * as Progress from "react-native-progress";

export default function Report() {
  const [isModalVisible, setModalVisible] = useState();
  const devicewidth= Dimensions.get('screen').width;
  const deviceheight=Dimensions.get('screen').height;
  const DATA = [
    { id: 1, title: "Ref.Code", Total: "$500000", Status: 0 },
    { id: 2, title: "Ref.Code", Total: "$500000", Status: 0 },
    { id: 3, title: "Ref.Code", Total: "$500000", Status: 0 },
    { id: 4, title: "Ref.Code", Total: "$500000", Status: 0 },
    { id: 5, title: "Ref.Code", Total: "$500000", Status: 0 },
    { id: 6, title: "Ref.Code", Total: "$500000", Status: 0 },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{marginLeft:12,marginVertical:5}}><Text style={{fontSize:15}}>My Purchase</Text></View>
      <FlatList data={DATA}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={() => {
                    setModalVisible(true);
                  }} style={{
                    flex: 1,
                    backgroundColor: "white",
                    marginHorizontal: 10,
                    marginVertical: 5,
                    borderRadius: 10,
                    elevation: 6,
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: 10,
                  }}>
                    <Text style={styles.comitem}>{item.title}</Text>
                    <Text style={styles.comitem}>Price</Text>
                    <Text style={styles.comitem}>BV</Text>
                    <Ionicons name="eye" size={18} style={{ marginLeft: 12 }} />
                  </TouchableOpacity>
                )}
      />
      <Modal isVisible={isModalVisible}>
        <View style={{flex:0.58, backgroundColor: "white", alignSelf: "center",width: "90%", borderRadius: 20 }}>
          <View style={styles.modaluser}>
            <View style={styles.modalh}>
              <Ionicons name="person" size={15} color="white"/>
              <Text style={styles.modalhtext}>Hello!</Text>
            </View>
            <TouchableOpacity style={styles.modaliconclose} onPress={()=>{setModalVisible(false)}}>
              <Ionicons name="close" size={15} color="white" style={{margin:5,borderRadius:50}} />
            </TouchableOpacity>
          </View>
          <View style={styles.  modaldatacontainers}>
            <Text style={styles.modaldatatexts}>Ref.Code</Text>
            <Text style={styles.modaldatavaluess}>xcbxBJJCXJHB</Text>
          </View>
          <View style={styles.  modaldatacontainer}>
            <Text style={styles.modaldatatext}>Price</Text>
            <Text style={styles.modaldatavalues}>$400</Text>
          </View>
          <View style={styles.  modaldatacontainers}>
            <Text style={styles.modaldatatexts}>BV</Text>
            <Text style={styles.modaldatavaluess}>400</Text>
          </View>
          <View style={styles.  modaldatacontainer}>
            <Text style={styles.modaldatatext}>VERIT Points</Text>
            <Text style={styles.modaldatavalues}>0</Text>
          </View>
          <View style={styles.  modaldatacontainers}>
            <Text style={styles.modaldatatexts}>VERIT Bonus</Text>
            <Text style={styles.modaldatavaluess}>0</Text>
          </View>
          <View style={styles.  modaldatacontainer}>
            <Text style={styles.modaldatatext}>VERIT Point Price</Text>
            <Text style={styles.modaldatavalues}>0.25</Text>
          </View>
          <View style={styles.  modaldatacontainers}>
            <Text style={styles.modaldatatexts}>Package</Text>
            <Text style={styles.modaldatavaluess}>Zero</Text>
          </View>
          <View style={styles.  modaldatacontainer}>
            <Text style={styles.modaldatatext}>Date</Text>
            <Text style={styles.modaldatavalues}>2021-7-28</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>


  );
}
