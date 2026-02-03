"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import ScrollViewTrigger from "../custom/scrollview-trigger";
import { AuroraText } from "../ui/aurora-text";
import ClipWrapper from "../ui/clip-path-image";

const works = [
    "https://outsource-infotech.com/wp-content/uploads/2023/12/8.webp",
    "https://outsource-infotech.com/wp-content/uploads/2023/12/DSC07718.webp",
    "https://outsource-infotech.com/wp-content/uploads/2023/12/DSC07567.webp",
    "https://primeophoto.com/wp-content/uploads/2023/10/item-removal.webp",
    "https://primeophoto.com/wp-content/uploads/2023/10/097A9471a.webp",
    "https://primeophoto.com/wp-content/uploads/2023/10/DJI_0604a.webp",
    "https://primeophoto.com/wp-content/uploads/2023/10/Drone-043a.webp",
]

type Props = {}

const OurWoks = (props: Props) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const container = containerRef.current;
        const content = contentRef.current;

        if (!container || !content) return;

        // Horizontal scroll animation
        gsap.to(content, {
            x: () => `-${content.scrollWidth - container.offsetWidth}px`,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${content.scrollWidth - container.offsetWidth}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
            },
        });
    }, []);


    return (
        <section className="relative z-1 pt-30">
            <ScrollViewTrigger >
                <div
                    ref={containerRef}
                    className={cn("relative w-full overflow-hidden flex flex-col items-center h-screen")}
                >
                    <div className="px-8 mt-50 mb-10">
                        <h4 className="block text-4xl mb-5 md:text-5xl lg:text-7xl">
                            Real estate
                            <AuroraText className="ml-2"> services & features</AuroraText>
                        </h4>
                        <p className="text-sm max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                            From Image generation to video generation, Everything AI has APIs for
                            literally everything. It can even create this website copy for you.
                        </p>
                    </div>
                    <div
                        ref={contentRef}
                        className={cn("flex gap-10 p-6")}
                        style={{ width: "max-content" }}
                    >
                        {
                            works.map((work, i) => {
                                return <ClipWrapper
                                    index={i}
                                    total={works.length}
                                    key={work}
                                    className="h-100 w-94"
                                    media={{ clipId: "clip-bush", src: work, type: "image", alt: work }}
                                />
                            })
                        }
                    </div>
                </div>
            </ScrollViewTrigger>
        </section>
    )
}

export default OurWoks