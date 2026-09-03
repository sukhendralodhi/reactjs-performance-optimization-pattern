

const LoadingSpinner = ({ message }) => {
    return (
        <div className="flex min-h-60 items-center justify-center bg-slate-100 px-4">
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-600 shadow-sm">
                {message}
            </div>
        </div>
    );
}

export default LoadingSpinner;