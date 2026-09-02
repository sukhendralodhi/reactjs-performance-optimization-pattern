import { useEffect, useRef, useState } from "react";

export function useThrottle<T>(value: T, delay: number = 300): T {
    const [throttledValue, setThrottledValue] = useState<T>(value);

    const lastExecuted = useRef<number>(Date.now());

    useEffect(() => {
        const remainingTime =
            delay - (Date.now() - lastExecuted.current);

        const handler = setTimeout(() => {
            const now = Date.now();

            if (now - lastExecuted.current >= delay) {
                setThrottledValue(value);
                lastExecuted.current = now;
            }
        }, Math.max(0, remainingTime));

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return throttledValue;
}