import environment from "@src/config/environment/environment";
import axios from "axios";

const callApi = axios.create({
  baseURL: "https://satria-personal-backend.herokuapp.com/api",
  headers: {
    Authorization: `Bearer ${environment.TOKEN}`,
  },
});

export default callApi;
