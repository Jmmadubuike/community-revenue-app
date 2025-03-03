import { createFetchClient } from "@zayne-labs/callapi";
import {toast} from "react-hot-toast"
export const backendHost = "ogidiunion.onrender.com"
// export const backendHost = "localhost:8000"


export const baseHttpUrl = `https://${backendHost}`
export const callApi = createFetchClient({
    timeout: 315000,
    baseURL: `${baseHttpUrl}/api/`
    
    

});

export const callAdminApi = createFetchClient({
    timeout: 315000,
    baseURL: `${baseHttpUrl}/api/`,
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("admin_token")}`
    },
    
    onResponse(context) {
        if (context.response.status == 401 || context.response.status == 403){
            window.location.href  = "/unautorized"
        }
    },

});


export const callUserApi = createFetchClient({
    timeout: 315000,
    baseURL: `${baseHttpUrl}/api/`,
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("user_token")}`
    },
    onResponse(context) {
        if (context.response.status == 401 || context.response.status == 403){
            window.location.href  = "/user/login"
        }
    },
    
    
    

});
