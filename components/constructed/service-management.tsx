"use client"
import React, { useRef } from "react";
import { AuroraText } from "../ui/aurora-text";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedBeam } from "../ui/animated-beam";
import { BookCheck, Brain, ClockCheck, Siren, Sparkles, Spline, Telescope, UserStar } from "lucide-react";

const leftSide = [
    { title: "Access to Skilled Experts", body: "Work with trained professionals across creative, technical, and digital domains—without hiring overhead.", icon: <Brain /> },
    { title: "Scalability & Flexibility", body: "Easily scale projects up or down based on your business needs and timelines.", icon: <Spline /> },
    { title: "Focus on Your Business", body: "We handle execution while you focus on growth, strategy, and customers.", icon: <Telescope /> },
    { title: "Risk Mitigation", body: "Structured workflows, backups, and quality checks reduce errors and ensure consistency.", icon: <Siren /> },
];

const rightSide = [
    { title: "24/7 Availability", body: "Global delivery models ensure support and execution whenever you need it.", icon: <UserStar /> },
    { title: "High-Quality Outcomes", body: "Every project goes through dedicated quality control before delivery.", icon: <Sparkles /> },
    { title: "Time Management", body: "Fast turnaround times without compromising precision or standards.", icon: <ClockCheck /> },
    { title: "Multiple Corrections", body: "We refine until it’s right—your satisfaction is part of our process.", icon: <BookCheck /> },
];

export default function ServiceManagement() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const targetRefs = Array.from({ length: 8 }, () => useRef<HTMLDivElement>(null))
    const sourceRef = useRef<HTMLDivElement>(null)

    return (
        <section className="relative bg-black pt-20 px-2 pb-25">
            <div className="absolute -inset-12 z-10 pointer-events-none bg-gradient-to-br from-[#a855f7]/5 via-transparent to-[#3b82f6]/5 blur-3xl" />
            <div className="absolute -inset-12 z-10 pointer-events-none bg-gradient-to-br from-[#a855f7]/10 via-transparent to-[#3b82f6]/10 blur-3xl" />
            <div className="max-w-7xl mx-auto gap-10 md:gap-16 items-center">
                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: [80, -10, 0], opacity: 1 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        bounce: 0.4,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center"
                >
                    <AuroraText className="block text-4xl mb-5 md:text-5xl lg:text-8xl">
                        Benefits & Commitments
                    </AuroraText>

                    <p className="text-lg text-white/80 max-w-5xl mx-auto mb-20">
                        We’re committed to delivering more than services—we deliver reliability, flexibility, and results. Our benefits are designed to reduce your workload, enhance quality, and give you the confidence to scale while we handle execution with precision.
                    </p>
                </motion.div>
                <div ref={containerRef} className="relative">
                    <div className="relative mt-20 grid grid-cols-1 md:grid-cols-[40%_20%_40%] gap-6">
                        <ul className="mt-6  space-y-5 md:space-y-10">
                            {leftSide.map((item, i) => (
                                <motion.li
                                    key={item.title}
                                    initial={{ opacity: 0, y: 50 }} // start below + slight left/right
                                    animate={{ opacity: 1, y: 0 }} // animate to normal position
                                    transition={{
                                        duration: 0.6,
                                        delay: i * 0.15, // staggered delay
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 20,
                                    }}
                                    className="relative border-r-2 p-6 shadow-lg align-middle hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* Connector marker */}
                                    <div
                                        ref={targetRefs[i]}
                                        className="h-4 w-1 bg-white/50 rounded-full absolute -right-1 top-1/2 -translate-y-1/2"
                                    ></div>

                                    <div className="flex items-start gap-x-4">
                                        <span className="inline-flex h-12 w-12 min-w-12 items-center justify-center rounded-full text-white shadow-md ring-1 ring-inset ring-teal-400/10">
                                            {item.icon}
                                        </span>
                                        <div>
                                            <p className="text-lg font-semibold text-white tracking-wide">
                                                {item.title}
                                            </p>
                                            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                                {item.body}
                                            </p>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="h-full hidden md:flex justify-center items-center relative">
                            <AnimatePresence >
                                <motion.span
                                    initial={{ opacity: 0 }} // start below + slight left/right
                                    animate={{ opacity: 1 }} // animate to normal position
                                    transition={{
                                        duration: 0.6,
                                        delay: 8 * 0.15, // staggered delay
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 20,
                                    }}
                                    ref={sourceRef}
                                    className="relative z-1 flex items-center bg-neutral-900 justify-center h-30 w-30 rounded-full"
                                >
                                    {/* Gradient aura behind logo */}
                                    <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-900 via-orange-600 to-cyan-500 blur-3xl opacity-40" />
                                    <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-900 via-orange-600 to-cyan-500 blur-3xl opacity-40" />
                                    <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-900 via-orange-600 to-cyan-500 blur-3xl opacity-40" />
                                    <img src="./wcs_logo.png" className="h-12 relative z-10" alt="WCS Logo" />
                                </motion.span>
                            </AnimatePresence>
                        </div>
                        <ul className="mt-6 space-y-5 md:space-y-10">
                            {rightSide.map((item, i) => (
                                <motion.li
                                    key={item.title}
                                    initial={{ opacity: 0, y: 50 }} // start below + slight left/right
                                    animate={{ opacity: 1, y: 0 }} // animate to normal position
                                    transition={{
                                        duration: 0.6,
                                        delay: i * 0.15, // staggered delay
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 20,
                                    }}
                                    className="relative border-l-2 p-6 shadow-lg align-middle hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* Connector marker */}
                                    <div
                                        ref={targetRefs[i + 4]}
                                        className="h-4 w-1 bg-white/50 rounded-full absolute -left-1 top-1/2 -translate-y-1/2"
                                    ></div>

                                    <div className="flex items-start md:flex-row-reverse gap-x-4">
                                        {/* Icon container */}
                                        <span className="inline-flex h-12 w-12 min-w-12 items-center justify-center rounded-full text-white shadow-md ring-1 ring-inset ring-teal-400/10">
                                            {item.icon}
                                        </span>

                                        <div>
                                            <p className="text-lg font-semibold text-white tracking-wide">
                                                {item.title}
                                            </p>
                                            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                                {item.body}
                                            </p>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // start below + slight left/right
                        animate={{ opacity: 1, y: 0 }} // animate to normal position
                        transition={{
                            duration: 0.6,
                            delay: 8 * 0.15, // staggered delay
                            type: "spring",
                            stiffness: 80,
                            damping: 20,
                        }}
                        className="hidden md:block"
                    >

                        {
                            Array.from({ length: 8 }).map((beam, i) => (
                                <AnimatedBeam
                                    containerRef={containerRef}
                                    fromRef={sourceRef}
                                    key={i}
                                    gradientStartColor="#f3692d"
                                    gradientStopColor="#27185e"
                                    toRef={targetRefs[i]}
                                    curvature={0}
                                    endYOffset={-50}
                                />
                            ))
                        }
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
