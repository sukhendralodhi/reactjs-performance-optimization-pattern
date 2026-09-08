import { useState } from "react";

const MouseTrackerWithChildren = ({ children }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleOverMouse(e) {
        setPosition({ x: e.clientX, y: e.clientY });
    }

    return (
        <div
            className="border min-h-75 flex-col gap-8 flex justify-center items-center m-8"
            onMouseMove={handleOverMouse}
        >
            <p>Mouse tracker position with children</p>
            {children(position)}

        </div>
    )
}

export default MouseTrackerWithChildren;