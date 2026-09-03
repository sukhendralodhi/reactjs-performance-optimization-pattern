
const CartItem = ({item}) => {
    return (
        <article key={item.cartId} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <img src={item.imageUrl} alt={item.name} className="h-20 w-20 rounded-xl bg-slate-100 object-cover" />
            <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-600">{item.brand || "Product"}</p>
                <h2 className="mt-1 truncate font-semibold text-slate-900">{item.name}</h2>
                <p className="mt-1 text-sm text-slate-500">Quantity: {item.quantity}</p>
            </div>
            <p className="shrink-0 text-base font-bold text-slate-900">${(Number(item.price) * item.quantity).toFixed(2)}</p>
        </article>
    )
}

export default CartItem