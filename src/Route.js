import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./Login";
import AppDrawer from "./AppDrawer";
import Splash from "./Splash";
import LoginMain from "./LoginMain";
import Signup from "./Signup";
import AppTab from './TabNavigator'
import ProfileMain from "./Profile/ProfileMain";
import ProfileDetail from "./Profile/PersonnelDetail";
import BankDetail from "./Profile/BankDetail";
import BTC from "./Profile/BTC";
import USDT from "./Profile/USDT";
import ChangePassword from "./Profile/Change Password";
import ProfileInfo from "./Profile/Personal Info";
import UpdateProfileInfo from "./Profile/Update Profile Info";
import UpdateBankDetail from "./Profile/Update Bank Detail";
import UpdateBTC from "./Profile/Update BTC";
import UpdateUSDT from "./Profile/Update USDT";

export default function Route(){
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,animation:"slide_from_bottom"}}>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Drawer" component={AppDrawer}/>
        <Stack.Screen name="LoginMain" component={LoginMain}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>


        <Stack.Screen name="PMain" component={ProfileMain} />
        <Stack.Screen name="PDetail" component={ProfileDetail} />
        <Stack.Screen name="PInfo" component={ProfileInfo} />
        <Stack.Screen name="UPInfo" component={UpdateProfileInfo} />
        <Stack.Screen name="BDetail" component={BankDetail} />
        <Stack.Screen name="UBDetail" component={UpdateBankDetail} />
        <Stack.Screen name="BTC" component={BTC} />
        <Stack.Screen name="UBTC" component={UpdateBTC} />
        <Stack.Screen name="USDT" component={USDT} />
        <Stack.Screen name="UUSDT" component={UpdateUSDT} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
