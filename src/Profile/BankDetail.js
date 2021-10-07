import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { Avatar } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import styles from "../StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { GETAPI } from "../API/APIResponse";
import PRText from "../Components/PRText";

export default function BankDetail({ navigation }) {
  const [name, setName] = useState();
  const [bankname, setBankname] = useState();
  const [billingaddress, setBillingaddress] = useState();
  const [resedentialaddress, setResedentialaddress] = useState();
  const [branchname, setBranchname] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [image, setImage] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [role, setrole] = useState();
  const [title, setTitle] = useState();

  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
      const response = await GETAPI("/api/bank-update");
      const res = await GETAPI("/api/profile")
      setFirstname(res.data.user.first_name);
      setLastname(res.data.user.last_name);
      setTitle(res.data.user.title);
      setImage(res.data.user.picture);
      setrole(res.data.user.role);
      setName(response.data.bank.full_name);
      setBillingaddress(response.data.bank.billing_address);
      setResedentialaddress(response.data.bank.residential_address);
      setBankname(response.data.bank.bank_name);
      setBranchname(response.data.bank.branch_name);
      setCountry(response.data.bank.bank_country.name);

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient colors={["#0c0808", "#a49f9f"]} style={{ flex: 1 }}>
          <ImageBackground source={require("../Assets/HEader.png")} style={styles.profilebackimg}>
            <TouchableOpacity onPress={() => {
              navigation.navigate("PMain");
            }} style={{ flexDirection: "row", marginLeft: 10, alignItems: "center", marginTop: 30 }}>
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
                <TouchableOpacity onPress={() => {
                  navigation.navigate("UBDetail");
                }}>
                  <LinearGradient colors={["#0c0808", "#a49f9f"]} style={styles.bdbutton}>
                    <Ionicons name="person" size={15} color="white" style={{ marginRight: 8 }} />
                    <Text style={styles.modalhtext}>Update Bank Detail</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={styles.pdatacontainer}>
                <Text style={{ fontWeight: "bold", marginLeft: 20 }}>BANK DETAIL</Text>
              </View>
              <PRText text1={"Full Name"} text2={name}/>
              <PRText text1={"Complete Address"} text2={billingaddress} backgroundColor={"#bfbfbf"}/>
              <PRText text1={"Resedential Address"} text2={resedentialaddress}/>
              <PRText text1={"Bank Name"} text2={bankname} backgroundColor={"#bfbfbf"}/>
              <PRText text1={"Branch Name"} text2={branchname}/>
              <PRText text1={"Country"} text2={country} backgroundColor={"#bfbfbf"}/>
              <PRText text1={"City"} text2={city}/>
            </View>
          </ImageBackground>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>

  );
}
