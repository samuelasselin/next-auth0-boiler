import axios from "axios";
import {GetToken} from "./get-token";

export const apiPost = async (path: string, data = {}) => {

    const token = await GetToken()

    //TODO remove
    await delay(1000);

    try {
        const response = await axios.post(`http://localhost:3000${path}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const apiGet = async (path: string) => {
    try {

        const token = await GetToken()

        //TODO remove
        await delay(1000);

        const response = await axios.get(`http://localhost:3000${path}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const apiPatch = async (path: string, data = {}) => {
    try {

        const token = await GetToken()

        //TODO remove
        await delay(1000);

        const response = await axios.patch(`http://localhost:3000${path}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data
    } catch (e) {
        console.log(e)
    }
}

async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}