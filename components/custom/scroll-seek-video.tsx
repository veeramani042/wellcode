"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealItem = {
    id: string | number;
    content: React.ReactNode;
    start?: number;
    end?: number;
};

type Props = {
    videoSrc?: string;
    poster?: string;
    scrubHeight?: number;
    texts?: RevealItem[];
    className?: string;
};

export default function ScrollSeekHero({
    videoSrc = "https://www.pexels.com/download/video/1350205/",
    poster,
    scrubHeight = 2500,
    texts = [],
    className = "",
}: Props) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [progress, setProgress] = useState(0);

    // FIXED: Proper scroll calculation using getBoundingClientRect
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const onScroll = () => {
            const rect = container.getBoundingClientRect();
            const scrollOffset = window.innerHeight / 2; // Trigger from middle of viewport
            const rawProgress = (scrollOffset - rect.top) / scrubHeight;
            setProgress(Math.min(1, Math.max(0, rawProgress)));
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // Initial call

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrubHeight]);

    // Generate auto ranges if not provided
    const ranges = React.useMemo(() => {
        const n = texts.length;
        return texts.map((t, i) => {
            if (t.start != null && t.end != null) return { start: t.start, end: t.end };
            const step = 1 / n;
            return { start: i * step, end: (i + 1) * step };
        });
    }, [texts]);

    // Scrubbing → update video frame
    useEffect(() => {
        const vid = videoRef.current;
        if (!vid || !vid.duration) return;

        const targetTime = progress * vid.duration;
        if (Math.abs(vid.currentTime - targetTime) > 0.02) {
            vid.currentTime = targetTime;
        }
    }, [progress]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full ${className}`}
            style={{ height: `${scrubHeight}px` }} // Use px for reliability
        >
            {/* Sticky video wrapper */}
            <div className="sticky top-0 h-screen w-full">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    poster={poster}
                    className="w-full h-screen object-cover"
                    muted
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    disableRemotePlayback
                />

                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-full max-w-4xl mx-auto px-4 space-y-8 text-center">
                        {texts.map((t, i) => {
                            const { start, end } = ranges[i];
                            const local = progress <= start
                                ? 0
                                : progress >= end
                                ? 1
                                : (progress - start) / (end - start);

                            return (
                                <motion.div
                                    key={t.id}
                                    style={{ opacity: local, y: `${25 - local * 25}px` }}
                                    className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl backdrop-blur-sm bg-black/20 rounded-2xl p-8 mx-4"
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    {t.content}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
