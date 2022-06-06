import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


const defaultConfig = {
    timeout: 5000,
    baseUrl: ''
}
class Http {
    constructor() {
        this.httpInterceptorsRequest()
        this.httpInterceptorsResponse()
    }
    private static axiosInstance = axios.create(defaultConfig)

    private httpInterceptorsRequest() {
        // 请求拦截
        Http.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
            return config
        }, error => {
            return Promise.reject(error)
        })
    }

    private httpInterceptorsResponse() {
        // 响应拦截
        Http.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
            return response
        }, error => {
            return Promise.reject(error)
        })
    }
    public httpGet<T>(url: string, params: AxiosRequestConfig): Promise<T> {
        return Http.axiosInstance.get(url, params).then(res => res.data).catch()
    }

    public httpPost<T>(url: string, params: AxiosRequestConfig): Promise<T> {
        return Http.axiosInstance.post(url, params).then(res => res.data).catch()
    }
}

export const http = new Http()