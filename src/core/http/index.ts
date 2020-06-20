import Vue from "vue";
import VueResource from "vue-resource";
import axios from "axios";
import services from "./services";
// import interceptors from './interceptors'

Vue.use(VueResource);

const http = axios.create({
  baseURL: "http://localhost:8080/"
});

// http.interceptors.push(interceptors)

// Object.keys(services).map((service: string) => {
//   services[service] = Vue.resource('', {}, services[service])
// })

export default services;
export { http };
