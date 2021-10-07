import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, Image, SafeAreaView, ActivityIndicator } from "react-native";
import styles from "./StyleSheet/Style";
import { useNavigation } from "@react-navigation/native";
import { GETDATA } from "./AsyncStorage/AsyncStorage";

export default Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(async () => {
      let Token = await GETDATA("token");
      if (Token == null) {
        navigation.replace("LoginMain");
      } else {
        navigation.replace("Drawer");
      }
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require("./Assets/splash.png")} style={{ width: "100%", height: "100%" }}>
      </ImageBackground>
    </SafeAreaView>
  );
};
