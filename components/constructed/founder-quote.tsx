"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { RainbowButton } from "../ui/rainbow-button";
import { Spotlight } from "../ui/spotlight-new";
import { TextAnimate } from "../ui/text-animate";
import ScrollViewTrigger from "../custom/scrollview-trigger";
import { useRouter } from "next/navigation";

const FounderQoute = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const router = useRouter()
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1, 0], [100, -300, 100]);
    const textY = useTransform(scrollYProgress, [0, 1, 0], [50, -50, 50]);

    return (
        <section
            ref={sectionRef}
            className="relative pb-30 max-w-screen z-0"
        >
            <ScrollViewTrigger>
                <div className="container mx-auto pl-5 z-10000 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-15 items-center">
                        <motion.div
                            style={{ y: imageY }}
                            className="relative col-span-2"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative z-10"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={'/assets/founder_3.png'}
                                        alt="Founder portrait"
                                        className="w-full h-full max-h-[90vh] max-w-md lg:max-w-lg mx-auto lg:mx-0 rounded-sm object-contain"
                                    />
                                    {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" /> */}
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            style={{ y: textY }}
                            className="space-y-8 col-span-3 relative"
                        >
                            <Spotlight />
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-primary">
                                Our Foucs
                            </motion.h2>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="font-display text-4xl md:text-5xl text-foreground leading-[1.2] tracking-tight relative"
                            >
                                <TextAnimate key={`${textY}`} animation="slideUp" by="word">I believe better systems create better lives. That belief has shaped my journey, from my hardware service to tech innovation.</TextAnimate>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="text-muted-foreground text-lg leading-relaxed pl-2 md:pl-20 lg:pl-50"
                            >
                                Behind every project is a promise—to deliver work we’re proud of and results our clients can trust. That commitment continues to guide Wellcode Studio every day.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <RainbowButton onClick={e => router.push("/about")} className="">
                                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                                    Learn more
                                </RainbowButton>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </ScrollViewTrigger>
            <div className="w-full absolute bottom-[-250px] h-100 z-0" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 55%, rgb(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)' }}></div>
            <div className="w-full absolute top-[-100px] h-50 z-10" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 55%, rgb(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)' }}></div>
        </section>
    )
}

export default FounderQoute