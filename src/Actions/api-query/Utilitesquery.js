import { Consumer, Provider, Utilites } from "../api-constants/api-constants";
import axios from "axios";


export const postAddsRequest = async(newAdver)=>{
    // console.log('addsrequest');
    const response = await Utilites.post("advertisement/request",newAdver);
    // console.log(response.data);
    return response.data;
} 