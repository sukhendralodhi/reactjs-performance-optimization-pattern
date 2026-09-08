import { useEffect, useState } from "react";

function DataFetcher({ url, render }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const result = await response.json();
            setData(result);

        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Something went wrong"
            )
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [url]);

    return render({ data, loading, error });

}

export default DataFetcher;