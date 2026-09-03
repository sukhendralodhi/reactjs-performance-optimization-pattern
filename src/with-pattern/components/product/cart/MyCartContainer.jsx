import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";





const MyCartContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        setError(null);

        const [cartResponse, productsResponse] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/cart`),
          axios.get(`${import.meta.env.VITE_API_URL}/products`),
        ]);

        const productsById = new Map(productsResponse.data.map((product) => [product.id, product]));
        const cartProducts = cartResponse.data.flatMap((cartItem) => {
          const product = cartItem.productId ? productsById.get(cartItem.productId) : undefined;
          return product ? [{ ...product, cartId: cartItem.id, quantity: cartItem.quantity ?? 1 }] : [];
        });

        setItems(cartProducts);
      } catch (fetchError) {
        setError(fetchError instanceof Error ? fetchError.message : "Unable to load your cart.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const total = items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  if (loading) {
    return <div className="flex min-h-60 items-center justify-center bg-slate-100 text-sm font-medium text-slate-600">Loading your cart...</div>;
  }

  if (error) {
    return <div className="flex min-h-60 items-center justify-center bg-slate-100 px-4 text-sm font-medium text-rose-600">{error}</div>;
  }

  return (
    <section className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Your selection</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">My cart</h1>
          </div>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600">{items.length} items</span>
        </div>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-800">Your cart is empty</p>
            <p className="mt-2 text-sm text-slate-500">Add a product to see it here.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <div className="flex items-center justify-between rounded-2xl bg-slate-900 px-5 py-4 text-white shadow-lg shadow-slate-300/50">
              <span className="text-sm font-medium text-slate-300">Total</span>
              <span className="text-xl font-bold">${total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MyCartContainer;
