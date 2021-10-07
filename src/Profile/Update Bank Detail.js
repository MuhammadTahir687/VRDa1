import React,{useState,useEffect} from "react";
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
import axios from "axios";
import { GETAPI, POSTAPI } from "../API/APIResponse";

export default function UpdateBankDetail({ navigation }) {
  const [fullname,setFullname]=useState('');
  const [completeaddress,setCompleteaddress]=useState('');
  const [resedentialaddress,setResedentialaddress]=useState('');
  const [swiftcode,setSwiftcode]=useState('');
  const [accountnumber,setAccountnumber]=useState('');
  const [iban,setIban]=useState('');
  const [bankname,setBankname]=useState('');
  const [branchname,setBranchname]=useState('');
  const [bankaddress,setBankaddress]=useState('');
  const [phone,setPhone]=useState('');
  const [country,setCountry]=useState('');
  const [city,setCity]=useState('');
  const [image, setImage] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [role, setrole] = useState();
  const [title, setTitle] = useState();
  const [fullnamevalidation,setFullnamevalidation]=useState('')
  const [completeaddressvalidation,setCompleteaddressvalidation]=useState('')
  const [accountnumbervalidation,setAccountnumbervalidation]=useState('')
  const [banknamevalidation,setBanknamevalidation]=useState('')
  const [branchnamevalidation,setBranchnamevalidation]=useState('')
  const [phonevalidation,setPhonevalidation]=useState('')
  const [countryvalidation,setCountryvalidation]=useState('')


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

  const update=()=> {
    if (fullname == '') {setFullnamevalidation("Required")}
    else if (completeaddress == '') {setCompleteaddressvalidation("Required")}
    else if (accountnumber == '') {setAccountnumbervalidation("Required")}
    else if (bankname == '') {setBanknamevalidation("Required")}
    else if (branchname == '') {setBranchnamevalidation("Required")}
    else if (phone == '') {setPhonevalidation("Required")}
    else if (phone.length > 11 || phone.length < 11) {setPhonevalidation("Required")}
    else if (country == '') {setCountryvalidation("Required")}
    else {
      const data = new FormData();
      data.append('full_name', fullname);
      data.append("billing_address", completeaddress);
      data.append("residential_address", resedentialaddress);
      data.append("swift_code", swiftcode);
      data.append("bank", accountnumber);
      data.append("iban", iban);
      data.append("bank_name", bankname);
      data.append("branch_name", branchname);
      data.append("bank_address", bankaddress);
      data.append("phone_number", phone);
      data.append("city", city);
      data.append("country", country);
      const response = POSTAPI("/api/update-bank-info", data)
        .then(function(response) {
          if (response.data.status == true) {
            Alert.alert(
              "Success",
              "Your Bank profile updated successfully",
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
  const fullnamevalidator = () => {
    if(fullname==''){setFullnamevalidation("Rquired*")}
    else{setFullnamevalidation('')}
  }
  const completeaddressvalidator = () => {
    if(completeaddress==''){setCompleteaddressvalidation("Rquired*")}
    else{setCompleteaddressvalidation('')}
  }
  const countryvalidator = () => {
    if(country==''){setCountryvalidation("Rquired*")}
    else{setCountryvalidation('')}
  }
  const accountnumbervalidator = () => {
    if(accountnumber==''){setAccountnumbervalidation("Rquired*")}
    else{setAccountnumbervalidation('')}
  }
  const bankamevalidator = () => {
    if(bankname==''){setBanknamevalidation("Rquired*")}
    else{setBanknamevalidation('')}
  }
  const branchnamevalidator = () => {
    if(branchname==''){setBranchnamevalidation("Rquired*")}
    else{setBranchnamevalidation('')}
  }
  const phonevalidator = () => {
    if(phone==''){setPhonevalidation("Rquired*")}
    else if (phone.length<11){setPhonevalidation('11 Digits*')}
    else{setPhonevalidation('')}
  }
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
              </View>
              <View style={styles. pdatacontainer}>
                <Text style={{fontWeight:"bold",marginLeft:10}}>Update Profile</Text>
              </View>
              <View style={styles.pinputcontainer}>
                <Ionicons name="person" />
                <TextInput
                  style={styles.pinput}
                  placeholder="Full Name"
                  value={fullname}
                  onChangeText={(text)=>{setFullname(text),setFullnamevalidation('')}}
                  onBlur={fullnamevalidator}
                />
              </View>
              {fullnamevalidation !=''&&<Text style={styles.profileerror}>{fullnamevalidation}</Text>}
              <View style={styles.pinputcontainer}>
                <Ionicons name="earth-sharp" />
                <TextInput
                  style={styles.pinput}
                  placeholder="Complete Address"
                  value={completeaddress}
                  onChangeText={(text)=>{setCompleteaddress(text),setCompleteaddressvalidation('')}}
                  onBlur={completeaddressvalidator}
                />
              </View>
              {completeaddressvalidation !=''&&<Text style={styles.profileerror}>{completeaddressvalidation}</Text>}
              <View style={styles.pinputcontainer}>
                <Ionicons name="earth-sharp" />
                <TextInput
                  style={styles.pinput}
                  placeholder="Resedential Address"
                  value={resedentialaddress}
                  onChangeText={(text)=>{setResedentialaddress(text)}}
                />
              </View>
              <View style={styles.pinputcontainer}>
                <Ionicons name="person" />
                <TextInput
                  style={styles.pinput}
                  placeholder="Swift Code"
                  value={swiftcode}
                  onChangeText={(text)=>{setSwiftcode(text)}}
                />
              </View>
              <View style={styles.pinputcontainer}>
                <Fontisto name="swift"/>
                <TextInput
                  style={styles.pinput}
                  placeholder="Account Number"
                  value={accountnumber}
                  onChangeText={(text)=>{setAccountnumber(text),setAccountnumbervalidation('')}}
                  onBlur={accountnumbervalidator}
                />
              </View>
              {accountnumbervalidation !=''&&<Text style={styles.profileerror}>{accountnumbervalidation}</Text>}
              <View style={styles.pinputcontainer}>
                <FontAwesome name="credit-card-alt" />
                <TextInput
                  style={styles.pinput}
                  placeholder="IBAN"
                  value={iban}
                  onChangeText={(text)=>{setIban(text)}}
                />
              </View>
              <View style={{flexDirection:"row"}}>
                <View style={styles.srcontainer}>
                <View style={styles.pinputcontainer}>
                  <FontAwesome name="bank" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Bank Name"
                    value={bankname}
                    onChangeText={(text)=>{setBankname(text),setBanknamevalidation('')}}
                    onBlur={bankamevalidator}
                  />
                </View>
                  {banknamevalidation !=''&&<Text style={styles.profileerror}>{banknamevalidation}</Text>}
                </View>
                <View style={styles.srcontainer}>
                <View style={styles.pinputcontainer}>
                  <FontAwesome name="bank" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Branch Name"
                    value={branchname}
                    onChangeText={(text)=>{setBranchname(text),setBranchnamevalidation('')}}
                    onBlur={branchnamevalidator}
                  />
                </View>
                  {branchnamevalidation !=''&&<Text style={styles.profileerror}>{branchnamevalidation}</Text>}
                </View>
              </View>
              <View style={{flexDirection:"row"}}>
                <View style={styles.srcontainer}>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="earth-sharp" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Bank Address"
                    value={bankaddress}
                    onChangeText={(text)=>{setBankaddress(text)}}
                  />
                </View>
                </View>
                <View style={styles.srcontainer}>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="call" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Phone"
                    keyboardType={"number-pad"}
                    value={phone}
                    maxLength={11}
                    onChangeText={(text)=>{setPhone(text),setPhonevalidation('')}}
                    onBlur={phonevalidator}
                  />
                </View>
                {phonevalidation !=''&&<Text style={styles.profileerror}>{phonevalidation}</Text>}
                </View>
              </View>
              <View style={{flexDirection:"row"}}>
                <View style={styles.srcontainer}>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="earth-sharp" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Country"
                    value={country}
                    onChangeText={(text)=>{setCountry(text),setCountryvalidation('')}}
                    onBlur={countryvalidator}
                  />
                </View>
                  {countryvalidation !=''&&<Text style={styles.profileerror}>{countryvalidation}</Text>}
                </View>
                <View style={styles.srcontainer}>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="earth-sharp" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="City"
                    value={city}
                    onChangeText={(text)=>{setCity(text)}}
                  />
                </View>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={()=>{update()}}>
              <LinearGradient colors={["#0c0808", "#6c6868"]} style={styles.cpbutton}>
                <Text style={{padding:5,color:"white"}}>Update Info</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ImageBackground>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>

  );
}
