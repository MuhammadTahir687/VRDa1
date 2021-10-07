import React from 'react';
import {Calendar, CalendarList, Agenda,ExpandableCalendar} from 'react-native-calendars';

export default function Cal(){
  return(
    <Calendar
      enableSwipeMonths={true}
      style={{
        marginHorizontal:10,
        marginVertical:10,
        // borderBottomWidth:6,
        backgroundColor:"black",
        borderRadius:5
      }}
      theme={{
        // backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: 'white',
        dayTextColor: 'black',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: 'white',
        disabledArrowColor: 'white',
        monthTextColor: 'white',
        indicatorColor: 'black',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
        todayBackgroundColor:"black",

        agendaDayTextColor: 'yellow',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: 'blue'

      }}
    />
  )
}
