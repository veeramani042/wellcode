"use client"
import React, { forwardRef } from "react";

import { useEffect, useState } from "react";

type Options = {
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
};

export function useTypingPlaceholder(
    placeholders: string[],
    {
        typingSpeed = 60,
        deletingSpeed = 40,
        pauseTime = 1200,
    }: Options = {}
) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!placeholders.length) return;

        const current = placeholders[index];
        let timeout: number;

        if (!deleting && charIndex < current.length) {
            timeout = window.setTimeout(() => {
                setText(current.slice(0, charIndex + 1));
                setCharIndex((i) => i + 1);
            }, typingSpeed);
        } else if (deleting && charIndex > 0) {
            timeout = window.setTimeout(() => {
                setText(current.slice(0, charIndex - 1));
                setCharIndex((i) => i - 1);
            }, deletingSpeed);
        } else {
            timeout = window.setTimeout(() => {
                setDeleting((d) => !d);
                if (deleting) {
                    setIndex((i) => (i + 1) % placeholders.length);
                }
            }, pauseTime);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, index, placeholders, typingSpeed, deletingSpeed, pauseTime]);

    return text;
}

type AnimatedPlaceholderInputProps = React.ComponentProps<"input"> & {
    animatedPlaceholder?: string[];
};

const AnimatedPlaceholderInput = forwardRef<HTMLInputElement, AnimatedPlaceholderInputProps>(
    ({ animatedPlaceholder, ...props }, ref) => {
        const texts = useTypingPlaceholder(animatedPlaceholder ? animatedPlaceholder : ["Search.."])
        return <input ref={ref} placeholder={texts} {...props} />;
    }
);

export default AnimatedPlaceholderInput;
