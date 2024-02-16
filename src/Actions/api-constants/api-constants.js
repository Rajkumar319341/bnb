//Api main
import axios from "axios";

const providerBaseUrl =
  "https://provider-shikshakpro.care4edu.com/c4e/provider/";
const providerAdmin = "c4eadmin";
const providerPassword = "M2N3B4V5C6X7Z8L9K0J1H2G3F4D5S6A";

const consumerBaseUrl =
  "https://consumer-shikshakpro.care4edu.com/c4e/consumer/";
const consumerAdmin = "c4eadmin";
const consumerPassword = "J4H2G5F6D8S1A3Z6X9C0V4B7N2M1Q3W";

const utilitesBaseUrl =
  "https://utilities-shikshakpro.care4edu.com/c4e/";
const utilitesAdmin = "c4econsumer";
const utilitesPassword = "7A2Q5W4S6E8D9R0T1Y3U2I5O4P6L8K9";

const categoryBaseUrl =
  "https://bnb.care4edu.com/";
const  categoryAdmin = "bnb_api";
const  categoryPassword = "QSJNVBSNSBJHSTUHJSISIJSSEV";

export const Provider = axios.create({
  baseURL: providerBaseUrl,
  auth: {
    username: providerAdmin,
    password: providerPassword,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export const Consumer = axios.create({
  baseURL: consumerBaseUrl,
  auth: {
    username: consumerAdmin,
    password: consumerPassword,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export const Utilites = axios.create({
  baseURL: utilitesBaseUrl,
  auth: {
    username: utilitesAdmin,
    password: utilitesPassword,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export const category = axios.create({
  baseURL: categoryBaseUrl,
  auth: {
    username: categoryAdmin,
    password: categoryPassword,
  },
  headers: {
    "Content-Type": "application/json",
  },
});
