import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import styles from "../StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { ProgressBar } from "react-native-paper";
import * as Progress from "react-native-progress";
import axios from "axios";
import { GETAPI } from "../API/APIResponse";
import MText from "../Components/ModalText";
import MCText from "../Components/ModalColorText";

export default function BinaryComission() {
  const [isModalVisible, setModalVisible] = useState();
  const [getdata, setGetdata] = useState([]);
  const [modaldata, setModaldata] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
     const response= await GETAPI("/api/get-commission-report/all")
          setGetdata(response.data);
          setLoading(false)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ActivityIndicator animating={loading} size="large" color="black"  style={styles.activityind}/>
      <FlatList data={getdata.filter(item => item && item.type =="Binary")}
                maxToRenderPerBatch={5}
                onEndReachedThreshold={0.7}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={() => {
                    setModaldata(item)
                    setShow(true)
                    setModalVisible(true);
                  }} style={styles.allcomreportlist}>
                    <Text style={styles.comitem}>Ref.Code</Text>
                    <Text style={{fontSize:15}}>{item.pin_code}</Text>
                    <Text style={styles.comitem}>Price  <Text style={{fontSize:15,fontWeight:"normal"}}>{item.total}</Text></Text>
                    <Ionicons name="eye" size={18}  />
                  </TouchableOpacity>
                )}
      />
      {show == true ? <Modal isVisible={isModalVisible}>
        <View style={{ flex: 0.58, backgroundColor: "white", alignSelf: "center", width: "98%", borderRadius: 20 }}>
          <View style={styles.modaluser}>
            <View style={styles.modalh}>
              <Ionicons name="person" size={15} color="white" />
              <Text style={styles.modalhtext}>User</Text>
            </View>
            <TouchableOpacity style={styles.modaliconclose} onPress={() => {setShow(false),setModalVisible(false);}}>
              <Ionicons name="close" size={15} color="white" style={{ margin: 5, borderRadius: 50 }} />
            </TouchableOpacity>
          </View>
          <MText text1={"Ref.Code"} text2={modaldata.pin_code}/>
          <MCText text1={"Price"} text2={modaldata.total}/>
          <MText text1={"Reciever"} text2={modaldata.user.name}/>
          <MCText text1={"Generator"} text2={modaldata.fromUser}/>
          <MText text1={"Side"} text2={modaldata.side}/>
          <MCText text1={"Type"} text2={modaldata.type}/>
          <MText text1={"Status"} text2={modaldata.status}/>
          <MCText text1={"Closing Date"} text2={modaldata.closing_date}/>
        </View>
      </Modal> : <View></View>}
    </SafeAreaView>

  );
}
