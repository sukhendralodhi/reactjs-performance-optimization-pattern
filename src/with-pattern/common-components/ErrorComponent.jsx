

const ErrorComponent = ({ title, errorMessage, onRetry }) => {
    return (
        <div className="flex flex-col min-h-screen gap-6 items-center justify-center bg-slate-100 px-4">
            <h3>{title}</h3>
            <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-sm font-medium text-red-600 shadow-sm">
                Error: {errorMessage}
            </div>
            <button className="bg-gray-600 px-2 py-2 text-white rounded hover:bg-gray-800" onClick={onRetry}>Try Again</button>
        </div>
    );
}

export default ErrorComponent;