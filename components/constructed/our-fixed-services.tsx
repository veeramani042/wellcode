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
            "Wellcode Studio provides professional real estate photo editing that makes properties bright, polished, and market-ready. From HDR blending and sky replacement to virtual staging and MLS-compliant edits, we help listings stand out and sell faster.",
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
            "Wellcode Studio delivers custom software and digital products tailored to your business. From web and mobile apps to scalable SaaS solutions, we build secure, high-performance platforms that grow with you.",
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

            // Track which section is active to animate between them
            let activeIndex = 0;
            let lastIndex = 0;
            let isAnimating = false;

            const goTo = (index: number) => {
                if (isAnimating || index === activeIndex || index < 0 || index >= sections.length) return;

                isAnimating = true;
                const prev = sections[activeIndex]!;
                const next = sections[index]!;
                const direction = index > activeIndex ? 1 : -1;

                // Slide + fade current section out
                gsap.to(prev, {
                    autoAlpha: 0,
                    y: -30 * direction,
                    duration: 0.45,
                    ease: "power2.in",
                });

                // Slide + fade next section in
                gsap.fromTo(
                    next,
                    { autoAlpha: 0, y: 30 * direction },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.45,
                        ease: "power2.out",
                        delay: 0.1,
                        onComplete: () => {
                            activeIndex = index;
                            isAnimating = false;
                        },
                    }
                );
            };

            const totalScroll = (items.length - 1) * (isMobile ? 500 : 700);

            ScrollTrigger.create({
                trigger: container.current,
                start: "top top",
                end: `+=${totalScroll}`,
                pin: true,
                anticipatePin: 1,
                pinSpacing: true,
                onUpdate: (self) => {
                    const index = Math.round(self.progress * (items.length - 1));
                    if (index === lastIndex) return;
                    lastIndex = index;
                    goTo(index);
                },
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={container}
            className="h-screen w-full relative overflow-hidden bg-black text-white"
            suppressHydrationWarning
        >
            {items.map((item, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        sectionsRef.current[i] = el;
                    }}
                    className="absolute inset-0 flex items-center justify-center px-4"
                    suppressHydrationWarning
                >
                    <div className="text-center max-w-5xl mx-auto">
                        <h2 className="tracking-tight mb-6 text-4xl sm:text-5xl 2xl:text-6xl cs-home-title mt-4">
                            <AuroraText>{item.title}</AuroraText>
                        </h2>

                        <MotionDiv className="w-[100%] sm:w-[90%] mx-auto h-[250px] md:h-[380px] 2xl:h-[400px] bg-[#090909] rounded-3xl cs-home-bg-image">
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
