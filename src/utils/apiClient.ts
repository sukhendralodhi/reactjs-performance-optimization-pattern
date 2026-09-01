import axios, { type Method } from "axios";


const API_URL = (import.meta as ImportMeta & {
    env: {
        VITE_API_URL?: string;
    };
}).env.VITE_API_URL ?? "";

export async function apiClient<T>(
    url: string,
    method: Method = "GET",
    body?: unknown
): Promise<T> {
    try {
        const response = await axios({
            baseURL: API_URL,
            url,
            method,
            data: body
        });

        return response.data;

    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}