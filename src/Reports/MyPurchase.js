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
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

export default function MyPurchase() {
  const navigation=useNavigation()
  const [isModalVisible, setModalVisible] = useState();
  const [data,setdata]=useState([]);
  const [item,setItem]=useState('');
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
      const response= await GETAPI("/api/purchase-report")
      setdata(response.data)
    } catch (e) {console.log(e)}
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <H text={"My Purchase"}/>
      <FlatList data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={() => {setItem(item),setShow(true),setModalVisible(true)}} style={styles.allcomreportlist}>
                    <Text style={styles.comitem}>Ref.Code {item.code}</Text>
                    <Text style={styles.comitem}>Price  <Text style={{fontSize:15,fontWeight:"normal"}}>{item.package_price}</Text></Text>
                    <Ionicons name="eye" size={18} />
                  </TouchableOpacity>
                )}
      />
      {show==true?
        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 0.58, backgroundColor: "white", alignSelf: "center", width: "98%", borderRadius: 20 }}>
            <View style={styles.modaluser}>
              <View style={styles.modalh}>
                <Ionicons name="person" size={15} color="white" />
                <Text style={styles.modalhtext}>User</Text>
              </View>
              <TouchableOpacity style={styles.modaliconclose} onPress={() => {setShow(false),setModalVisible(false)}}>
                <Ionicons name="close" size={15} color="white" style={{ margin: 5, borderRadius: 50 }} />
              </TouchableOpacity>
            </View>
            <MText text1={"Ref.Code"} text2={item.code} backgroundColor={"transparent"}/>
            <MText text1={"Package Name"} text2={item.package_name} backgroundColor={"#bfbfbf"}/>
            <MText text1={"Package Price"} text2={item.package_price} backgroundColor={"transparent"}/>
            <MText text1={"BV"} text2={item.package_business_volume} backgroundColor={"#bfbfbf"}/>
            <MText text1={"VREIT Points"} text2={item.tokens_assigned} backgroundColor={"transparent"}/>
            <MText text1={"VREIT Bonus"} text2={item.extra_tokens_assigned} backgroundColor={"#bfbfbf"}/>
            <MText text1={"VREIT Points Price"} text2={item.per_token_price} backgroundColor={"transparent"}/>
            <MText text1={"VREIT Points Price"} text2={item.used_at} backgroundColor={"#bfbfbf"}/>
          </View>
        </Modal> : <View></View> }
    </SafeAreaView>


  );
}
