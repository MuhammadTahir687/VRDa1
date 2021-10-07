import React,{useState,useEffect} from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Alert,
  ToastAndroid, PixelRatio, Switch,
} from "react-native";
import { Avatar } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import styles from "../StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import ImagePicker from "react-native-image-crop-picker";
import { UpdateProfileAPI } from "../API/API";
import { GETAPI, POSTAPI } from "../API/APIResponse";
import CountryPicker from 'react-native-country-picker-modal';
import { CountryCode, Country } from './src/types'
import Toast from "react-native-simple-toast";

export default function UpdateProfileInfo({ navigation }) {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [countryid, setCountryid] = useState("");
  const [city, setCity] = useState("");
  const [passport, setPassport] = useState("");
  const [identity, setIdentity] = useState("");
  const [kinname, setKinname] = useState("");
  const [kinrelation,setKinrelation]=useState('');
  const [password, setPassword] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [filePath, setFilePath] = useState([]);
  const [identitypic, setIdentitypic] = useState([]);
  const [passportpic, setPassportpic] = useState([]);
  const [signaturepic, setSignaturepic] = useState([]);
  const [kinpic, setKinpic] = useState([]);
  const [image, setImage] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [role, setrole] = useState();
  const [mr, setMr] = useState();
  const [identityvalidation,setIdentityvalidation]=useState('');
  const [addressvalidation,setAddressvalidation]=useState('');
  const [cityvalidation,setCityvalidation]=useState('');
  const [passportvalidation,setPassportvalidation]=useState('');
  const [kinnamevalidation,setKinnamevalidation]=useState('');
  const [kinrelationvalidation,setKinrelationvalidation]=useState('');

  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
      const response = await GETAPI("/api/profile");
      setFirstname(response.data.user.first_name);
      setLastname(response.data.user.last_name);
      setMr(response.data.user.title);
      setImage(response.data.user.picture);
      setrole(response.data.user.role);
      setUsername(response.data.user.name);
      setCountry(response.data.user.country);
      setEmail(response.data.user.email);
      setphone(response.data.user.phone_no)
      setCountryid(response.data.user.user_profile.country.id)
    } catch (e) {console.log(e)}
  };

  const update=async(body)=>{
    if(identity==''){setIdentityvalidation("Required*")}
    else if(address==''){setAddressvalidation("Required")}
    else if(city==''){setCityvalidation("Required*")}
    else if(passport==''){setPassportvalidation("Required*")}
    else if(kinname==''){setKinnamevalidation("Required*")
    }else if(kinrelation=='') {setKinrelationvalidation("Required*")}
    else{
       const data=new FormData();
       data.append('country_id', countryid,);
       data.append("address", address);
       data.append("identity", identity);
       data.append("email_alter", email);
       data.append("phone_no_alter", phone);
       data.append("identity", identity);
       data.append("city", city);
       data.append("passport", passport);
       data.append("kin_name", kinname);
       data.append("kin_relation", kinrelation);
       data.append("picture", { uri: filePath, name: "photo.jpg", type: `image/jpg`, });
       data.append("identity_pic", { uri: identitypic, name: "photo.jpg", type: `image/jpg`, });
       data.append("passport_pic", { uri: passportpic, name: "photo.jpg", type: `image/jpg`, });
       data.append("signature_pic", { uri: signaturepic, name: "photo.jpg", type: `image/jpg`, });
       data.append("kin_identity_pic", { uri: kinpic, name: "photo.jpg", type: `image/jpg`, });

      var response=await POSTAPI("/api/update-info", data)
        .then(function (response) {
          if(response.data.status == true){
            Alert.alert(
              "Success",
              "Your profile updated successfully",
              [{ text: "Ok", onPress: () => navigation.navigate('PMain'), },],
              { cancelable: false },
            );
          }
          else{Toast.show(response.data.message)}
        })
        .catch(function (error) {Toast.show(error);});
    }
  }
  const takephotofromgallery = () => {
    ImagePicker.openPicker({ width: 300, height: 400, cropping: true, })
      .then(image => {setFilePath(image.path)}).catch((error) => {console.log("error")});
  };
  const takeidentityphotofromgallery = () => {
    ImagePicker.openPicker({ width: 300,height: 400, cropping: true,})
      .then(image => {setIdentitypic(image.path);}).catch((error) => {console.log("error");});
  };
  const takepassportphotofromgallery = () => {
    ImagePicker.openPicker({ width: 300, height: 400, cropping: true, })
      .then(image => {setPassportpic(image.path);}).catch((error) => {console.log("error");});
  };
  const takesignaturephotofromgallery = () => {
    ImagePicker.openPicker({ width: 300, height: 400, cropping: true, })
      .then(image => {setSignaturepic(image.path);}).catch((error) => {console.log("error");});};

  const takekinphotofromgallery = () => {
    ImagePicker.openPicker({ width: 300, height: 400, cropping: true, })
      .then(image => {setKinpic(image.path);}).catch((error) => {console.log("error");});
  };

  const identityvalidator = () => {
    if(identity==''){setIdentityvalidation("Rquired*")}
    else{setIdentityvalidation('')}
  }
  const addressvalidator = () => {
    if(address==''){setAddressvalidation("Rquired*")}
    else{setAddressvalidation('')}
  }
  const cityvalidator = () => {
    if(address==''){setCityvalidation("Rquired*")}
    else{setCityvalidation('')}
  }
  const passportvalidator = () => {
    if(passport==''){setPassportvalidation("Rquired*")}
    else{setPassportvalidation('')}
  }
  const kinnamevalidator = () => {
    if(kinname==''){setKinnamevalidation("Rquired*")}
    else{setKinnamevalidation('')}
  }
  const kinrelationvalidator = () => {
    if(kinrelation==''){setKinrelationvalidation("Rquired*")}
    else{setKinrelationvalidation('')}
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
                <Text style={styles.profilename}>{mr} {firstname} {lastname}</Text>
                <Text style={styles.profiledesignation}>{role}</Text>
              </View>
              <View style={styles. pdatacontainer}>
                <Text style={{fontWeight:"bold",marginLeft:10}}>Update Profile</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="person" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Title"
                    value={mr}
                    editable={false}
                  />
                </View>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="person" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="First Name"
                    value={firstname}
                    editable={false}
                  />
                </View>
              </View>
              <View style={{flexDirection:"row"}}>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="person" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Last Name"
                    value={lastname}
                    editable={false}
                  />
                </View>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="person" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Username"
                    value={username}
                    editable={false}
                  />
                </View>
              </View>
              <View style={styles.pinputcontainer}>
                <Ionicons name="mail" />
                <TextInput
                  style={styles.pinput}
                  placeholder="Email"
                  value={email}
                  editable={false}
                />
              </View>
              <View style={styles.pinputcontainer}>
                <Ionicons name="call" />
                <TextInput
                  style={styles.pinput}
                  placeholder="Phone"
                  value={phone}
                  keyboardType={"number-pad"}
                  editable={false}
                />
              </View>
              <View style={styles.pinputcontainer}>
                <Ionicons name="person" />
                <TextInput
                  style={styles.pinput}
                  placeholder="Identity"
                  value={identity}
                  onChangeText={(text)=>{setIdentity(text),setIdentityvalidation('')}}
                  onBlur={identityvalidator}
                />
              </View>
              {identityvalidation !='' && <Text style={styles.profileerror}>{identityvalidation}</Text>}
              <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                <View style={styles.srcontainer}>
                <View style={styles.pinputcontainer}>
                  <MaterialCommunityIcons name="google-maps" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Address"
                    value={address}
                    onChangeText={(text)=>{setAddress(text),setAddressvalidation('')}}
                    onBlur={addressvalidator}
                  />
                </View>
                  {addressvalidation !='' && <Text style={styles.profileerror}>{addressvalidation}</Text>}
              </View>
                <View style={styles.srcontainer}>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="earth-sharp" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Country"
                    value={country}
                    editable={false}
                  />
                </View>
                </View>
              </View>
              <View style={{flexDirection:"row"}}>
                <View style={styles.srcontainer}>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="earth-sharp" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="City"
                    value={city}
                    onChangeText={(text)=>{setCity(text),setCityvalidation('')}}
                    onBlur={cityvalidator}
                  />
                </View>
                  {cityvalidation!='' && <Text style={styles.profileerror}>{cityvalidation}</Text>}
                </View>
                <View style={styles.srcontainer}>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="lock-closed" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Passport"
                    value={passport}
                    onChangeText={(text)=>{setPassport(text),setPassportvalidation('')}}
                    onBlur={passportvalidator}
                  />
                </View>
                  {passportvalidation!='' && <Text style={styles.profileerror}>{passportvalidation}</Text> }
                </View>
              </View>
              <View style={{flexDirection:"row"}}>
                <View style={styles.srcontainer}>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="person" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Kin Name"
                    value={kinname}
                    onChangeText={(text)=>{setKinname(text),setKinnamevalidation('')}}
                    onBlur={kinnamevalidator}
                  />
                </View>
                  {kinnamevalidation!='' && <Text style={styles.profileerror}>{kinnamevalidation}</Text>}
                </View>
                <View style={styles.srcontainer}>
                <View style={styles.pinputcontainer}>
                  <Ionicons name="person" />
                  <TextInput
                    style={styles.rpinput}
                    placeholder="Kin Relation"
                    value={kinrelation}
                    onChangeText={(text)=>{setKinrelation(text),setKinrelationvalidation('')}}
                    onBlur={kinrelationvalidator}
                  />
                </View>
                  {kinrelationvalidation!=''&& <Text style={styles.profileerror}>{kinrelationvalidation}</Text>}
                </View>
              </View>
            </View>
          <View style={{flexDirection:"row",justifyContent:"center"}}>
            <TouchableOpacity style={styles.profilebtncnt} onPress={()=>{takephotofromgallery()}}>
              <Ionicons name="image-outline" color="white" size={18} style={styles.profilebtnicon}/>
              <Text style={styles.profilebtntext1}>Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profilebtncnt} onPress={()=>{takeidentityphotofromgallery()}}>
              <Ionicons name="image-outline" color="white" size={18} style={styles.profilebtnicon}/>
              <Text style={styles.profilebtntext1}>Identity Picture</Text>
            </TouchableOpacity>
          </View>
            <View style={{flexDirection:"row",justifyContent:"center",marginBottom:10}}>
              <TouchableOpacity style={styles.profilebtncnt} onPress={()=>{takepassportphotofromgallery()}}>
                <Ionicons name="image-outline" color="white" size={18} style={styles.profilebtnicon}/>
                <Text style={styles.profilebtntext}>Passport Picture</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.profilebtncnt} onPress={()=>{takesignaturephotofromgallery()}}>
                <Ionicons name="image-outline" color="white" size={18} style={styles.profilebtnicon}/>
                <Text style={styles.profilebtntext}>Signature Picture</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{takekinphotofromgallery()}} style={{ flex:1, flexDirection:"row",alignItems:"center",marginHorizontal:2,marginTop:2,elevation:15,alignSelf:"center",paddingHorizontal:20 }}>
              <Ionicons name="image-outline" color="white" size={18} style={styles.profilebtnicon}/>
              <Text style={{backgroundColor:"white",borderTopRightRadius:50,borderBottomRightRadius:50,borderWidth:1,borderColor:"white",paddingHorizontal:5,paddingVertical:10,alignItems:"center" }}>Kin Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{update()}}>
              <LinearGradient colors={["#0c0808", "#6c6868"]} style={styles.cpbutton}>
                <Text style={{padding:5,color:"white"}}>Update Profile</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ImageBackground>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}
