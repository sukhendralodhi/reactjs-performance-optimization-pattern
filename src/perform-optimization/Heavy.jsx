import { useEffect } from "react";

const Heavy = () => {
    console.log("Heavy component rendered");

    useEffect(() => {
        // do some large calculation using for loop
        for (let i = 0; i < 1000000; i++) {
            // Simulate a large calculation
            Math.sqrt(i);
        }

    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold">Hello, React!</h1>
            <p>This is a simple heavy component.</p>

        </div>
    )
}

export default Heavy