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
  const [isModalVisible, setModalVisible] = useState();
  const [loading,setLoading]=useState(true)
  const [show,setShow]=useState(false)
  const [data,setData]=useState([])
  const [getitem,setGetitem]=useState()
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
      <ScrollView>
      <View style={styles.timerhcontainer}>
        <Text style={styles.timerh}>Next Commissions</Text>
      </View>
      <Clock />
      <View style={{marginVertical:10}}>
        <FlatList data={data}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => {
                      setGetitem(item),
                        setShow(true)
                      setModalVisible(true)
                    }} style={styles.activityfeedflatlist}>
                      <Text style={styles.activityfeeditemh}>{item.heading}</Text>
                      {/*<Text style={styles.comitem2}>{item.detail}</Text>*/}
                      <Text style={styles.comitem1}>{item.date}</Text>
                    </TouchableOpacity>
                  )}
        />
      </View>
        {show==true?
          <Modal isVisible={isModalVisible}>
            <ScrollView style={{ backgroundColor: "white", height: 280, alignSelf: "center", width: 300, borderRadius: 20 }}>
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
              {/*<MText  text1={"Transaction"} text2={"7"}/>*/}
              {/*<MCText text1={"Total (50)"} text2={"50000"}/>*/}
              {/*<MText  text1={"70% (900)"} text2={"150,000"}/>*/}
              {/*<MCText text1={"30% (400)"} text2={"350,000"}/>*/}
              {/*<MText  text1={"Status"} text2={"150,000"}/>*/}
              {/*<MCText text1={"Closing Date"} text2={"2021-7-28"}/>*/}

              {/*<View style={styles.  modaldatacontainers}>*/}
              {/*  <Text style={styles.modaldatatexts}>Status</Text>*/}
              {/*  <Progress.Bar progress={0.8} color="#39f108" style={styles.pgbarmodal} width={100} />*/}
              {/*</View>*/}
            </ScrollView>
          </Modal>:<View></View>
        }

      </ScrollView>
    </SafeAreaView>


  );
}
