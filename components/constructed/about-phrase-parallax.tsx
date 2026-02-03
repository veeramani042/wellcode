'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuroraText } from "../ui/aurora-text";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const IMG_URL = "/assets/images/image09.jpg";
const VID_URL = "/assets/videos/home.mp4";

export default function AboutPhraseParallax({ className }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Background scale + fade
        gsap.to(".bg-media", {
            scale: 0.8,
            y: -50,
            opacity: 0.8,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                anticipatePin: 1
            },
        });

        // Overlay text parallax
        gsap.fromTo(
            ".overlay-text",
            { y: 150, opacity: 0 },
            {
                y: -150,
                opacity: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    anticipatePin: 1
                },
            }
        );
    }, []);

    return (
        <section ref={containerRef} className={cn("relative z-1 bg-black", className)}>
            <div className="sticky z-0 overflow-hidden bg-black rounded-2xl sm:rounded-3xl -mt-4 sm:-mt-8 
                      h-[50vh] sm:h-[60vh] lg:h-[80vh] bg-media">
                <video
                    src={VID_URL}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    poster={IMG_URL}
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="absolute left-0 top-0 flex h-[40vh] sm:h-[50vh] lg:h-[60vh] 
                      w-full flex-col items-center justify-center text-white overlay-text">
                <div className="px-4 sm:px-8 mt-20 sm:mt-40">
                    <h1 className="text-xl sm:text-3xl lg:text-6xl lg:leading-tight 
                         max-w-5xl mx-auto text-center tracking-tight font-medium 
                         text-black dark:text-white">
                        One Partner for Creative
                        <AuroraText className="ml-2"> Digital & Software Solutions</AuroraText>
                    </h1>
                    <p className="text-sm sm:text-base max-w-xl sm:max-w-2xl my-4 mx-auto 
                        text-center font-normal dark:text-neutral-200">
                        Wellcode Studio is a one-stop service partner delivering professional real estate photo editing, advanced image retouching, creative design, and custom software development. We help businesses scale faster with high-quality visuals, smart digital products, and conversion-focused solutions.
                    </p>
                </div>
            </div>
        </section>
    );
}
