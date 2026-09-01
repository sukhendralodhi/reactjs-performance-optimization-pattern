import { useEffect, useState } from "react";
import { useApi } from "../customHook/useApi";
import { ApiResponse } from "../types/product.type";
import { useDebounce } from "../utils/useDebounce";
const API_URL = (import.meta as ImportMeta & {
    env: {
        VITE_API_URL?: string;
    };
}).env.VITE_API_URL ?? "";



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
            <div
                style={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <h1
                    style={{
                        marginTop: "5px",
                        marginBottom: "5px"
                    }}
                >Search Box</h1>
                <div style={{
                    marginTop: "5px",
                    marginBottom: "15px"
                }}>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Type to search..."
                    />
                </div>

                <div
                    style={
                        {
                            textAlign: "center"
                        }
                    }
                >
                    {loading && <p>Loading products...</p>}
                </div>

                {error && <p>Error: {error}</p>}

                <div
                    style={
                        {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }
                >
                    {!loading &&
                        data?.data.products.map((product) => (
                            <div
                                style={{
                                    border: "2px solid black",
                                    padding: "10px",
                                    borderRadius: "10px"
                                }}
                                key={product.id}>
                                {product.name}
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}