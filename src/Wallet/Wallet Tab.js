import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Wallet from "./Wallet";
import WithdrawFunds from "./Withdraw Funds";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
export default function WalletAppTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Transfer Funds') {
            return(
            <MaterialCommunityIcons name="bank-transfer" size={25}/>
          )
          } else if (route.name === 'WithDraw Funds') {
            return(
            <MaterialCommunityIcons name="cash-refund" size={25}/>
            )
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown:false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#797777',
        tabBarStyle:{paddingBottom:5},

      })}>
      <Tab.Screen name="Transfer Funds"  component={Wallet} options={{tabBarHideOnKeyboard:true}} />
      <Tab.Screen name="WithDraw Funds"  component={WithdrawFunds} options={{tabBarHideOnKeyboard:true}} />
    </Tab.Navigator>

  );
}
