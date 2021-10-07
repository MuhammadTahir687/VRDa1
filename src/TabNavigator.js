import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "./Dashboard";
import { Image, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomTab from "./CustomTab";
import ProfileRoute from './Profile/PrifileRoute';
import AppDrawer from "./AppDrawer";
import Shop from "./Shop";
import Fontisto from "react-native-vector-icons/Fontisto";
import Wallet from "./Wallet/Wallet";
import ActivityFeed from "./Activity Feed";
import Comission from "./Comission";
const Tab = createBottomTabNavigator();
export default function AppTab({navigation}) {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Main') {return(<Image source={require('./Assets/Icon/Dashboard.png')} style={{width:20,height:20}}/>)}
          else if (route.name === 'Shop') {return (<Fontisto name="opencart" size={20} color="black" />)}
          else if (route.name === 'Wallet') {return (<Fontisto name="google-wallet" size={20} color="black" />)}
          else if (route.name === 'Activity Feed') {return (<Image source={require('./Assets/Icon/ActivityFeed.png')} style={{width:30,height:30}}/>)}
        },
        headerShown:false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#797777',
        tabBarStyle:{paddingBottom:5}
      })}>
        <Tab.Screen name="Main"  component={Dashboard} options={{tabBarLabel:"Dashboard"}} />
        <Tab.Screen name="Shop" component={Shop}  />
        <Tab.Screen name="Commission" component={Comission} options={{ tabBarButton: (props) => <CustomTab {...props} /> }} />
        <Tab.Screen name="Wallet" component={Wallet} options={{tabBarHideOnKeyboard:true}} />
        <Tab.Screen name="Activity Feed" component={ActivityFeed} />
      </Tab.Navigator>

  );
}
