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

