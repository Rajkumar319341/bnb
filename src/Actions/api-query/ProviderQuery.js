import { Consumer, Provider } from "../api-constants/api-constants";
import axios from "axios";

export const getProviderCount = async()=>{
    const response = await Provider.get("provider-count");
    return response.data;
} 
export const getVerifiedProvidersCount = async()=>{
    const response = await Provider.get("verified-provider-count?status=verified");
    return response.data;
} 
export const getConsumerCount = async()=>{
    const response = await Consumer.get("consumer-count");
    return response.data;
} 