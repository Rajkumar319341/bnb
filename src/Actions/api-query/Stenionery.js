import {category} from "../api-constants/api-constants";
import axios from "axios";


export const getCategory = async(data)=>{
    // console.log('addsrequest');
    const response = await category.fetch("bnb/category",data);
    // console.log(response.data);
    return response.data;
} 