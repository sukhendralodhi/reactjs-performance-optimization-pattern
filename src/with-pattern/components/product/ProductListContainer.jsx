import axios from "axios";
import { useEffect, useState } from "react";
import ErrorComponent from "../../common-components/ErrorComponent";
import LoadingSpinner from "../../common-components/LoadingSpinner";
import Product from "./Product";

const ProductListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState();

    console.log(category)

    const handleCategoryChange = (event) => {
        // console.log(event.target.value); 
        setCategory(event.target.value);
    }

    const handleFetchproducts = async () => {
        try {
            setLoading(true);
            let response;

            if (category) {
                response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/products?category=${category}`
                );
            } else {
                response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/products`
                );
            }
            setProducts(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const handleGetcategory = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
            // console.log(response.data)
            setCategories(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleFetchproducts();
    }, [category]);

    useEffect(() => {
        handleGetcategory();
    }, []);

    const handleRetry = () => {
        handleFetchproducts();
    }
    const handleAddProductToCart = async (productId) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/cart`,
                {
                    productId: productId
                }
            );

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return <LoadingSpinner message="Loading product..." />
    }

    if (error) {
        return <ErrorComponent title="Opps! something went wrong" errorMessage={error.message} onRetry={handleRetry} />
    }

    return (
        <section className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Curated collection</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Explore products</h1>
                        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">Discover practical favourites, presented with all the details you need.</p>
                    </div>
                    <span className="w-fit rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm">
                        {products.length} {products.length === 1 ? "product" : "products"}
                    </span>
                </div>

                <div className="mb-8 border flex justify-center border-gray-300 py-2 px-2 rounded shadow-sm">
                    <select className="border border-gray-600 px-2 py-1 rounded" onChange={handleCategoryChange}>
                        <option value="">Select Category</option>
                        {
                            categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))
                        }
                    </select>
                </div>

                {products.length ? (
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        {products.map((product) => <Product onAddCart={handleAddProductToCart} key={product.id} product={product} />)}
                    </div>
                ) : (
                    <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
                        <p className="text-lg font-semibold text-slate-800">No products available</p>
                        <p className="mt-2 text-sm text-slate-500">Please check back again soon.</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProductListContainer;
