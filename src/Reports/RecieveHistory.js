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

export default function RecieveHistory() {
  const [isModalVisible, setModalVisible] = useState();
  const [data,setdata]=useState([]);
  const [item,setItem]=useState('');
  const [show, setShow] = useState(false);

  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
      const response= await GETAPI("/api/my-receiving")
      console.log(response.data)
      setdata(response.data)
    } catch (e) {console.log(e)}
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <H text={"Recieve History"}/>
      <FlatList data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={() => {setItem(item),setShow(true),setModalVisible(true)}} style={styles.allcomreportlist}>
                    <Text style={styles.comitem}>Ref.Code {item.code}</Text>
                    <Text style={styles.comitem}>Price  <Text style={{fontSize:15,fontWeight:"normal"}}>{item.amount}</Text></Text>
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
            <MText text1={"Amount"} text2={item.amount} backgroundColor={"#bfbfbf"}/>
            <MText text1={"From"} text2={item.createdFor} backgroundColor={"transparent"}/>
            <MText text1={"Date"} text2={item.created_at} backgroundColor={"#bfbfbf"}/>
            <MText text1={"Status"} text2={item.status} backgroundColor={"transparent"}/>
            <MText text1={"Sender Message"} text2={item.admin_feedback} backgroundColor={"#bfbfbf"} paddingRight={"1%"}/>
          </View>
        </Modal> : <View></View> }
    </SafeAreaView>

  );
}
