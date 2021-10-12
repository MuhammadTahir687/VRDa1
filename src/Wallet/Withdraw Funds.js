import React,{useState,useEffect} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from "react-native";
import styles from '../StyleSheet/Style'
import LinearGradient from "react-native-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import { CheckBox } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import Progress from "react-native-progress";
import { GETAPI, POSTAPI } from "../API/APIResponse";
import WH from "../Components/WalletDashboard";
import Check from "../Components/CheckBox";
import WS from "../Components/WalletSubmit";
import RBModal from "../Components/RBModel";
import Item from "../Components/Item";
import { GETDATA } from "../AsyncStorage/AsyncStorage";
import Toast from "react-native-simple-toast";

export default function WithdrawFunds(){

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
  const [detailvalidation,setDetailvalidation]=useState('');
  const [details,setDetails]=useState('');
  const [modalmsg,setmodalmsg]=useState('');
  const [btn,setBtn]=useState(0);
  const [loading, setLoading] = useState(true);
  const Button=[{id:1,title:"Wallet"},{id:2,title:"Proceed Order"}]

  useEffect(async () => {await response()}, []);
  const response = async () => {
    try {
      const response= await GETAPI("/api/withdraw-funds")
      setLoading(false);
      setAvailable(response.data.available)
      setEarning(response.data.earning.toFixed(2))
      setRecieved(response.data.receieved)
      setSent(response.data.sent)
      setSpent(response.data.spent)
      setVreit(response.data.vreit)
      setWithdraw(response.data.withdraw)
    } catch (e) {
      console.log(e);
    }
  };
  const submit=async ()=> {
    if (selectedValue == '') { setSelectedValuevalidation("Select Amount to Tranfer")}
    else if (selectedValue1 == '') {setSelectedValue1validation("Select Payment Method")}
    else if (details == '') {setDetailvalidation("Add Withdraw Details")}
    else if (check == false) {setCheckvalidation("Select the Term of Conditions")}
    else {

      const userid= await GETDATA('user');
      const data = new FormData();
      data.append('payment_type',selectedValue1);
      data.append('details', details,);
      data.append("amount", selectedValue);
      data.append("user_id", userid.user.id);
      const response = await POSTAPI('/api/transfer-funds', data)
      if(response.data.status==true) {
        setmodalmsg(response.data.message)
        setModalVisible(true)
      }else{
        Toast.show(response.data.message);
      }
    }
  }
  const DetailsValidation = () => {
    if(details==""){setDetailvalidation("Enter the Withdraw Details")}
    else{setDetailvalidation('')}
  }
  const AccountValidation = () => {
    if(selectedValue1==""){setSelectedValue1validation("Select the Payment Type")}
    else{setSelectedValue1validation('')}
  }
  const AmountValidation = () => {
    if(selectedValue==""){setSelectedValuevalidation("Select the Amount")}
    else{setSelectedValuevalidation('')}
  }
    return(
    <SafeAreaView style={{flex:1}}>
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
          <Text style={styles.wh}>Proceed With</Text>
          <View style={styles.wpickercontainer}>
            <Picker
              selectedValue={selectedValue}
              onBlur={AmountValidation}
              style={{ height:50, width: "100%" }}
              onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue),setSelectedValuevalidation('')}}
            >
              <Picker.Item label="Min Amount is 500" value="" style={{color:"#999595"}} />
              <Picker.Item label="500" value="500"  />
              <Picker.Item label="5000" value="5000" />
              <Picker.Item label="50000" value="50000" />
              <Picker.Item label="5000000" value="5000000" />
            </Picker>
          </View>
          <Text style={styles.walleterror}>{selectedValuevalidation}</Text>
          <Text style={styles.wh}>Select Payment Type</Text>
          <View style={styles.wpickercontainer}>
            <Picker
              selectedValue={selectedValue1}
              onBlur={AccountValidation}
              style={{ height:50, width: "100%" }}
              onValueChange={(itemValue, itemIndex) => {setSelectedValue1(itemValue),setSelectedValue1validation('')}}
            >
              <Picker.Item label="Select" value="" style={{color:"#999595"}} />
              <Picker.Item label="Bank" value="bank"  />
              <Picker.Item label="USDT" value="usdt" />
              <Picker.Item label="Wallet" value="wallet" />
            </Picker>
          </View>
          <Text style={styles.walleterror}>{selectedValue1validation}</Text>
          <Text style={styles.wh}>Withdraw Details</Text>
          <TextInput style={styles.winput} value={details} onBlur={DetailsValidation} onChangeText={(text)=>{setDetails(text),setDetailvalidation('')}}/>
          <Text style={styles.walleterror}>{detailvalidation}</Text>
          <View style={styles.notes}>
            <Text>5% service charges will be applicable 7 working days required.</Text>
          </View>
            <Check onPress={() => {setCheck(!check),setCheckvalidation('')}} checked={check}/>
          <Text style={styles.walleterror}>{checkvalidation}</Text>
          <WS text1={"Proceed Transfer"} onPress={()=>{submit()}}/>
          <RBModal text1={modalmsg} iconname={"close"} text2={isModalVisible} onPress={()=>{setModalVisible(false)}}/>
        </View>
      }
      </ScrollView>
      <ActivityIndicator animating={loading} size="large" color="black" style={styles.activityind} />
    </SafeAreaView>
  )
}
