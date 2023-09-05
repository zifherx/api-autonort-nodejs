import axios from "axios";
import config from "../config/config";

const apiPlanillas = axios.create({
    baseURL: `${config.SERVER_API_PLANILLAS}/api/`,
    headers: {
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Origin": "*",
    },
});

export { apiPlanillas };
