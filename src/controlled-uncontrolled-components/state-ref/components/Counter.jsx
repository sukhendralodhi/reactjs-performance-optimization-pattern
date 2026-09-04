import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const increament = () => setCount(count + 1);

    return (
        <div className="flex justify-center items-center h-screen flex-col gap-8">
            <h1 className="text-2xl text-blue-700">Count: {count}</h1>
            <button className="bg-blue-600 text-white px-4 py-1 rounded" onClick={increament}>Click</button>
        </div>
    )
}

export default Counter;