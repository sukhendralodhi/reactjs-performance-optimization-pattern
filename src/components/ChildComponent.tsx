import { memo, useRef, useState } from "react";

type ChildComponentProps = {
    onClick: () => void;
}

export const ChildComponent = memo(function ChildComponent({ onClick }: ChildComponentProps) {
    const renders = useRef(0);
    const [clicked, setClicked] = useState(false);

    const handleChildClick = () => {
        setClicked(true);
        onClick();
    }

    renders.current++;

    console.log("Child component rerendred!");

    return (
        <div>
            <h1>Hello, I am the child component:</h1>
            <h3>Renders: {renders.current}</h3>
            <button onClick={handleChildClick}>Click me</button>
            {clicked && <p>Button was clicked!</p>}
        </div>
    );
});