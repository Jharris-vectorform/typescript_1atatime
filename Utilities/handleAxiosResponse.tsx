import { AxiosResponse } from "axios";
import { CPApiResponse } from "./interface";

export const handleAxiosResponse = <T = any> (response: AxiosResponse<CPApiResponse<T>>): T => {
    if (response.status >= 400)
        throw response.statusText;
    if (response.data.success !== true)
        throw response.data.message;
    return response.data.data;
}
