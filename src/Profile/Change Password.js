import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
} from "react-native";
import { Avatar } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import styles from "../StyleSheet/Style";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ChangePassword({ navigation }) {
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
                  <Image source={require("../Assets/Logo.png")} style={{
                    width: 100,
                    height: 100,
                    borderWidth: 5,
                    borderColor: "white",
                    borderRadius: 50,
                    backgroundColor: "red",
                    alignSelf: "center",
                  }} />
                </View>
                <Text style={styles.profilename}>Mr Chukwuemeka</Text>
                <Text style={styles.profiledesignation}>Manager</Text>

              </View>
              <View style={styles.pdatacontainer}>
                <Text style={{ fontWeight: "bold", marginLeft: 25 }}>Change Password</Text>
              </View>
              <View style={styles.pinputcontainer}>
                <Ionicons name="lock-closed" />
                <TextInput
                  style={styles.pinput}
                  placeholder="Old Password"
                />
              </View>
              <View style={styles.pinputcontainer}>
                <Ionicons name="lock-closed" />
                <TextInput
                  style={styles.pinput}
                  placeholder="New Password"
                />
              </View>
              <View style={styles.pinputcontainer}>
                <Ionicons name="lock-closed" />
                <TextInput
                  style={styles.pinput}
                  placeholder="Confirm Password"
                />
              </View>

              <TouchableOpacity>
                <LinearGradient colors={["#0c0808", "#a49f9f"]} style={styles.cpbutton}>
                  <Text style={styles.modalhtext}>Change Password</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>

  );
}
