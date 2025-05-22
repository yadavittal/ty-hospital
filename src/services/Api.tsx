import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const instance = axios.create({
    baseURL:"",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
    }
});

instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig):Promise<InternalAxiosRequestConfig> => {
    if (!config?.url?.includes("auth/login")) {
        // show loader
    }

    const token = "";
    if (config.headers && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError):Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response: AxiosResponse):Promise<AxiosResponse> => {
    if (!response?.config?.url?.includes("auth/login")) {
      //hide loader
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error?.response?.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshToken = "";
      if (refreshToken) {
        try {
          const response = await axios.post("refresh-token-url", {
            refreshToken: refreshToken,
          });

          const newToken = response.data.response.accessToken;
          //set localstorage for new token

          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return instance(originalRequest);
        } catch (refreshError) {
          localStorage.clear();
          console.error(refreshError)
          window.location.href = "/login";
        }
      } else {
        localStorage.clear();
        window.location.href = "/login";
      }
    }

    if (!error.config.url.includes("auth/login")) {
      //hide loader
    }

    return Promise.reject(error);
  }
);

export default instance;