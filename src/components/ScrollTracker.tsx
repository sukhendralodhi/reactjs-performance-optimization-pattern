import { useEffect, useState } from "react";
import { useThrottle } from "../utils/useThrottle";

function ScrollTracker() {
    // Actual scroll position - changes frequently
    const [scrollY, setScrollY] = useState(0);

    // Throttled scroll position - updates at most every 3000ms
    const throttledScrollY = useThrottle(scrollY, 3000);

    useEffect(() => {
        const handleScroll = () => {
            // This can update many times per second
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <div
                style={{
                    position: "fixed",
                    top: "20px",
                    left: "20px",
                    background: "white",
                    padding: "20px",
                    border: "1px solid black",
                    zIndex: 1
                }}
            >
                <h2>Throttling Example</h2>

                <p>
                    Actual Scroll Position: <strong>{scrollY}</strong>
                </p>

                <p>
                    Throttled Scroll Position:{" "}
                    <strong>{throttledScrollY}</strong>
                </p>

                <p>Throttle delay: 1000ms</p>
            </div>

            <div style={{ paddingTop: "180px" }}>
                {Array.from({ length: 100 }).map((_, index) => (
                    <div
                        key={index}
                        style={{
                            height: "100px",
                            borderBottom: "1px solid gray",
                            padding: "20px"
                        }}
                    >
                        Product {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScrollTracker;