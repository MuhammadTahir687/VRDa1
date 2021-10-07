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

export default function Signup({ navigation }) {

  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [show1, setShow1] = useState(false);
  const [visible1, setVisible1] = useState(true);
  const [title, setTitle] = useState("VRDa1");
  const [name, setName] = useState("Akram");
  const [username, setUsername] = useState("Ali");
  const [email, setEmail] = useState("tahir@gmail.com");
  const [phone, setphone] = useState("01010299330");
  const [pasword, setPassword] = useState("JSNNDS");
  const [confirmpassword, setConfirmpassword] = useState("JSNNDS");
  const [country, setCountry] = useState("Pakistan");

  const update=()=> {
    let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (title == '') {
      ToastAndroid.showWithGravity("Enter the Title", ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else if (name == '') {
      ToastAndroid.showWithGravity("Enter the Name", ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else if (username == '') {
      ToastAndroid.showWithGravity("Enter the Username", ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else if (email == '') {
      ToastAndroid.showWithGravity("Enter the email", ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else if (regex.test(email) == false) {
      ToastAndroid.showWithGravity("Enter the Valid Email", ToastAndroid.SHORT, ToastAndroid.CENTER);
    }else if (pasword == '') {
      ToastAndroid.showWithGravity("Enter the Password", ToastAndroid.SHORT, ToastAndroid.CENTER);
    }  else if (confirmpassword == '') {
      ToastAndroid.showWithGravity("Enter the Country", ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else if (pasword != confirmpassword) {
      ToastAndroid.showWithGravity("Password not Match", ToastAndroid.SHORT, ToastAndroid.CENTER);
    }  else if (phone == '') {
      ToastAndroid.showWithGravity("Enter the Phone", ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else if (phone.length > 11 || phone.length < 11) {
      ToastAndroid.showWithGravity("Enter the Valid Phone Number", ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else if (country == '') {
      ToastAndroid.showWithGravity("Enter the Country", ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else {
      Alert.alert(
        "Success",
        "Your profile updated successfully",
        [{ text: "Ok", onPress: () => navigation.replace("Drawer") },],
        { cancelable: false },
      )
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <LinearGradient colors={["#0c0808", "#a49f9f"]} style={{ flex: 1 }}>
        <View>
          <Image source={require("./Assets/Logo.png")} style={styles.logoimage} />
        </View>
        <Text style={styles.loginh}>SIGNUP</Text>
        <View style={{flexDirection:"row"}}>
          <View style={styles.signupinputcontainer}>
            <Ionicons name="person" color="white"  size={25}/>
            <TextInput
              style={styles.rsigninput}
              placeholderTextColor="white"
              placeholder="Title"
              value={title}
              onChangeText={(text)=>{setTitle(text)}}
            />
          </View>
          <View style={styles.signupinputcontainer}>
            <Ionicons name="person" color="white"  size={25}/>
            <TextInput
              style={styles.rsigninput}
              placeholderTextColor="white"
              placeholder="Name"
              value={name}
              onChangeText={(text)=>{setName(text)}}
            />
          </View>
        </View>
        <View style={styles.sinput}>
          <Ionicons name="person" size={25} color="white" style={{ marginLeft: 0 }} />
          <TextInput
            style={styles.sinputtext}
            placeholderTextColor="white"
            placeholder="Username"
            value={username}
            onChangeText={(text)=>{setUsername(text)}}
          />
        </View>
        <View style={styles.sinput}>
          <Ionicons name="mail" size={25} color="white" style={{ marginLeft: 0 }} />
          <TextInput
            style={styles.sinputtext}
            placeholderTextColor="white"
            placeholder="Email"
            value={email}
            onChangeText={(text)=>{setEmail(text)}}
          />
        </View>
        <View style={{flexDirection:"row"}}>
          <View style={styles.signupinputcontainer}>
            <Ionicons name="lock-closed" color="white"  size={25}/>
            <TextInput
              style={styles.rsigninput}
              placeholderTextColor="white"
              placeholder="Password"
              secureTextEntry={true}
              value={pasword}
              onChangeText={(text)=>{setPassword(text)}}
            />
          </View>
          <View style={styles.signupinputcontainer}>
            <Ionicons name="lock-closed" color="white"  size={25}/>
            <TextInput
              style={styles.rsigninput}
              placeholderTextColor="white"
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={confirmpassword}
              onChangeText={(text)=>{setConfirmpassword(text)}}
            />
          </View>
        </View>
        <View style={{flexDirection:"row"}}>
          <View style={styles.signupinputcontainer}>
            <Ionicons name="call" color="white"  size={25}/>
            <TextInput
              style={styles.rsigninput}
              placeholderTextColor="white"
              placeholder="Phone"
              keyboardType={"number-pad"}
              maxLength={11}
              value={phone}
              onChangeText={(text)=>{setphone(text)}}
            />
          </View>
          <View style={styles.signupinputcontainer}>
            <Ionicons name="earth-sharp" color="white"  size={25}/>
            <TextInput
              style={styles.rsigninput}
              placeholderTextColor="white"
              placeholder="Country"
              value={country}
              onChangeText={(text)=>{setCountry(text)}}
            />
          </View>
        </View>
        <View style={styles.loginbutton}>
          <TouchableOpacity onPress={() => {update()}}>
            <Text style={styles.logintext}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: "center" }}>
          <TouchableOpacity onPress={() => {navigation.navigate("Login");}}>
            <Text style={styles.loginfgp}>Already have an account? Click here to Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sloginbcontainer}>
          <TouchableOpacity style={styles.sicon}>
            <FontAwesome name="facebook" color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sloginmainb1}>
            <Text style={{ color: "black", fontSize: 12 }}>Signin with</Text>
            <Text style={{ color: "black", fontSize: 15 }}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sicon1}>
            <Ionicons name="logo-google" color="white" size={19} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sloginmainb2}>
            <Text style={{ color: "black", fontSize: 12 }}>Signin with</Text>
            <Text style={{ color: "black", fontSize: 15 }}>Google</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      </ScrollView>
    </SafeAreaView>

  );
}
