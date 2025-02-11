import { createFetchClient } from "@zayne-labs/callapi";

export const backendHost = "127.0.0.1:8000"

export const baseHttpUrl = `http://${backendHost}`
export const callApi = createFetchClient({
    timeout: 315000,
    baseURL: `${baseHttpUrl}/api/`
    
    

});

export const callAdminApi = createFetchClient({
    timeout: 315000,
    baseURL: `${baseHttpUrl}/api/`,
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("admin_token")}`
    }
    
    

});

