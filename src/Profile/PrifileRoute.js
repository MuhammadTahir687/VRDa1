import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProfileMain from './ProfileMain'
export default function ProfileRoute(){
  const Stack = createNativeStackNavigator();
  return(

      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Main" component={ProfileMain} />
      </Stack.Navigator>

  )
}
