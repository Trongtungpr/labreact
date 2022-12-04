import axios from 'axios';
import {API_GET_USER} from './contantApis'


// export async function getUser(infoLogin){
//    console.log("call api user",API_GET_USER+'?email='+infoLogin.email+'&password='+infoLogin.password)
//    return await axios.get(API_GET_USER+'?email='+infoLogin.email+'&password='+infoLogin.password)
//    .then((response) => response.json())
// }
export const getUser = async (infoLogin) =>{
   try {
      return await axios.get(API_GET_USER+'?email='+infoLogin.email);
  }
  catch(e){
      return;
  }
};

export const getUserById = async (id) =>{
    try {
       return await axios.get(API_GET_USER+'/'+id);
   }
   catch(e){
       return;
   }
 };

 export const updateUser = async (id,data) => {
    try {
        return await axios.put(API_GET_USER+'/'+id,data);
    }
    catch(e){
        return;
    }
 }

 export const createUser = async (id,data) => {
    try {
        return await axios.post(API_GET_USER+'/'+id,data);
    }
    catch(e){
        return;
    }
 }

export const getAllUser = async () =>{
   try {
      return await axios.get(API_GET_USER);
  }
  catch(e){
      return;
  }
};
export const delUser = async (id) => {
    return await axios.delete("http://localhost:3050/api/users/"+id).then(res=>{
        console.log(res)
    });
}
export const searchUser = async (email) => {
    console.log("call search",API_GET_USER+"?email_like="+email);
    return await axios.get(API_GET_USER+"?email_like="+email);
}