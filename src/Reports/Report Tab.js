import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MyPurchase from "./MyPurchase";
import OwnershipPurchase from "./OwnershipPurchase";
import TeamSale from "./TeamSale";
import PurchaseRequest from "./PurchaseRequest";
import TransferHistory from "./TransferHistory";
import RecieveHistory from "./RecieveHistory";
import WithdrawlHistory from "./WithdrawlHistory";
const Tab = createBottomTabNavigator();
export default function ReportTab() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'My Purchase') {return(<Ionicons name="newspaper-outline" size={25}/>)}
          else if (route.name === 'Ownership Purchases') {return(<Ionicons name="newspaper-outline" size={25}/>)}
          else if (route.name === 'Team Sale') {return(<Ionicons name="newspaper-outline" size={25}/>)}
          else if (route.name === 'Purchase Request') {return(<Ionicons name="newspaper-outline" size={25}/>)}
          else if (route.name === 'Transfer History') {return(<Ionicons name="newspaper-outline" size={25}/>)}
          else if (route.name === 'Recieve History') {return(<Ionicons name="newspaper-outline" size={25}/>)}
          else if (route.name === 'WithDraw History') {return(<Ionicons name="newspaper-outline" size={25}/>)}
        },
        scrollEnabled: true,headerShown:false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: '#797777', tabBarStyle:{paddingBottom:10}
      })}>
      <Tab.Screen name="Purchase"  component={MyPurchase}/>
      <Tab.Screen name="Ownership"  component={OwnershipPurchase}  />
      <Tab.Screen name="Team"  component={TeamSale}  />
      <Tab.Screen name="Purchasde"  component={PurchaseRequest}  />
      <Tab.Screen name="Transfer"  component={TransferHistory}  />
      <Tab.Screen name="Recieve"  component={RecieveHistory}  />
      <Tab.Screen name="WithDraw"  component={WithdrawlHistory}  />
    </Tab.Navigator>
  );
}
