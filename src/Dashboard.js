import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Dimensions,
  ActivityIndicator, FlatList,
} from "react-native";
import styles from "./StyleSheet/Style";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Progress from "react-native-progress";
import { getBackgroundColor } from "react-native/Libraries/LogBox/UI/LogBoxStyle";
import Cal from "./Calendar";
import { Calendar,Timeline} from "react-native-calendars";
import Agend from "./Agenda";
import axios from "axios";
import { GETAPI } from "./API/APIResponse";
import CardSilder from "react-native-cards-slider";
import Link from "./Components/Link";
import Card from "./Components/Card";
import H from './Components/H'
import ProgressBar from "./Components/ProgressBar";
import Item from "./Components/Item";
import ECalendar from "./Components/EventCalendar";
import EventCalendar from 'react-native-events-calendar';
import { sameDate } from "./Components/SameDate";
import XDate from 'xdate';

export default function Dashboard() {

  const [lbv, setLbv] = useState(0);
  const [rbv, setRbv] = useState(0);
  const [lcf, setLcf] = useState(0);
  const [rcf, setRcf] = useState(0);
  const [vpoints, setVpoints] = useState(0);
  const [tearned, setTearned] = useState(0);
  const [wreserve, setWreserve] = useState(0);
  const [btn,setBtn]=useState(0);
  const [vbonus, setVbonus] = useState(0);
  const [wearning, setWearning] = useState(0);
  const [nlabv, setNlabv] = useState(0);
  const [nlrempoint, setNlrempoint] = useState(0);
  const [nlreqpoint, setNlreqpoint] = useState(0);
  const [nrabv, setNrabv] = useState(0);
  const [nrrempoint, setNrrempoint] = useState(0);
  const [nrreqpoint, setNrreqpoint] = useState(0);
  const [loading, setLoading] = useState(true);
  const [event,setEvent]=useState([])
  const [currentDate,setCurrentDate]=useState('')
  const [startdate,setStartdate]=useState('')
  const [enddate,setEnddate]=useState('')
  const [eventtitle,setEventTilte]=useState('')
  const [eventdescription,setEventdescription]=useState('')
  useEffect(async () => {await response(),date()}, []);
  const date = () => {
    var a = new Date().getDate();
    var b = new Date().getMonth()+1;
    var c = new Date().getFullYear();
    setCurrentDate(c+'-'+b+'-'+a)
  }
  const response = async () => {
    try {
      const response = await GETAPI("/api/home");
      setLoading(false);
      setEvent(response.data.events)
      setLbv(response.data.lbv);
      setRbv(response.data.rbv);
      setLcf(response.data.lcf);
      setRcf(response.data.rcf);
      setVpoints(response.data.earned_sto);
      setTearned(response.data.earned);
      setWreserve(response.data.reserve);
      setVbonus(response.data.reward);
      setWearning(response.data.earning);
      setNlabv(response.data.next_achievement.next_left_rank.achieved);
      setNlrempoint(response.data.next_achievement.next_left_rank.remaining_points);
      setNlreqpoint(response.data.next_achievement.next_left_rank.required_points)
      setNrabv(response.data.next_achievement.next_right_rank.achieved);
      setNrrempoint(response.data.next_achievement.next_right_rank.remaining_points);
      setNrreqpoint(response.data.next_achievement.next_right_rank.required_points)

    } catch (e) {console.log("Error", e);}
  };
  const LINK=[{id:1,title:"Invite"},{id:2,title:"L Link"},{id:3,title:"R Link"},{id:4,title:"Inactive"},{id:5,title:"N/A"}]
  const DATA = [
    { title: "Left BV", value: lbv },
    { title: "Right BV", value: rbv },
    { title: "Left CF", value: lcf },
    { title: "Right CF", value: rcf },
    { title: "VREIT Points", value: vpoints },
    { title: "VREIT Bonus", value: vbonus },
    { title: "Weekly Reserve", value: wreserve },
    { title: "Weekly Earned", value: wearning },
    { title: "Total Earned", value: tearned },
  ];
  const EVENTS = event.map(item =>({ start:item.event_start,end:item.event_end,title:item.event_title,summary:item.description}))
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.linkcontainer}>
          {LINK.map((item,index)=>(<Link key={index} onPress={()=>{setBtn(index)}} color={index==btn?"white":"black"} backgroundColor={index==btn?"black":"white"} text={item.title}/>))}
        </View>
        <FlatList horizontal={true} data={DATA} renderItem={({ item, index }) => (
          <Card text1={item.title} text2={parseFloat(item.value).toFixed(1)} iconname={"stats-chart"} />
        )}/>
       <H text={"For Next Rank Achievement"}/>
        <ProgressBar  text1={"Achieved Left BV"} text2={"Remaining Points"} text3={"Required Left Points"} progress={parseFloat(nlabv).toFixed(0)/100} value4={parseFloat(nlabv).toFixed(0)+"%"} value1={" "+parseFloat(nlabv).toFixed(1)} value2={" "+parseFloat(nlrempoint).toFixed(1)} value3={" "+parseFloat(nlreqpoint).toFixed(1)} />
        <ProgressBar  text1={"Achieved Left BV"} text2={"Remaining Points"} text3={"Required Left Points"} progress={parseFloat(nrabv).toFixed(0)/100} value4={parseFloat(nrabv).toFixed(0)+"%"} value1={" "+parseFloat(nrabv).toFixed(1)} value2={" "+parseFloat(nrrempoint).toFixed(1)} value3={" "+parseFloat(nrreqpoint).toFixed(1)} />
        <H text={"VRDa1 Events"}/>
        <Cal/>
        {currentDate != '' &&
        <Timeline
          events={EVENTS.filter(event => sameDate(new XDate(event.start), new XDate(currentDate)))}
        />
        }
      </ScrollView>
      <ActivityIndicator animating={loading} size="large" color="black" style={styles.activityind} />
    </SafeAreaView>
  );
}
