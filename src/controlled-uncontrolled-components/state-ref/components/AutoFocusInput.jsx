import { useEffect, useRef } from "react";

const AutoFocusInput = () => {

    const inoutRef = useRef(null);

    useEffect(() => {
        inoutRef.current.focus(); // directly access dom
    }, []);

    return (
        <div className="flex justify-center items-center h-screen flex-col gap-8">

            <input
                className="border rounded-2xl p-2 my-3"
                type="text"
                ref={inoutRef}
                placeholder="Type here..."
            />
        </div>
    )
}

export default AutoFocusInput;