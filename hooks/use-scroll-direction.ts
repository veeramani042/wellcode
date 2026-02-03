"use client";

import { useEffect, useState } from "react";

export function useScrollDirection() {
    const [direction, setDirection] = useState<"up" | "down">("up");

    useEffect(() => {
        if (typeof window === "undefined") return;

        let lastY = window.scrollY;

        const update = () => {
            const currentY = window.scrollY;
            setDirection(currentY > lastY ? "down" : "up");
            lastY = currentY;
        };

        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);

    return direction;
}
