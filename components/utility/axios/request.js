import Axios from "axios";

const headers = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
};
const baseURL = "http://localhost:8080/api";

export const get = async (path, resCallback, errCallback) => {
    await Axios.get(baseURL + path, headers).then( 
        res => {
            resCallback(res);
        },
        err => {
            errCallback(err);
        }
    );
};

export const post = async (path, json, resCallback, errCallback) => {
    await Axios.post(baseURL + path, json, headers).then( 
        res => {
            resCallback(res);
        },
        err => {
            errCallback(err);
        }
    );
};