import Axios from "axios";

const axios = Axios.create({
  baseURL: "/",
  timeout: 60000
});

axios.interceptors.request.use((config: any) => {
  // config.metadata = { startTime: new Date() };
  return config;
});

axios.interceptors.response.use((res: any) => {
  // res.config.metadata.endTime = new Date();
  // res.duration = res.config.metadata.endTime - res.config.metadata.startTime;
  return res;
});

axios.interceptors.request.use();

export { axios };
