import axios from "axios";

const HTTPClient = axios.create({
  baseURL: "https://api-desafio-front.justdigital.com.br/",
});

export default HTTPClient;
