import React from "react";
import { Image, SafeAreaView, ScrollView,Text,TouchableOpacity,Pressable } from "react-native";
import { createDrawerNavigator,DrawerItemList,DrawerItem} from "@react-navigation/drawer";
import styles from './StyleSheet/Style'
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import DrawerContent from "./DrawerContent";
import Shop from "./Shop";
import Dashboard from "./Dashboard";
import AppTab from "./TabNavigator";
import Comission from "./Comission";
import Report from "./Report";
import ComissionReport from "./Comission Report";
import ActivityFeed from "./Activity Feed";
import ComissionAppTab from "./Commission Tab Navigator/ComissionAppTab";
import Wallet from "./Wallet/Wallet";
import WalletAppTab from "./Wallet/Wallet Tab";
import { Drawer } from 'react-native-paper';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ReportTab from "./Reports/Report Tab";

const Drawers = createDrawerNavigator();

export default function AppDrawer({navigation}) {

  const LogOut=()=>{
      console.log("logout");
      AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys)).then(() => navigation.reset({ index: 0, routes: [{ name: "LoginMain" }], }));
  }

  return (
    <Drawers.Navigator
      screenOptions={{drawerActiveTintColor:"black"}}
      drawerContent={(props) => {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <DrawerContent />
          <ScrollView>
          <DrawerItemList {...props} />
            <Pressable
              onPress={()=>{LogOut()}}
              style={({ pressed }) => [{ marginHorizontal:0,backgroundColor: pressed ? 'rgba(210,208,208,0.55)' : 'white' },]}>
              {({ pressed }) => (<Drawer.Item style={{ backgroundColor: 'transparent' }} icon="logout"  label="Log Out" />)}
            </Pressable>
          </ScrollView>
        </SafeAreaView>
      );
    }}
    >
      <Drawers.Screen name="Dashboard" component={AppTab}  options={{headerRight: () => (<TouchableOpacity onPress={()=>{navigation.navigate("PMain")}} style={{marginRight:15}}><FontAwesome5 name="user-circle" size={25}/></TouchableOpacity>),drawerStyle:{borderWidth:1},drawerIcon: ({ focused, size }) => (<Image source={require('./Assets/Icon/Dashboard.png')} style={styles.dahboardicon}/>)}}  />
      <Drawers.Screen name="Shop" component={Shop} options={{drawerIcon: ({ focused, size }) => (<Image source={require('./Assets/Icon/Shop.png')} style={styles.dahboardicon}/>)}} />
      <Drawers.Screen name="Activity Feed" component={ActivityFeed} options={{drawerIcon: ({ focused, size }) => (<Image source={require('./Assets/Icon/ActivityFeed.png')} style={styles.dahboardicon}/>)}}  />
      <Drawers.Screen name="VERIT Points" component={Shop} options={{drawerIcon: ({ focused, size }) => (<Image source={require('./Assets/Icon/VREIT.png')} style={styles.dahboardicon}/>)}}  />
      <Drawers.Screen name="Wallet" component={WalletAppTab} options={{drawerIcon: ({ focused, size }) => (<Image source={require('./Assets/Icon/Wallet.png')} style={styles.dahboardicon}/>)}}  />
      <Drawers.Screen name="Commison Reports" component={ComissionAppTab} options={{drawerIcon: ({ focused, size }) => (<Image source={require('./Assets/Icon/CommisionReport.png')} style={styles.dahboardicon}/>)}}  />
      <Drawers.Screen name="Commision Logs" component={Comission} options={{drawerIcon: ({ focused, size }) => (<Image source={require('./Assets/Icon/Commisionlogs.png')} style={styles.dahboardicon}/>)}} />
      <Drawers.Screen name="Tree View" component={Shop} options={{drawerIcon: ({ focused, size }) => (<Image source={require('./Assets/Icon/Tree.png')} style={styles.dahboardicon}/>)}}  />
      <Drawers.Screen name="Reports" component={ReportTab}  options={{drawerIcon: ({ focused, size }) => (<Image source={require('./Assets/Icon/Report.png')} style={styles.dahboardicon}/>)}} />
    </Drawers.Navigator>


  )
}

