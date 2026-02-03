"use client";

import { PropsWithChildren, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

type Props = PropsWithChildren<{ className?: string }>;

export default function ScrollSmoothWrapper({ children }: Props) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const smootherRef = useRef<ScrollSmoother | null>(null);
    const pathname = usePathname()

    // useLayoutEffect(() => {
    //     const smoother = ScrollSmoother.create({
    //         wrapper: wrapperRef.current!,
    //         content: contentRef.current!,
    //         smooth: 1,
    //         effects: false,
    //     });

    //     smootherRef.current = smoother

    //     return () => {
    //         smootherRef.current?.kill();
    //         smootherRef.current = null;
    //     };
    // }, []);

    useEffect(() => {
        // Reset scroll to top on route change
        if (!window.location.hash) {
            if (smootherRef.current) {
                smootherRef.current.scrollTop(0);
            } else {
                window.scrollTo(0, 0);
            }
        }
    }, [pathname]);



    useLayoutEffect(() => {
        ScrollTrigger.refresh()
    }, []);

    return (
        <main ref={wrapperRef} id="smooth-wrapper" className="max-w-screen overflow-x-clip">
            <div ref={contentRef} id="smooth-content">
                {children}
            </div>
        </main>
    );
}