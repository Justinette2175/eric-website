import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/`,
  timeout: 1000
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = process.env.REACT_APP_API_TOKEN;
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers["Authorization"] = `bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export type RequestOptions = {
  filters?: Record<string, unknown>;
  sort?: Record<string, unknown>;
};
