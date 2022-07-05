import axios from "axios";

const callApi = axios.create({
  baseURL: "https://satria-personal-backend.herokuapp.com/api",
});

export default callApi;
