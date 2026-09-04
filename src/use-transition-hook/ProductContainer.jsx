import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import Product from "./Product";
import useDebounce from "./useDebounce";

const ProductContainer = () => {


    const [products, setProducts] = useState([]);
    const [input, setInput] = useState("");
    const [isPending, startTransition] = useTransition()

    const query = useDebounce(input, 500);

    console.log(input);
    console.log(query)


    const handleProductFetch = async () => {
        try {
            const url = query
                ? `http://localhost:4000/api/products?search=${query}`
                : `http://localhost:4000/api/products`;

            const response = await axios.get(url);

            console.log(response.data.data.products);
            setProducts(response.data.data.products);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        handleProductFetch();
    }, [query]);

    return (
        <div>
            <input className="border px-4 py-2" placeholder="Search" type="text" name="query" value={input} onChange={(e) => setInput(e.target.value)} />
            {isPending && <p>Searching...</p>}
            {
                products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductContainer