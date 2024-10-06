import axios from "axios";

function createInstance() {
  const instance = axios.create({
    baseURL: "http://localhost:3000",
  });

  instance.interceptors.response.use(
    (config) => {
      console.log(config);

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
}

export const baseInstance = createInstance();
