import { useRef, useState } from "react";

const CounterWithRef = () => {

    const countRef = useRef(0);
    const [renderCount, setRenderCount] = useState(0);

    const increament = () => {
        countRef.current = countRef.current + 1;
        console.log("Ref count: ", countRef.current);
    }

    return (
        <div className="flex justify-center items-center h-screen flex-col gap-8">
            <div>
                <h1 className="text-2xl text-blue-700">Ref Count: {countRef.current}</h1>
                <button className="bg-blue-600 text-white px-4 py-1 rounded" onClick={increament}>Increament Ref Count</button>
            </div>
            <div>
                <h1 className="text-2xl text-blue-700">Render Count: {renderCount}</h1>
                <button className="bg-blue-600 text-white px-4 py-1 rounded" onClick={() => setRenderCount(renderCount + 1)}>Force Render</button>
            </div>
        </div>
    );
}

export default CounterWithRef;