import { useState } from "react";

const CarTracker = () => {

    const [pos, setPos] = useState({ x: 0, y: 0 });

    function handleMouseMove(e) {
        setPos({ x: e.clientX, y: e.clientY });
        console.log(pos.x, pos.y);
    }

    return (
        <div
            className="border min-h-75 flex justify-center items-center m-8"
            onMouseMove={handleMouseMove}>
            <p>
                🚗 car is at X:{pos.x} Y:{pos.y}
            </p>
        </div>
    )
}

export default CarTracker