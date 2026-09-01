import { useEffect, useState } from "react";
import { useApi } from "../customHook/useApi";
import { useDebounce } from "../utils/useDebounce";
const API_URL = (import.meta as ImportMeta & {
    env: {
        VITE_API_URL?: string;
    };
}).env.VITE_API_URL ?? "";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

interface Products {
    products: Product[];
}

interface ApiResponse {
    success: boolean;
    message: string;
    data: Products;
}

export function SearchBox() {

    const [query, setQuery] = useState<string>('');
    const debounceQuery = useDebounce(query, 600);
    const {
        data,
        loading,
        error,
        request
    } = useApi<ApiResponse>();

    async function searchProducts() {
        try {
            console.log("API Query Call with!", debounceQuery);

            const url = query.trim()
                ? `/products?search=${encodeURIComponent(query)}`
                : "/products";

            request(url, "GET").catch(() => {

            });

        } catch (error) {
            console.error("Search API Error:", error);
        }
    }

    useEffect(() => {
        searchProducts();
    }, [debounceQuery]);

    console.log(data?.data?.products)

    return (
        <>
            <div>
                <h1>Search Box</h1>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type to search..."
                />
                {loading && <p>Loading products...</p>}

                {error && <p>Error: {error}</p>}

                {!loading &&
                    data?.data.products.map((product) => (
                        <div key={product.id}>
                            {product.name}
                        </div>
                    ))}
            </div>
        </>
    )
}