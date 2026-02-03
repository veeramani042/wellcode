"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { AuroraText } from "../ui/aurora-text";
import { RainbowButton } from "../ui/rainbow-button";
import { useEffect } from "react";
import { AnimatedCircularProgressBar } from "../ui/circular-progress";

const stats = [
    { label: "Conversion Analysis", value: 95 },
    { label: "Generating Reports", value: 100 },
    { label: "Market Value", value: 95 },
];

function AnimatedCounter({ value }: { value: number }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));

    useEffect(() => {
        animate(count, value, { duration: 1.8, ease: "easeOut" });
    }, [value]);

    return <motion.span>{rounded}</motion.span>;
}

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function StrengthSection() {
    return (
        <section className="relative py-28 px-2 md:px-6">
            {/* Ambient luxury glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-[180px]" />
            </div>

            <div className="max-w-7xl mx-auto space-y-28">

                {/* Header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center space-y-8"
                >
                    <h2 className="text-6xl md:text-8xl">
                        <AuroraText>Our Strength</AuroraText>
                    </h2>

                    <p className="text-lg tracking-widest text-white/60">
                        QUALITY AND TIME MANAGEMENT
                    </p>

                    <p className="max-w-3xl mx-auto text-lg text-white/50 leading-relaxed">
                        Our services provide a wide range of solutions from consulting and project
                        management to software design, development, and support. We help push your
                        business forward through technical expertise, strategic guidance, and
                        operational support.
                    </p>

                    <RainbowButton className="mt-10 px-8 py-5 text-lg rounded-3xl">
                        Contact Us
                    </RainbowButton>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className="relative overflow-hidden rounded-3xl col-span-1 lg:col-span-2 bg-gradient-to-br from-pink-900/80 to-black/50 min-h-[350px] px-6 py-20"
                    >
                        <h3 className="max-w-sm text-3xl font-semibold text-white">
                            Competitive Advantage Through Outsourcing
                        </h3>
                        <p className="mt-4 max-w-sm text-white/60">
                            Outsourcing enables faster growth, sharper focus, and expanded market
                            share — a decisive competitive advantage.
                        </p>

                        <motion.img
                            src="./assets/images/image01.jpg"
                            alt="visual"
                            initial={{ y: 20 }}
                            whileInView={{ y: -10 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="absolute h-auto rounded-tl-3xl w-80 -bottom-10 -right-2 grayscale-50 saturate-50"
                        />
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/80 to-black min-h-[300px] px-6 py-20"
                    >
                        <h3 className="text-3xl font-semibold text-white">
                            Specialized Focus. Superior Results.
                        </h3>
                        <p className="mt-4 text-white/60">
                            By mastering select areas, we deliver consistently higher-quality
                            outcomes without compromise.
                        </p>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative text-center overflow-hidden rounded-3xl col-span-1 lg:col-span-3 bg-gradient-to-br from-blue-950 to-black min-h-[420px] px-6 py-20"
                    >
                        <h3 className="text-3xl font-semibold text-white max-w-sm mx-auto">
                            Performance Metrics.
                        </h3>
                        <p className="mt-4 text-white/60 max-w-lg mx-auto">
                            By mastering select areas, we deliver consistently higher-quality
                            outcomes without compromise.
                        </p>

                        <div className="grid md:grid-cols-3 gap-10 mt-15 text-center">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <motion.div
                                        key={stat.label}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 150 }}
                                        className="relative rounded-3xl p-[1px] mx-auto text-center"
                                    >
                                        <AnimatedCircularProgressBar
                                            value={stat.value}
                                            gaugePrimaryColor="rgb(79 70 229)"
                                            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                                            className="size-30 mx-auto"
                                        />
                                    </motion.div>
                                    <p className="mt-5">{stat.label}</p>
                                    <p className="text-white/50 text-sm max-w-[150px] mx-auto">Lorem ipsum dolor sit ametr sit amet.</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
