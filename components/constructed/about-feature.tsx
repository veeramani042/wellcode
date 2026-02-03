"use client"

import { cn } from "@/lib/utils"
import { AuroraText } from "../ui/aurora-text"
import { motion, } from "framer-motion";
import type { Variants } from "framer-motion";
import { Star } from "lucide-react";

const aboutCards = [
    {
        "id": 1,
        "title": "Real Estate Image Excellence",
        "subtitle": "We enhance real estate visuals with precision—HDR blending, day-to-dusk, virtual staging, floor plans, and image decluttering—helping properties sell faster and stand stronger online.",
        "className": "col-span-5 md:col-span-3 bg-[url(https://images.unsplash.com/photo-1760888102496-8ed280c9fc62?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
    },
    {
        "id": 2,
        "title": "Creative Image Editing",
        "subtitle": "From product and fashion retouching to high-end photo manipulation, we transform raw images into polished visuals that elevate brand perception and customer trust.",
        "className": "col-span-5 md:col-span-2 bg-[url(https://images.unsplash.com/photo-1708559348128-3cde89847e2b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
    },
    {
        "id": 3,
        "title": "Apps & Digital Solutions",
        "subtitle": "We design and develop scalable SaaS platforms, web applications, and mobile apps that improve efficiency, user experience, and business performance.",
        "className": "col-span-5 md:col-span-2 bg-[url(https://images.unsplash.com/photo-1754806424644-091920f33989?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
    },
    {
        "id": 4,
        "title": "AI-Powered Branding & Creative Innovation",
        "subtitle": "We strategically combine AI-assisted workflows with human creativity to elevate branding, UI design, and marketing visuals. This ensures faster execution, consistent quality, and conversion-focused creative solutions across digital platforms.",
        "className": "col-span-5 md:col-span-3 bg-[url(https://images.unsplash.com/photo-1752606402425-fa8ed3166a91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
    }
]

export type AboutCard = {
    index?: number;
    id: number;
    title: string;
    subtitle: string;
    className: string;
};

const GlassCard = (props: AboutCard) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: (props?.index || 0) % 2 == 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={cn(
                "relative overflow-hidden rounded-3xl backdrop-blur-3xl py-8 px-10 text-center h-full",
                "bg-black/40 bg-blend-soft-light bg-center bg-cover",
                "border border-white/10 shadow-lg",
                props.className
            )}
        >
            {/* Content */}
            <div className="mt-6 min-h-[200px] flex flex-col justify-end relative z-10">
                <h4 className="text-2xl mb-2 font-medium tracking-wide">
                    {props.title}
                </h4>
                <p className="text-sm font-light max-w-xl mx-auto text-foreground/70">
                    {props.subtitle}
                </p>
            </div>

            {/* Bottom shadow fade */}
            <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2
        bg-linear-to-t from-black/60 via-black/20 to-transparent"
            />

            {/* Inner glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </motion.div>
    );
};


const AboutFeautres = () => {
    return (
        <>
            <section className="relative px-2 bg-[url(https://images.unsplash.com/photo-1762081512133-30202f928bb9)] bg-center bg-cover bg-black/90 bg-blend-soft-light pt-10 md:pt-20">
                <div className="absolute -top-60 left-0 right-0 h-60
  bg-linear-to-b from-transparent via-black/40 to-black" />

                <div className="max-w-7xl mx-auto py-10 md:py-40 relative">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: -50 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl leading-tight flex items-center gap-6 flex-wrap justify-center">
                            {/* About <Star fill="currentColor" /> <AuroraText>Wellcode Studio</AuroraText> */}
                            A Digital Partner Built for Growth
                        </h2>
                        <p className="text-lg max-w-4xl mx-auto mt-4 text-gray-100/50 font-light">
                            Well Code Studio helps brands grow through creative excellence, smart technology, and scalable digital solutions. We turn ideas into visuals, platforms, and systems that perform—reliably, efficiently, and on time.
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid grid-cols-5 gap-6 relative">
                        {aboutCards.map((card, i) => (
                            <GlassCard key={card.id} {...card} index={i} />
                        ))}
                    </div>

                    {/* Ambient glow */}
                    {/* <div className="absolute -inset-12 z-0 pointer-events-none
          bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 blur-3xl" /> */}
                </div>
                <div className="absolute -inset-12 z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/10 via-transparent to-[#a855f7]/10 blur-3xl" />
                <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/25 via-transparent to-[#a855f7]/25 blur-3xl" />
            </section>
        </>
    );
};

export default AboutFeautres;