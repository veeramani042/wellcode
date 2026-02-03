"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuroraText } from "../ui/aurora-text";
import { ArrowRight } from "lucide-react";
import { RainbowButton } from "../ui/rainbow-button";
import { servicesData } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MotionDiv } from "../motion/motion-client";

gsap.registerPlugin(ScrollTrigger);

const items = [
    {
        tag: "",
        title: "Professional Real Estate Photo Editing Services",
        description: "At Well Code Studio, we deliver professional real estate photo editing services that help properties look clean, bright, and market-ready. From HDR blending and sky replacement to virtual staging and MLS-compliant edits, our work enhances visual appeal and buyer trust. We help realtors, photographers, and agencies showcase properties that sell faster and stand out online.",
        slug: "real-estate-sector",
        image: '/assets/images/service-images/day-to-dusk/day_to_dusk_after_1.avif'
    },
    {
        tag: "",
        title: "Advanced Image Editing & Retouching Services",
        description: "Our advanced image editing and retouching services help businesses achieve polished, professional visuals across digital platforms. We handle background removal, object cleanup, color correction, and image enhancement with precision and consistency. Every edit is optimized for brand presentation, clarity, and performance.",
        slug: "commercial-sector",
        image: '/assets/images/service-images/day-to-dusk/day_to_dusk_after_2.avif'
    },
    {
        tag: "",
        title: "Custom Software & Digital Product Development Services",
        description: "Well Code Studio provides custom software and digital product development services tailored to business needs. From web and mobile applications to scalable SaaS products, we build secure, high-performance solutions that support growth. Our human-led development approach ensures functionality, usability, and long-term scalability.",
        slug: "tech-sector",
        image: '/assets/images/service-images/day-to-dusk/day_to_dusk_after_3.avif'
    },
    {
        tag: "",
        title: "Creative Design & Visual Content Services",
        description: "Our creative design and visual content services help brands communicate clearly and visually across all channels. From brand creatives and marketing assets to digital visuals and campaign designs, we combine strategy with creativity. Every design is crafted to engage audiences, strengthen brand identity, and support conversions.",
        slug: "creative-sector",
        image: '/assets/images/service-images/day-to-dusk/day_to_dusk_after_4.avif'
    },
]

export default function OurFixedServices() {
    const container = useRef<HTMLDivElement | null>(null);
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
    const isMobile = useMediaQuery("(max-width: 768px)")

    useEffect(() => {
        const ctx = gsap.context(() => {
            const els = sectionsRef.current;
            if (!els.length) return;

            gsap.set(els.slice(1), { autoAlpha: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: () => "+=" + items.length * (isMobile ? 200 : 400), // responsive scroll length
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    snap: {
                        snapTo: (progress) => {
                            const snapPoints = items.map((_, i) => i / (items.length - 1));
                            return gsap.utils.snap(snapPoints, progress);
                        },
                        duration: 0.4,
                        ease: "power1.inOut",
                    },
                },
            });

            els.forEach((sec, i) => {
                if (i === els.length - 1) return;
                const next = els[i + 1];

                tl.to(sec, {
                    autoAlpha: 0,
                    duration: 0.6,
                    ease: "power1.out",
                }).fromTo(
                    next,
                    { autoAlpha: 0 },
                    { autoAlpha: 1, duration: 0.6, ease: "power1.in" },
                    "<"
                );
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={container}
            className="h-screen w-full relative overflow-hidden bg-black text-white">
            {items.map((item, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) sectionsRef.current[i] = el;
                    }}
                    className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="text-center max-w-5xl mx-auto">
                        {/* Responsive Title */}
                        <h2 className="tracking-tight mb-6 text-4xl sm:text-5xl lg:text-7xl mb:4">
                            <AuroraText>{item.title}</AuroraText>
                        </h2>

                        <MotionDiv
                            className={`w-[300px] h-[317px] w-full md:h-[325px] 2xl:h-[450px] bg-[#090909] rounded-3xl z-0`}>
                            <div className="relative w-full h-full bg-cover bg-center rounded-3xl" style={{ backgroundImage: `url(${item.image})` }} />
                        </MotionDiv>

                        {/* Responsive Subtitle */}
                        <p className="max-w-5xl mx-auto text-base sm:text-lg lg:text-lg text-neutral-300 mb-8 mt-6">
                            {item.description}
                        </p>

                        {/* CTA Button */}
                        <RainbowButton
                            link={"/services/#" + item.slug}
                            className="flex gap-2 py-4 px-6 sm:py-5 sm:px-8 lg:py-6 lg:px-10 
                         text-neutral-700 text-base sm:text-lg lg:text-xl font-semibold rounded-3xl w-fit mx-auto"
                        >
                            Discover
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </RainbowButton>
                    </div>
                </div>
            ))}
        </div>
    );
}
