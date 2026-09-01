import { type Method } from "axios";
import { useState } from "react";
import { apiClient } from "../utils/apiClient";


export function useApi<T>() {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function request(
        url: string,
        method: Method = "GET",
        body?: unknown
    ) {
        try {
            setLoading(true);
            setError(null);

            const response = await apiClient<T>(url, method, body);
            setData(response);
            return response;
        } catch (error) {
            const message = error instanceof Error ? error.message : "Something went wrong";
            setError(message);
            throw error;
        } finally {
            setLoading(false);
        }
    }
    return { data, loading, error, request };
}