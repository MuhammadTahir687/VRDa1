import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useState,useEffect } from "react";
import { GETAPI } from "./API/APIResponse";

export default function Slider () {
  useEffect(async ()=>{
    await response()
  },[])
  const response=async()=>{
    const res=await GETAPI('/api/home')
    console.log(res.data.rbv);
    setLcf(res.data.lcf)
    setRbv(res.data.rbv)
    setLbv(res.data.lbv)
    setRcf(res.data.rcf)
    console.log("jfjsdb",rbv)

  }

  const [rbv,setRbv]=useState();
  const [lbv,setLbv]=useState();
  const [lcf,setLcf]=useState();
  const [rcf,setRcf]=useState();


  const [activeIndex,setActiveIndex]=useState(0);
  const [carouselItems,setCarouselItems]=useState([
    {
      title:"RBV",
      text: rbv,
    },
    {
      title:"LBV",
      text: lbv,
    },
    {
      title:"LCF",
      text: lcf,
    },
    {
      title:"RCF",
      text: rcf,
    },
    {
      title:"Item 5",
      text: "Text 5",
    },
  ]);



  _renderItem=({item,index})=>{
    return (
      <View style={{
        backgroundColor:'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25, }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    )
  }
    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
          <Carousel
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem = { index => setActiveIndex(index)} />
        </View>
        <View>
          <Text style={{color:"white"}}>{carouselItems.title}</Text>
        </View>
      </SafeAreaView>
    );
}

