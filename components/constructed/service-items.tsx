"use client";

import { AuroraText } from "../ui/aurora-text";
import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn, servicesData } from "@/lib/utils";
import { RainbowButton } from "../ui/rainbow-button";
import { ServiceSection } from "@/lib/model";
import { Birdhouse, Codesandbox, Image, LaptopMinimal, LayoutGrid, LucideIcon } from "lucide-react";

type Props = {}


interface StyleClass {
    card: string;
    shadow: string;
}

interface CardProps {
    item: ServiceSection;
    styleClass: StyleClass;
    index: number;
}

const styles = [
    {
        card: "bg-red-500 border-3 border-red-400",
        shadow: "shadow-[0_20px_50px_-15px_rgba(239,68,68,0.6)]",
    },
    {
        card: "bg-yellow-400  border-3 border-yellow-300",
        shadow: "shadow-[0_20px_50px_-15px_rgba(234,179,8,0.6)]",
    },
    {
        card: "bg-green-500  border-3 border-green-400",
        shadow: "shadow-[0_20px_50px_-15px_rgba(34,197,94,0.6)]",
    },
    {
        card: "bg-sky-500  border-3 border-sky-400",
        shadow: "shadow-[0_20px_50px_-15px_rgba(56,189,248,0.6)]",
    }
]

const iconsMapings = {
    "real-estate": Birdhouse,
    "imaging": Image,
    "software": LaptopMinimal,
    "creative": Codesandbox
}

type IconKey = "real-estate" | "imaging" | "software"

const Card: React.FC<CardProps> = ({ item, styleClass, index }) => {
    const ref = useRef<HTMLDivElement>(null);

    // Bind scroll progress to this card
    const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
        target: ref,
        offset: ["start end", "center 0.6"],
    });

    // Stair-step offsets
    const baseOffset = 200; // starting Y for first card
    const step = 80;        // extra offset per index

    const y: MotionValue<number> = useTransform(
        scrollYProgress,
        [0, 0.9],
        [baseOffset + index * step, 0]
    );

    const scale: MotionValue<number> = useTransform(
        scrollYProgress,
        [0, 1],
        [0.8, 1]
    );

    const Icon: any = iconsMapings[`${item.id}` as IconKey]

    return (
        <motion.div
            ref={ref}
            style={{ y, scale }}
            className="group"
        >
            <div
                className={`relative h-[265px] rounded-2xl flex items-center justify-center ${styleClass.card} ${styleClass.shadow}`}
            >
                <div className="h-16 w-16 rounded-2xl flex items-center justify-center">
                    {Icon && <Icon size={80} strokeWidth={1.75} />}
                </div>
            </div>
            <div className="mt-4 rounded-2xl p-4 text-center">
                <h3 className="text-lg font-semibold text-white capitalize">{item.tag}</h3>
                <p className="mt-1 text-sm text-gray-400 line-clamp-3">{item.title}</p>
            </div>
        </motion.div>
    );
};

const ServiceItems = (props: Props) => {
    const containerRef = useRef(null);

    return (
        <section className="relative px-2 z-10 py-20 mt-10">
            <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/5 via-transparent to-[#a855f7]/5 blur-3xl" />
            <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/5 via-transparent to-[#a855f7]/5 blur-3xl" />
            <div className="max-w-7xl mx-auto gap-10 md:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center"
                >
                    <AuroraText className="block text-4xl mb-5 md:text-5xl lg:text-8xl">
                        From Pixels to Programs.
                    </AuroraText>
                    <p className="text-lg text-white/80 max-w-4xl mx-auto mb-20">
                        We bridge the gap between design and technology. Whether it’s professional image editing that elevates your brand visuals or custom software development that powers your business, our team delivers end‑to‑end solutions tailored to your growth.
                    </p>
                </motion.div>
                <div ref={containerRef} className="grid gap-10 md:grid-cols-2 xl:grid-cols-4 mt-30">
                    {servicesData.map((item, i) => <Card
                        key={item.id}
                        item={item}
                        styleClass={styles[i % styles.length]}
                        index={i}
                    />)}
                </div>
                <RainbowButton className="flex gap-2 py-6 px-10 text-neutral-700 text-lg font-semibold rounded-4xl mx-auto mt-10">
                    {"Explore All"}
                </RainbowButton>
            </div>
        </section>
    )
}

export default ServiceItems