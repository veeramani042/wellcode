"use client";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AuroraText } from "../ui/aurora-text";
import { TextAnimate } from "../ui/text-animate";
import { RainbowButton } from "../ui/rainbow-button";
import { useMediaQuery } from "@/hooks/use-media-query";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    {
        year: "2021",
        title: "Laying the Foundation",
        subtitle: "We began with a clear purpose—to deliver reliable, high-quality creative and digital solutions. This year shaped our values, workflows, and commitment to long-term partnerships.",
        image: "https://images.unsplash.com/photo-1763411711221-40166c5e20cd?q=80&w=1493&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        year: "2022",
        title: "Crafting Brand Identity",
        subtitle: "We helped brands define how they look, feel, and communicate. Through thoughtful design and visual storytelling, we built identities that inspire trust and recognition.",
        image: "https://images.unsplash.com/photo-1746189267093-cf829e8d2901?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        year: "2023",
        title: "Designing for Conversion",
        subtitle: "Our focus shifted to performance-driven websites and UI redesigns. Every layout, interaction, and flow was built to engage users and turn visits into results.",
        image: "https://images.unsplash.com/photo-1756992293716-b843700b5ab0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        year: "2024",
        title: "Engineering Smart Solutions",
        subtitle: "We expanded into scalable software, SaaS platforms, and intelligent systems. By combining clean code with business logic, we delivered solutions designed to grow with our clients.",
        image: "https://images.unsplash.com/photo-1758314896569-b3639ee707c4?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        year: "2025",
        title: "Experiences in Every Pocket",
        subtitle: "We brought brands closer to users through intuitive, high-performing mobile apps. Built for speed and usability, these experiences keep businesses connected anytime, anywhere.",
        image: "https://images.unsplash.com/photo-1759549567944-bb5923888826?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        year: "2026",
        title: "Scaling Digital Excellence",
        subtitle: "With creative innovation and selective AI integration, we continue to deliver smarter, faster, and future-ready digital solutions across industries—including real estate and creative services.",
        image: "https://images.unsplash.com/photo-1752440284390-26d0527bbb9f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

type TimelineItem = {
    year: string;
    title: string;
    subtitle: string;
    image: string
};

interface SvgTimelineProps {
    progress: number; // 0 → 1
    items: TimelineItem[];
}

export function SvgTimeline({
    progress,
    items,
}: SvgTimelineProps) {
    const columnWidth = 130;

    return (

        <div className="relative w-full py-24 overflow-hidden">
            <svg
                viewBox="0 0 1000 180"   // 👈 CLIPS top & bottom strictly
                className="w-full max-w-7xl mx-auto"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Base center line */}
                <motion.line
                    x1="50"
                    y1="90"
                    x2="950"   // 👈 right endpoint
                    y2="90"
                    strokeWidth="1"
                    className={"stroke-teal-900"}
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "900", strokeDashoffset: 900 }}
                    animate={{ strokeDashoffset: 900 - progress * 900 }}
                    transition={{ ease: "linear" }}
                />

                {/* Progress line */}
                <motion.line
                    x1="50"
                    y1="90"
                    x2="950"   // 👈 right endpoint
                    y2="90"
                    stroke="#ffffff10"
                    strokeWidth="2"
                    strokeLinecap="round"
                    // initial={{ strokeDasharray: "900", strokeDashoffset: 900 }}
                    // animate={{ strokeDashoffset: 900 - progress * 900 }}
                    transition={{ ease: "linear" }}
                />
                {items.map((item, i) => {
                    // ✅ SAFE GUARDS
                    const total = items.length > 1 ? items.length - 1 : 1;

                    // ✅ CALCULATE X POSITION
                    const x = 50 + (900 * i) / total;

                    // ✅ ACTIVE INDEX LOGIC
                    const activeIndex = Math.round(progress * total);
                    const isActive = i === activeIndex;

                    return (
                        <g key={item.year}>
                            {/* Marker */}
                            {
                                item.year &&
                                <circle
                                    cx={x}
                                    cy="90"
                                    r={isActive ? 7 : 6}
                                    className={cn("stroke-teal-900", isActive && "fill-teal-900")}
                                    stroke="#22d3ee"
                                    strokeWidth="2"
                                />
                            }
                            {
                                item.year &&
                                <circle
                                    cx={x}
                                    cy="102"
                                    r="2"
                                    fill="rgba(255,255,255,0.5)"
                                />
                            }

                            {/* Year */}
                            <motion.text
                                x={x}
                                y="55"
                                initial={false}
                                animate={{
                                    opacity: isActive ? 1 : 0.5,
                                    y: isActive ? 0 : 1,
                                    scale: isActive ? 1.1 : 1
                                }}
                                textAnchor="middle"
                                className={cn("fill-white text-xl font-semibold tracking-wide opacity-20", isActive && "opacity-100")}
                            >
                                {item.year}
                            </motion.text>

                            {/* Bottom wrapped text */}
                            <foreignObject
                                x={x - columnWidth / 2}
                                y="120"
                                width={columnWidth}
                                height="60"
                            >
                                <motion.div
                                    initial={false}
                                    animate={{
                                        opacity: isActive ? 1 : 0.5,
                                        y: isActive ? 0 : 2,
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="text-center leading-snug"
                                >
                                    <div className="text-sm text-white">
                                        {item.title}
                                    </div>
                                    {/* <div className="mt-1 text-xs font-extra-light text-white/60">
                                        {item.subtitle}
                                    </div> */}
                                </motion.div>
                            </foreignObject>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}

export default function TimelineAbout() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [timelineProgress, setTimelineProgress] = useState(0);
    const isMobile = useMediaQuery("(max-width: 768px)")

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const section = sectionRef.current;
            const track = trackRef.current;
            if (!section || !track) return;
            const scrollDistance = track.scrollWidth - section.offsetWidth;
            gsap.to(track, {
                x: -scrollDistance - (isMobile ? 0 : 300),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => "+=" + scrollDistance,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    onUpdate: (self) => setTimelineProgress(self.progress),
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [isMobile]);


    return (
        <section className={cn("relative py-25 md:py-30", "relative bg-[url(https://images.unsplash.com/photo-1736843638421-9c3770d28c91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover bg-black/90 bg-blend-soft-light")}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center mb-20"
            >
                <h1 className="text-4xl md:text-6xl lg:text-8xl leading-tight flex items-center gap-2 md:gap-4 flex-wrap justify-center">
                    Our <AuroraText>History</AuroraText>
                </h1>
                <p className="text-lg max-w-3xl mx-auto mt-4 text-gray-100/50 font-light">
                    Well Code Studio began with a simple idea—deliver reliable, high-quality digital solutions without compromise. Starting as a small, skilled team, we grew by focusing on quality, consistency, and client trust. Today, that same mindset drives everything we build.
                </p>
            </motion.div>
            <div ref={sectionRef} className="h-screen relative">
                <div ref={trackRef} className="flex flex-row timeline-track pt-25 md:30 lg:pt-40 relative z-10">
                    {timelineData.map((data, i) => (
                        i === 0 ? <motion.div
                            key={data.title}
                            className={cn("relative px-5 md:px-30 w-screen md:w-5xl lg:w-7xl min-w-screen md:min-w-5xl lg:min-w-7xl h-[300px] box-content", "md:50 lg:pl-80")}
                            initial={{ opacity: 0, y: 300 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <motion.div
                                initial={{ x: 80, opacity: 0 }}
                                whileInView={{ x: [80, -10, 0], opacity: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    bounce: 0.4,
                                }}
                                className="space-y-4 content-end text-muted-foreground text-center mt-10 max-w-[100vw] md:max-w-xl mx-auto"
                            >
                                {/* Main Text */}
                                <div className="text-center max-w-xl">
                                    <p className="text-gray-400 text-xl mb-10">
                                        Wellcode
                                    </p>
                                    <AuroraText className="text-4xl md:text-5xl lg:text-7xl leading-tight mb-4">Milestones That Shaped Us</AuroraText>
                                    <p className="text-gray-300 font-light max-w-lg mx-auto mb-6">
                                        From real estate image excellence to creative design and digital solutions, every project adds to a growing story of trust and long-term partnerships.
                                    </p>
                                    <p className="font-mono text-4xl md:text-6xl lg:text-8xl leading-tight  mb-10">{data.year}</p>
                                    {/* Sponsor Button */}
                                    <RainbowButton className="font-medium py-2 px-6 transition duration-300">
                                        Connect
                                    </RainbowButton>
                                </div>
                            </motion.div>
                        </motion.div> :
                            <motion.div
                                key={data.title}
                                className={"relative px-5 md:px-30 w-screen md:w-5xl lg:w-7xl min-w-screen md:min-w-5xl lg:min-w-7xl box-border md:box-content"}
                                initial={{ opacity: 0, y: 300 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-30">
                                    {/* Left sub-column: numbered list */}
                                    <motion.div
                                        initial={{ y: 80, opacity: 0 }}
                                        whileInView={{ y: [80, -10, 0], opacity: 1 }}
                                        transition={{
                                            duration: 1,
                                            ease: "easeOut",
                                            bounce: 0.4,
                                            delay: .6
                                        }}
                                        className="relative"
                                    >
                                        <img
                                            src={data.image}
                                            alt="Placeholder"
                                            className="w-full h-60 md:h-80 lg:h-100 max-h-100 object-cover rounded-4xl"
                                        />
                                        <img
                                            src={data.image}
                                            alt="Placeholder"
                                            className="w-full h-60 md:h-80 lg:h-100 max-h-100 object-cover rounded-4xl absolute top-10 -right-10 blur-3xl -z-1"
                                        />
                                    </motion.div>
                                    {/* Row 2 */}
                                    <motion.div
                                        initial={{ x: 80, opacity: 0 }}
                                        whileInView={{ x: [80, -10, 0], opacity: 1 }}
                                        transition={{
                                            duration: 1,
                                            ease: "easeOut",
                                            bounce: 0.4,
                                            delay: .3
                                        }}
                                        className="space-y-4 content-end text-muted-foreground"
                                    >
                                        <p className="tracking-wide">{data.year}</p>
                                        <AuroraText className="text-4xl md:text-4xl lg:text-6xl">{data.title}</AuroraText>
                                        <hr className="w-16 border h-0" />
                                        <TextAnimate className="text-lg md:text-xl lg:text-2xl leading-snug">{data.subtitle}</TextAnimate>
                                    </motion.div>
                                </div>
                            </motion.div>
                    ))}
                </div>
                <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/10 via-transparent to-[#a855f7]/10 blur-3xl" />
                <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/10 via-transparent to-[#a855f7]/10 blur-3xl" />
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-[5%] left-[50%] translate-x-[-50%] w-full max-w-5xl mx-auto text-center z-10"
                >
                    <SvgTimeline items={[...timelineData]} progress={timelineProgress} />
                </motion.div>
            </div>
        </section>
    );
}
