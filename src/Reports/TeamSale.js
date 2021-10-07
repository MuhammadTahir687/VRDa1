import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Button, Dimensions } from "react-native";
import styles from "../StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { ProgressBar } from "react-native-paper";
import * as Progress from "react-native-progress";
import { GETAPI } from "../API/APIResponse";
import MText from "../Components/ModalText";
import MCText from "../Components/ModalColorText";
import H from '../Components/H'

export default function TeamSale() {
  const [isModalVisible, setModalVisible] = useState();
  const [data,setdata]=useState([]);
  const [item,setItem]=useState('');
  const [show, setShow] = useState(false);

  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
      const response= await GETAPI("/api/team-sale")
      setdata(response.data)
    } catch (e) {console.log(e)}
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <H text={"Team Sale"}/>
      <FlatList data={data}
                keyExtractor={(item) => item.used_at}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={() => {setItem(item),setShow(true),setModalVisible(true)}} style={styles.allcomreportlist}>
                    <Text style={styles.comitem}>{item.package_name}</Text>
                    <Text style={styles.comitem}>{item.used_at}</Text>
                    <Ionicons name="eye" size={18} />
                  </TouchableOpacity>
                )}
      />
      {show==true?
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 0.4, backgroundColor: "white", alignSelf: "center",width:"98%", borderRadius: 20 }}>
            <View style={styles.modaluser}>
              <View style={styles.modalh}>
                <Ionicons name="person" size={15} color="white" />
                <Text style={styles.modalhtext}>User</Text>
              </View>
              <TouchableOpacity style={styles.modaliconclose} onPress={() => {setShow(false),setModalVisible(false)}}>
                <Ionicons name="close" size={15} color="white" style={{ margin: 5, borderRadius: 50 }} />
              </TouchableOpacity>
            </View>
            <MText text1={"Package Name"} text2={item.package_name} backgroundColor={"#bfbfbf"}/>
            <MText text1={"Side"} text2={item.position} backgroundColor={"transparent"}/>
            <MText text1={"BV"} text2={item.package_business_volume} backgroundColor={"#bfbfbf"}/>
            <MText text1={"User"} text2={item.usedBy} backgroundColor={"transparent"}/>
            <MText text1={"Date"} text2={item.used_at} backgroundColor={"#bfbfbf"}/>
          </View>
        </Modal> : <View></View> }
    </SafeAreaView>


  );
}
