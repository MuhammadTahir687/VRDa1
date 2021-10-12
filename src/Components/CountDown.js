import React from 'react';
import CountDown from 'react-native-countdown-component';

export default function Clock({value}){
  return(
    <CountDown
      size={30}
      until={454037}
      onFinish={() => alert('Finished')}
      digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#000'}}
      digitTxtStyle={{color: '#000'}}
      timeLabelStyle={{color: 'black', fontWeight: 'bold'}}
      separatorStyle={{color: '#000'}}
      timeToShow={['D','H', 'M', 'S']}
      timeLabels={{m: "Min", s: "Sec",h:"Hours",d:"Days"}}
      showSeparator
    />
  )
}
