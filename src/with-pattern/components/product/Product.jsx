
const Product = ({ product }) => {
    const hasSalePrice = product.originalPrice && Number(product.originalPrice) > Number(product.price);
    const isInStock = product.inStock ?? Number(product.stock) > 0;
    const initials = product.name?.split(" ").filter(Boolean).slice(0, 2).map((word) => word[0]).join("") || "P";

    return (
        <article className="group flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-slate-950 via-slate-800 to-sky-900">
                {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                ) : (
                    <span className="select-none text-2xl font-semibold tracking-tight text-white/90">{initials}</span>
                )}
            </div>

            <div className="flex min-w-0 flex-1 flex-col self-stretch">
                <div className="min-w-0">
                    <div className="flex items-start justify-between gap-2">
                        <p className="truncate text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-600">{product.brand || product.category}</p>
                        <span className={`shrink-0 text-[11px] font-medium ${isInStock ? "text-emerald-600" : "text-rose-600"}`}>{isInStock ? "In stock" : "Sold out"}</span>
                    </div>
                    <h2 className="mt-1 truncate text-sm font-semibold text-slate-900">{product.name}</h2>
                    <p className="mt-1 line-clamp-2 text-xs leading-4 text-slate-500">{product.description || "A thoughtfully selected product."}</p>
                </div>

                <div className="mt-auto flex items-end justify-between gap-2 pt-2">
                    <div className="flex items-baseline gap-1.5">
                        <p className="text-base font-bold tracking-tight text-slate-900">${Number(product.price || 0).toFixed(2)}</p>
                        {hasSalePrice && <p className="text-[11px] text-slate-400 line-through">${Number(product.originalPrice).toFixed(2)}</p>}
                    </div>
                    {product.rating && (
                        <p className="shrink-0 text-xs font-semibold text-amber-500">★ {product.rating}</p>
                    )}
                </div>
                <div className="flex justify-end mt-4">
                    <button className="bg-blue-600 text-sm text-white m-2 px-2 py-1 rounded">Add To Cart</button>
                </div>
            </div>
        </article>
    );
};

export default Product;
