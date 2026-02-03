"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronsUpDown } from "lucide-react";

interface ImageComparisonSliderProps {
    beforeImage: string;
    afterImage: string;
    alt?: string;
    className?: string;
}

export const ImageComparisonSlider = ({
    beforeImage,
    afterImage,
    alt = "Before/After comparison",
    className = "",
}: ImageComparisonSliderProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [beforeLoaded, setBeforeLoaded] = useState(false);
    const [afterLoaded, setAfterLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percent);
    }, [isDragging]);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current || !e.touches.length) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percent);
    }, [isDragging]);

    return (
        <div
            className={`w-full h-full relative overflow-hidden select-none group ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            onTouchStart={handleMouseDown}
        >
            <div ref={containerRef} className="w-full h-full relative">
                {/* Bottom image (before) - with loading skeleton */}
                <div className="absolute inset-0">
                    {!beforeLoaded ? (
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
                    ) : null}
                    <Image
                        src={afterImage}
                        alt={`${alt} - Before`}
                        fill
                        className={`object-cover transition-opacity duration-300 ${beforeLoaded ? 'opacity-100' : 'opacity-0'}`}
                        draggable={false}
                        priority
                        sizes="100vw"
                        onLoadingComplete={() => setBeforeLoaded(true)}
                    />
                </div>

                {/* Top image (after) - with loading skeleton */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                        WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                    }}
                >
                    {!afterLoaded ? (
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse z-10" />
                    ) : null}
                    <Image
                        src={beforeImage}
                        alt={`${alt} - After`}
                        fill
                        className={`object-cover transition-opacity duration-300 ${afterLoaded ? 'opacity-100' : 'opacity-0'}`}
                        draggable={false}
                        priority
                        sizes="100vw"
                        onLoadingComplete={() => setAfterLoaded(true)}
                    />
                </div>

                {/* Slider handle */}
                <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white/90 cursor-grab active:cursor-grabbing z-20 hover:bg-white shadow-lg"
                    style={{
                        left: `${sliderPosition}%`,
                        transform: `translateX(-50%)`
                    }}
                >
                    <div className="absolute -right-[7px] top-1/2 -translate-y-1/2 flex items-center justify-center hover:scale-110 transition-transform">
                        <div className="h-12 w-4 cursor-grab active:cursor-grabbing rounded-full bg-white shadow-xl flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-gray-700"
                            >
                                <line x1="15" y1="18" x2="9" y2="12" />
                                <line x1="9" y1="6" x2="15" y2="12" />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-full bg-gradient-to-t from-transparent via-white/50 to-transparent" />
                </div>

                {/* Fixed Reset button */}
                <button
                    className="absolute top-4 right-4 z-30 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-gray-800 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    translate-y-2 group-hover:translate-y-0
                    pointer-events-none group-hover:pointer-events-auto"
                    onClick={() => setSliderPosition(50)}
                >
                    ↻ Reset
                </button>
            </div>
        </div>
    );
};
