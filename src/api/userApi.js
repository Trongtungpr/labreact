import axios from 'axios';
import {API_GET_USER} from './contantApis'


// export async function getUser(infoLogin){
//    console.log("call api user",API_GET_USER+'?email='+infoLogin.email+'&password='+infoLogin.password)
//    return await axios.get(API_GET_USER+'?email='+infoLogin.email+'&password='+infoLogin.password)
//    .then((response) => response.json())
// }
export const getUser = async (infoLogin) =>{
   console.log("call api user",API_GET_USER+'?email='+infoLogin.email+'&password='+infoLogin.password)
   try {
      return await axios.get(API_GET_USER+'?email='+infoLogin.email+'&password='+infoLogin.password);
  }
  catch(e){
      return;
  }
};