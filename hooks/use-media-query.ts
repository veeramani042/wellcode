import { useState, useEffect } from "react";

/**
 * Custom hook to listen for media query changes
 * @param query - CSS media query string (e.g. "(max-width: 768px)")
 * @returns boolean - true if the query matches, false otherwise
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(() =>
        typeof window !== "undefined" ? window.matchMedia(query).matches : false
    );

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQueryList: MediaQueryList = window.matchMedia(query);

        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        mediaQueryList.addEventListener("change", listener);

        return () => {
            mediaQueryList.removeEventListener("change", listener);
        };
    }, [query]);

    return matches;
}
