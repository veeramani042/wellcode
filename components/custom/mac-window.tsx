import { PropsWithChildren } from "react";

const MacWindow = ({ children }: PropsWithChildren<{}>) => {
    const topBarHeight = 56;
    const viewWidth = 700;
    const viewHeight = 520;

    return (
        <svg
            viewBox={`0 0 ${viewWidth} ${viewHeight}`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"   // 👈 keeps aspect ratio centered
            style={{
                width: "100%",          // responsive width
                height: "auto",         // scale height automatically
                borderRadius: 16,
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                display: "block",
            }}
        >
            {/* Window background */}
            <rect
                x="0"
                y="0"
                width={viewWidth}
                height={viewHeight}
                rx="16"
                ry="16"
                fill="#191919ff"
            />

            {/* Full-bleed content */}
            <foreignObject
                x="0"
                y={topBarHeight}
                width={viewWidth}
                height={viewHeight - topBarHeight}
            >
                {children}
            </foreignObject>

            {/* Top title bar */}
            <path
                d="M0 20 Q0 0 20 0 H680 Q700 0 700 20 V56 H0 Z"
                fill="#191919ff"
            />

            {/* Traffic lights */}
            <circle cx="24" cy="28" r="6" fill="#ff5f57" />
            <circle cx="44" cy="28" r="6" fill="#febc2e" />
            <circle cx="64" cy="28" r="6" fill="#28c840" />
        </svg>
    );
};

export default MacWindow;
