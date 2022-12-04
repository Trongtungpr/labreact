import axios from 'axios'
import {API_GET_PRODUCT} from './contantApis';

export const getAll= async () =>{
    console.log("call api: ",API_GET_PRODUCT)
    return await axios.get(API_GET_PRODUCT);
}
export const getProduct = async (slug) =>{
    try {
        return await axios.get(API_GET_PRODUCT+'/?id='+slug);
    }
    catch(e){
        return;
    }
}
export const searchProduct = async (name) =>{
    try {
        return await axios.get(API_GET_PRODUCT+'?name_like='+name);
    }
    catch(e){
        return;
    }
}
export const updateProduct = async (id,data) => {
    try {
        return await axios.put(API_GET_PRODUCT+'/'+id,data);
    }
    catch(e){
        return;
    }
 }

 export const createProduct = async (id,data) => {
    try {
        return await axios.post(API_GET_PRODUCT+'/'+id,data);
    }
    catch(e){
        return;
    }
 }
 export const delProduct = async (id) => {
    return await axios.delete(API_GET_PRODUCT+'/'+id).then(res=>{
        console.log(res)
    });
}
