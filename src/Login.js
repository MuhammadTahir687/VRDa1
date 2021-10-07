import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { POSTAPI } from "./API/APIResponse";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GETDATA, SAVEDATA } from "./AsyncStorage/AsyncStorage";
import Toast from 'react-native-simple-toast';

export default function Login({ navigation }) {

  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [email, setEmail] = useState("vrda1@vrda1.com");
  const [password, setPassword] = useState("Vr6@1Vr6@1");
  const [emailvalidation, setEmailvalidation] = useState('');
  const [passwordvalidation, setPasswordvalidation] = useState('');
  const submit=async()=> {
    let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (email == '') {
      setEmailvalidation("Enter the Email")
    } else if (regex.test(email) == false) {
      setEmailvalidation("Enter Correct Email")
    }else if (password == '') {
      setPasswordvalidation("Enter the Password")
    }else{
      try{
      const data={email:email,password:password}
      const response=await POSTAPI('/api/login',data)
            if(response.data.status==true){
             await SAVEDATA("user",response.data)
              await SAVEDATA("token",response.data.access_token)
              const tokendata=await GETDATA('token')
              Alert.alert(
                "Success",
                "Your profile updated successfully",
                [{ text: "Ok", onPress: () => navigation.reset({ index: 0, routes: [{ name: "Drawer" }]}) },],
                { cancelable: false },
              )
            }else{
              Toast.show(response.data.message);
            }
         }
      catch (e){
        Toast.show(e)
      }

    }
  }
  const emailvalidator = () => {
    let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (email == '') {
      setEmailvalidation('Required*')
    } else if (regex.test(email) == false) {
      setEmailvalidation('Incorrect Email');
    } else (
      setEmailvalidation('')
    )
  };
  const passwordvalidator = () => {
    if (password == '') {
      setPasswordvalidation('Required*');
    } else {
      setPasswordvalidation('')
    }
  };
    return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{flex:1}} contentContainerStyle={{flexGrow:1}}>
      <LinearGradient colors={["#0c0808", "#a49f9f"]} style={{ flex: 1, justifyContent: "center" }}>
        <View>
          <Image source={require("./Assets/Logo.png")} style={styles.logoimage} />
        </View>
        <Text style={styles.loginh}>LOGIN</Text>
        <View style={styles.input}>
          <Ionicons name="mail" size={25} color="white" style={{ marginLeft: 5 }} />
          <TextInput
            style={styles.inputtext}
            placeholderTextColor="white"
            placeholder="Email"
            value={email}
            onChangeText={(text)=>{setEmail(text),setEmailvalidation('')}}
            onBlur={emailvalidator}
          />
        </View>
        <Text style={styles.loginerror}>{emailvalidation}</Text>
        <View style={styles.input}>
          <Ionicons name="lock-closed" size={25} color="white" style={{ marginLeft: 5 }} />
          <TextInput
            style={styles.inputtext}
            placeholderTextColor="white"
            placeholder="Password"
            secureTextEntry={visible}
            value={password}
            onChangeText={(text)=>{setPassword(text),setPasswordvalidation('')}}
            onBlur={passwordvalidator}
          />
          <View style={styles.passwordvisibility}>
            <TouchableOpacity onPress={() => {setVisible(!visible), setShow(!show);}}>
              <Ionicons name={show === false ? "eye" : "eye-off"} color="white" size={26} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.loginerror}>{passwordvalidation}</Text>
        <View style={styles.loginbutton}>
          <TouchableOpacity onPress={() => {submit()}}>
            <Text style={styles.logintext}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: "center" }}>
          <TouchableOpacity>
            <Text style={styles.loginfgp}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sloginbcontainer}>
          <TouchableOpacity style={styles.sloginbcontainer}>
          <View style={styles.sicon}>
            <FontAwesome name="facebook" color="white" size={20} />
          </View>
          <View style={styles.sloginmainb1}>
            {/*<Ionicons name="logo-facebook"  color="black" size={15} style={{color:"black"}} />*/}
            <Text style={{ color: "black", fontSize: 12 }}>Signin with</Text>
            <Text style={{ color: "black", fontSize: 15 }}>Facebook</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sloginbcontainer}>
          <View style={styles.sicon1}>
            <Ionicons name="logo-google" color="white" size={19} />
          </View>
          <View style={styles.sloginmainb2}>
            <Text style={{ color: "black", fontSize: 12 }}>Signin with</Text>
            <Text style={{ color: "black", fontSize: 15 }}>Google</Text>
          </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}
