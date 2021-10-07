import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput, ToastAndroid, Alert,
} from "react-native";
import { Avatar } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import styles from "../StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import ImagePicker from "react-native-image-crop-picker";
import axios from "axios";
import { GETAPI, POSTAPI } from "../API/APIResponse";

export default function UpdateBTC({ navigation }) {

  const[btcaddress,setBtcaddress]=useState('')
  const [filePath, setFilePath] = useState([]);
  const [imageloading, setImageloading] = useState(true);
  const [image, setImage] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [role, setrole] = useState();
  const [title, setTitle] = useState();

  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
      const response = await GETAPI("/api/profile");
      setFirstname(response.data.user.first_name);
      setLastname(response.data.user.last_name);
      setTitle(response.data.user.title);
      setImage(response.data.user.picture);
      setrole(response.data.user.role);
    } catch (e) {console.log(e)}
  };

  const takephotofromgallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        setFilePath(image.path);
        setImageloading(false)
      }).catch((error) => {
      console.log("error");
    });
  };
  const update=async ()=> {
    if (btcaddress== '') {
      ToastAndroid.showWithGravity("Enter the BTC Address", ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else if (filePath == '') {
      ToastAndroid.showWithGravity("Select the QR Code Image", ToastAndroid.SHORT, ToastAndroid.CENTER);
    }  else {
      const data = new FormData();
      data.append('btc', btcaddress);
      data.append("btc_qr_code", { uri: filePath, name: "photo.jpg", type: `image/jpg`, });
      const response = await POSTAPI("/api/btc-profile-update", data)
        .then(function(response) {
          if (response.data.status == true) {
            Alert.alert(
              "Success",
              "Your profile updated successfully",
              [{ text: "Ok", onPress: () => navigation.navigate('PMain'), },],
              { cancelable: false },
            );
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient colors={["#0c0808", "#a49f9f"]} style={{ flex: 1 }}>
          <ImageBackground source={require("../Assets/HEader.png")} style={styles.profilebackimg}>
            <TouchableOpacity onPress={() => {navigation.navigate("PMain");}} style={{ flexDirection: "row", marginLeft: 10, alignItems: "center", marginTop: 30 }}>
              <Ionicons name="chevron-back-sharp" size={21} color="white" />
              <Text style={{ color: "white", fontSize: 18 }}>Profile</Text>
            </TouchableOpacity>

            <View style={styles.profilemaincontainer}>
              <View style={{ bottom: 55 }}>
                <View style={{ elevation: 12 }}>
                  <Image source={{uri:image}} style={styles.profileimgstyle} />
                </View>
                <Text style={styles.profilename}>{title} {firstname} {lastname}</Text>
                <Text style={styles.profiledesignation}>{role}</Text>
              </View>
              <View style={styles.pdatacontainer}>
                <Text style={{ fontWeight: "bold", marginLeft: 10 }}>Update Info</Text>
              </View>

              <View style={styles.pinputcontainer}>
                <FontAwesome name="bitcoin" />
                <TextInput
                  style={styles.pinput}
                  placeholder="BTC Address"
                  value={btcaddress}
                  onChangeText={(text)=>{setBtcaddress(text)}}
                />
              </View>
              <View style={{ marginVertical: 10, alignSelf: "center" }}>
                {imageloading? <Avatar
                  size="xlarge"
                  icon={{ name: "image", type: "font-awesome", color: "black" }}
                  activeOpacity={0.7}
                  containerStyle={{ backgroundColor: "white", borderRadius: 10, borderWidth: 5, borderColor: "black" }}
                />:<Avatar
                  size="xlarge"
                  icon={{ name: "image", type: "font-awesome", color: "black" }}
                  activeOpacity={0.7}
                  source={{uri: filePath}}
                  containerStyle={{ backgroundColor: "white", borderRadius: 10, borderWidth: 5, borderColor: "black" }}
                />}
              </View>
              <TouchableOpacity onPress={()=>{takephotofromgallery()}}>
                <LinearGradient colors={["#0c0808", "#6c6868"]} style={styles.cpbutton}>
                  <Text style={{ padding: 5, color: "white" }}>Upload QR Code Image</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{update()}}>
                <LinearGradient colors={["#0c0808", "#6c6868"]} style={styles.cpbutton}>
                  <Text style={{ padding: 5, color: "white" }}>Update Info</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>

  );
}
