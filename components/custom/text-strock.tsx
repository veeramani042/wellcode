"use client";
import React, { useRef } from "react";
import { motion } from "motion/react";

interface TextStrokeEffectProps {
    text: string;
    duration?: number;
    automatic?: boolean;
    className?: string; // 👈 allow passing Tailwind classes
}

const TextStrokeEffect = ({
    text,
    duration,
    className,
}: TextStrokeEffectProps) => {
    const svgRef = useRef<SVGSVGElement>(null);

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox="0 0 600 200"   // 👈 bigger box
            xmlns="http://www.w3.org/2000/svg"
            className="select-none"
        >

            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.3"
                className={`fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-400 ${className ?? "text-7xl"}`}
                style={{ opacity: 1 }}
            >
                {text}
            </text>
        </svg>
    );
};

export default TextStrokeEffect;
