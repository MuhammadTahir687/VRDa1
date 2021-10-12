import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import styles from "../StyleSheet/Style";
import LinearGradient from "react-native-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import { CheckBox } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import Progress from "react-native-progress";
import { GETAPI, POSTAPI } from "../API/APIResponse";
import WH from "../Components/WalletDashboard";
import Check from "../Components/CheckBox";
import Item from "../Components/Item";
import RBModal from "../Components/RBModel";
import WS from "../Components/WalletSubmit";
import Card from "../Components/Card";
import Toast from "react-native-simple-toast";

export default function Wallet() {
  const [show, setShow] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');
  const [selectedValuevalidation, setSelectedValuevalidation] = useState('');
  const [selectedValue1validation, setSelectedValue1validation] = useState('');
  const [checkvalidation, setCheckvalidation] = useState('');
  const [check, setCheck] = useState(false);
  const [isModalVisible, setModalVisible] = useState();
  const [available,setAvailable]=useState(0);
  const [earning,setEarning]=useState(0);
  const [recieved,setRecieved]=useState(0);
  const [sent,setSent]=useState(0);
  const [spent,setSpent]=useState(0);
  const [vreit,setVreit]=useState(0);
  const [withdraw,setWithdraw]=useState(0);
  const [users,setUsers]=useState([]);
  const [btn,setBtn]=useState(0);
  const [details,setDetails]=useState('');
  const [modalmsg,setmodalmsg]=useState('');
  const [detailvalidation,setDetailvalidation]=useState('');
  const [loading, setLoading] = useState(true);

  const Button=[{id:1,title:"Wallet"},{id:2,title:"Proceed Order"}]
  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
      const response= await GETAPI("/api/transfer-funds")
      setLoading(false);
      setAvailable(response.data.available.available)
      setEarning(response.data.available.earning.toFixed(2))
      setRecieved(response.data.available.receieved)
      setSent(response.data.available.sent)
      setSpent(response.data.available.spent)
      setVreit(response.data.available.vreit)
      setWithdraw(response.data.available.withdraw)
     setUsers(response.data.childs)
    } catch (e) {console.log(e)}
  };

  const submit=async ()=>{
    if(selectedValue==''){setSelectedValuevalidation("Select Profile Account")}
    else if(selectedValue1==''){setSelectedValue1validation("Select Amount to Tranfer")}
    else if(details==''){setDetailvalidation("Add Transfer Details")}
    else if(check==false){setCheckvalidation("Agree on the Term of Conditions")}
    else {

      const data=new FormData();
      data.append('details', details,);
      data.append("amount", selectedValue1);
      data.append("user_id", selectedValue);
      const response= await POSTAPI('/api/transfer-funds',data)
      if(response.data.status==true) {
        setmodalmsg(response.data.message)
        setModalVisible(true)
      }else{
        Toast.show(response.data.message);
      }
    }
  }
  const DetailsValidation = () => {
    if(details==""){setDetailvalidation("Enter the Transfer Details")}
    else{setDetailvalidation('')}
  }
  const AccountValidation = () => {
    if(selectedValue==""){setSelectedValuevalidation("Select the Profile Account")}
    else{setSelectedValuevalidation('')}
  }
  const AmountValidation = () => {
    if(selectedValue1==""){setSelectedValue1validation("Select the Amount")}
    else{setSelectedValue1validation('')}
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={styles.walletbuttoncontainer}>
        {Button.map((item,index)=>(<Item key={index} onPress={()=>{setBtn(index)}} color={index==btn?"white":"black"} backgroundColor={index==btn?"black":"white"} text1={item.title}/>))}
      </View>
      {btn==0 ?
        <View>
          <WH text={"Earning"} value={"$"+earning} backgroundColor={"#bfbfbf"}/>
          <WH text={"Sent"} value={"$"+sent} backgroundColor={"transparent"}/>
          <WH text={"Spent"} value={"$"+spent} backgroundColor={"#bfbfbf"}/>
          <WH text={"Recieved"} value={"$"+recieved} backgroundColor={"transparent"}/>
          <WH text={"Vreit"} value={"$"+vreit} backgroundColor={"#bfbfbf"}/>
          <WH text={"Withdraw"} value={"$"+withdraw} backgroundColor={"transparent"}/>
          <WH text={"Available"} value={"$"+available} backgroundColor={"#bfbfbf"}/>
        </View> :
        <View>
          <Text style={styles.wh}>Profile Account</Text>
          <View style={styles.wpickercontainer}>
            <Picker
              onBlur={AccountValidation}
              selectedValue={selectedValue}
              style={{ height: 50, width: "100%" }}
              onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue),setSelectedValuevalidation('')}}>
              <Picker.Item label="Choose One" value="" />
              {users.map((item,index)=>(<Picker.Item key={index} label={item.name} value={item.id} />))}
            </Picker>
          </View>
          <Text style={styles.walleterror}>{selectedValuevalidation}</Text>
          <Text style={styles.wh}>Proceed With</Text>
          <View style={styles.wpickercontainer}>
            <Picker
              onBlur={AmountValidation}
              selectedValue={selectedValue1} style={{ height: 50, width: "100%" }}
              onValueChange={(itemValue, itemIndex) => {setSelectedValue1(itemValue),setSelectedValue1validation('')}}>
              <Picker.Item label="Min Amount is 500" value="" style={{ color: "#999595" }} />
              <Picker.Item label="500" value="500" />
              <Picker.Item label="5000" value="5000" />
              <Picker.Item label="50000" value="50000" />
              <Picker.Item label="5000000" value="5000000" />
            </Picker>
          </View>
          <Text style={styles.walleterror}>{selectedValue1validation}</Text>
          <Text style={styles.wh}>Withdraw Details</Text>
          <TextInput style={styles.winput} value={details} onBlur={DetailsValidation} onChangeText={(text)=>{setDetails(text),setDetailvalidation('')}}/>
          <Text style={styles.walleterror}>{detailvalidation}</Text>
          <View>
            <Check onPress={() => {setCheck(!check),setCheckvalidation('')}} checked={check}/>
            <Text style={styles.walleterror}>{checkvalidation}</Text>
          </View>
          <WS text1={"Proceed Transfer"} onPress={()=>{submit()}}/>
          <RBModal text1={modalmsg} iconname={"close"} text2={isModalVisible} onPress={()=>{setModalVisible(false)}}/>
        </View>
      }
      </ScrollView>
      <ActivityIndicator animating={loading} size="large" color="black" style={styles.activityind} />
    </SafeAreaView>
  );
}
