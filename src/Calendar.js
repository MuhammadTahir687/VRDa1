import React from 'react';
import {View} from "react-native";
import { Calendar, CalendarList, Agenda, CalendarProvider, Timeline, ExpandableCalendar } from "react-native-calendars";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Cal(){
  const items={
      '2012-05-22': [{name: 'item 1 - any js object'}],
      '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
      '2012-05-24': [],
      '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
  }
  return(
    <View>
      <View style={{borderWidth:5,borderColor:"black",marginHorizontal:5,borderRadius:10,marginVertical:10}}>
    <CalendarProvider date={Date()}>
      <ExpandableCalendar />
    </CalendarProvider>
      </View>
   {/* <Timeline*/}
   {/*   format24h={true}*/}
   {/*   renderItem={(item) => {*/}
   {/*     return (<View style={{height: calculateHeightAccordingToTimespan(item)}} >*/}
   {/*       <Text>{item.name}</Text>*/}
   {/*     </View>);}}*/}
   {/*/>*/}
    </View>
  )
}
