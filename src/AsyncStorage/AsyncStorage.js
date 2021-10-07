import AsyncStorage from "@react-native-async-storage/async-storage";
const GETDATA = async (key) => {
  try {
    const user = await AsyncStorage.getItem(key)
    const data = JSON.parse(user)
    return data
  } catch (e) {
    console.log('ERROR');
  }
}
const SAVEDATA = async (key, data) => {
  try {
    await AsyncStorage.setItem(
      key, JSON.stringify(data)
    );
  } catch (error) {
    console.log(error)
  }
}
export { SAVEDATA, GETDATA }
