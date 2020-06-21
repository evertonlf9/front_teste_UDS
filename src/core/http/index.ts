import axios from "axios";

const baseDomain = "https://front-teste-uds.herokuapp.com/"
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL
});