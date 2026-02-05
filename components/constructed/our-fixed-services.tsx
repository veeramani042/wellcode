"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuroraText } from "../ui/aurora-text";
import { ArrowRight } from "lucide-react";
import { RainbowButton } from "../ui/rainbow-button";
import { MotionDiv } from "../motion/motion-client";

gsap.registerPlugin(ScrollTrigger);

const items = [
    {
        tag: "",
        title: "Professional Real Estate Photo Editing Services",
        description:
            "Well Code Studio provides professional real estate photo editing that makes properties bright, polished, and market-ready. From HDR blending and sky replacement to virtual staging and MLS-compliant edits, we help listings stand out and sell faster.",
        slug: "real-estate-sector",
        image: "/assets/images/service-images/day-to-dusk/day_to_dusk_after_1.avif",
    },
    {
        tag: "",
        title: "Advanced Image Editing & Retouching Services",
        description:
            "Our expert image editing and retouching deliver polished, consistent visuals. From background removal to color correction and enhancement, every edit is optimized for clarity, performance, and brand impact.",
        slug: "commercial-sector",
        image: "/assets/images/service-images/day-to-dusk/day_to_dusk_after_2.avif",
    },
    {
        tag: "",
        title: "Custom Software & Digital Product Development Services",
        description:
            "Well Code Studio delivers custom software and digital products tailored to your business. From web and mobile apps to scalable SaaS solutions, we build secure, high-performance platforms that grow with you.",
        slug: "tech-sector",
        image: "/assets/images/service-images/day-to-dusk/day_to_dusk_after_3.avif",
    },
    {
        tag: "",
        title: "Creative Design & Visual Content Services",
        description:
            "Our creative design services help brands communicate clearly across all channels. From marketing assets to digital visuals and campaigns, we blend strategy and creativity to drive engagement and conversions.",
        slug: "creative-sector",
        image: "/assets/images/service-images/real-estate-image-editing/real_estate_image-editing_01.avif", 
    },
];

export default function OurFixedServices() {
    const container = useRef<HTMLDivElement | null>(null);
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = sectionsRef.current;
            if (!sections.length) return;

            const isMobile = window.matchMedia("(max-width: 768px)").matches;

            // Hide all sections except first
            gsap.set(sections, { autoAlpha: 0 });
            gsap.set(sections[0], { autoAlpha: 1 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=" + items.length * (isMobile ? 400 : 650),
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    snap: {
                        snapTo: 1 / (items.length - 1),
                        duration: 0.5,
                        ease: "power2.out",
                    },
                },
            });

            sections.forEach((section, i) => {
                if (i === sections.length - 1) return;

                // Smooth overlap: fade next in while current fades out
                tl.to(
                    section,
                    { autoAlpha: 0, duration: 0.6, ease: "power2.out" },
                    ">0.2" // start fade-out slightly after fade-in starts
                );
                tl.to(
                    sections[i + 1],
                    { autoAlpha: 1, duration: 0.6, ease: "power2.out" },
                    "<" // overlap with previous fade-out
                );
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={container}
            className="h-screen w-full relative overflow-hidden bg-black text-white"
        >
            {items.map((item, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        sectionsRef.current[i] = el;
                    }}
                    className="absolute inset-0 flex items-center justify-center px-4"
                >
                    <div className="text-center max-w-5xl mx-auto">
                        <h2 className="tracking-tight mb-6 text-4xl sm:text-5xl 2xl:text-7xl cs-home-title">
                            <AuroraText>{item.title}</AuroraText>
                        </h2>

                        <MotionDiv className="w-full h-[250px] md:h-[300px] 2xl:h-[400px] bg-[#090909] rounded-3xl cs-home-bg-image">
                            <div
                                className="w-full h-full bg-cover bg-center rounded-3xl"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                        </MotionDiv>

                        <p className="max-w-5xl mx-auto text-base sm:text-lg text-neutral-300 mb-8 mt-6">
                            {item.description}
                        </p>

                        <RainbowButton
                            link={`/services/#${item.slug}`}
                            className="flex gap-2 py-4 px-6 sm:py-5 sm:px-8 lg:py-6 lg:px-10 text-neutral-700 text-lg font-semibold rounded-3xl w-fit mx-auto"
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
