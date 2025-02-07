import { createFetchClient } from "@zayne-labs/callapi";

export const backendHost = "127.0.0.1:8000"

export const baseHttpUrl = `http://${backendHost}`
export const callApi = createFetchClient({
    timeout: 315000,
    baseURL: `${baseHttpUrl}/api/`,
    

});

//Test API

// import { createFetchClient } from "@zayne-labs/callapi";
// export const backendHost = "https://api.buzzbuntu.com"
// export const baseWsUrl = `wss://${backendHost}/ws/`
// export const baseHttpUrl = `https://${backendHost}`
// export const callApi = createFetchClient({
//     timeout: 15000,
//     baseURL: `${baseHttpUrl}/api/`,
//     retries: 3
// });
