import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import styles from "./StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { ProgressBar } from "react-native-paper";
import * as Progress from "react-native-progress";
import CountDown from 'react-native-countdown-component';
import { GETAPI } from "./API/APIResponse";
import MText from "./Components/ModalText";
import MCText from "./Components/ModalColorText";
import Clock from "./Components/CountDown";

export default function ActivityFeed() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading,setLoading]=useState(true)
  const [show,setShow]=useState(false)
  const [data,setData]=useState([])
  const [getitem,setGetitem]=useState('')
  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
      const response= await GETAPI("/api/activity-feeds")
      setData(response.data.data)
      setLoading(false)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ActivityIndicator animating={loading} size="large" color="black"  style={styles.activityind}/>
      <View style={{marginVertical:10}}>
        <FlatList data={data}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => {
                      setGetitem(item),
                      setModalVisible(true)
                    }} style={styles.activityfeedflatlist}>
                      <Text style={styles.activityfeeditemh}>{item.heading}</Text>
                      <Text style={styles.comitem1}>{item.date}</Text>
                    </TouchableOpacity>
                  )}
        />
      </View>
          <Modal isVisible={isModalVisible}>
            <View style={{backgroundColor: "white", height: 180, alignSelf: "center", width: 300, borderRadius: 20 }}>
              <View style={styles.modaluser}>
                <View style={styles.modalh}>
                  <Ionicons name="person" size={15} color="white"/>
                  <Text style={styles.modalhtext}>User</Text>
                </View>
                <TouchableOpacity style={styles.modaliconclose} onPress={()=>{setModalVisible(false)}}>
                  <Ionicons name="close" size={15} color="white" style={{margin:5,borderRadius:50}} />
                </TouchableOpacity>
              </View>
              <Text style={{fontWeight:"bold",fontSize:15,marginHorizontal:10}}>{getitem.heading}</Text>
              <Text style={{fontSize:15,marginHorizontal:10,textAlign:"justify"}}>{getitem.detail}</Text>
            </View>
          </Modal>
    </SafeAreaView>


  );
}
