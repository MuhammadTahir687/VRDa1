import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ComissionReport from "../Comission Report";
import BinaryComission from "./Binary Commission";
import DirectComission from "./Direct Commission";

const Tab = createBottomTabNavigator();
export default function ComissionAppTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'All') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Binary Commission') {
          iconName = focused ? 'cash' : 'cash-outline';
        } else if (route.name === 'Direct Commission') {
          iconName = focused ? 'cash' : 'cash-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      headerShown:false,
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: '#797777',
      tabBarStyle:{paddingBottom:5}
    })}>
      <Tab.Screen name="All"  component={ComissionReport}  />
      <Tab.Screen name="Binary Commission"  component={BinaryComission}  />
      <Tab.Screen name="Direct Commission"  component={DirectComission}  />

    </Tab.Navigator>

  );
}
