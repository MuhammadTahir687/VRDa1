import axios from "axios";
import { GETDATA } from "../AsyncStorage/AsyncStorage";
const GETAPI = async (target) => {
  try {
    const Token=await GETDATA('token')
    const instance = axios.create({
      baseURL: "https://staging.vrda1.net",
      headers: { "Authorization": "Bearer " + Token },
    });
    const response = await instance.get(target);
    var res= response.data
    return res;
  } catch (e) {
    console.log("Error",e);
    return e;
  }
};
const POSTAPI = async (target, body) => {
  try {
    const Token=await GETDATA('token')
    const instance = axios.create({
      baseURL: "https://staging.vrda1.net",
      headers: { "Authorization": "Bearer " + Token },
    });
    const response = await instance.post(target, body);
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};
export {GETAPI,POSTAPI}
