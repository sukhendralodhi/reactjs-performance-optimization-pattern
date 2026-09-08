import { useState } from "react";

const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleMouse(e) {
        setPosition({ x: e.clientX, y: e.clientY });
    }

    return (
        <div
            className="border min-h-75 flex justify-center items-center m-8"
            onMouseMove={handleMouse}
        >
            {render(position)}

        </div>
    )
}

export default MouseTracker