"use client"
import { memo, useRef } from 'react'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { AuroraText } from '../ui/aurora-text'
import { RainbowButton } from '../ui/rainbow-button'
import { ArrowRight } from 'lucide-react'
import { TextAnimate } from '../ui/text-animate'
import { Spotlight } from '../ui/spotlight-new'
import { useRouter } from 'next/navigation'
type Props = {}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
}

const items = [
    {
        id: 1,
        title: "REAL ESTATE SECTOR",
        subtitle: "",
        count: 6,
        icon: (
            <path d="M12 2L15 8H9l3-6z" />
        ),
        position: "justify-start translate-y-[-40px]",
        delay: 0
    },
    {
        id: 2,
        title: "COMMERCIAL SECTOR",
        subtitle: "Subtitle goes here",
        icon: (
            <circle cx="12" cy="12" r="10" />
        ),
        position: "justify-center translate-y-[100px]",
        delay: 0.2,
        count: 3,
    },
    {
        id: 3,
        title: "TECH SECTOR",
        subtitle: "Subtitle goes here",
        icon: (
            <rect x="4" y="4" width="16" height="16" />
        ),
        position: "justify-center translate-y-[100px]",
        delay: 0.4,
        count: 3
    },
    {
        id: 4,
        title: "CREATIVE SECTOR",
        subtitle: "Subtitle goes here",
        icon: (
            <polygon points="12,2 22,22 2,22" />
        ),
        position: "justify-end translate-y-[-40px]",
        delay: 0.6,
        count: 2
    }
]

const ServiceHero = (props: Props) => {
    const ref = useRef(null);
    const router = useRouter()
    // Bind scroll progress to this section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center 0.6"]
        // "start end" → when section enters viewport
        // "center 0.7" → when 70% of viewport is reached
    });

    const opacityProgress = useScroll({
        target: ref,
        offset: ["start end", "start 0.5"],
        // "start end" → when section enters viewport
        // "start 0.2" → when section top reaches 20% of viewport
    });

    // Animate only until 70% viewport
    const y = useTransform(scrollYProgress, [0, .9], [150, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const opacity = useTransform(opacityProgress.scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={ref} className="relative px-2 pb-50">
            <Spotlight />
            <div className="container mx-auto max-w-7xl text-center relative flex flex-col items-center justify-center mt-60">
                <AuroraText className='block text-4xl mb-5 md:text-5xl lg:text-9xl'>
                    VISUAL SYNTHESIS ENGINE.
                </AuroraText>
                <TextAnimate
                    animation="slideUp"
                    by="word"
                    className="max-w-3xl mx-auto mt-5 text-xl text-neutral-300"
                >
                    WellCode Studio replaces legacy outsourcing with neural-driven digital craftsmanship. We architect the visual future of global brands.
                </TextAnimate>
                <RainbowButton onClick={e => router.push("#content")} className="flex gap-2 py-6 px-10 text-neutral-700 text-lg font-semibold rounded-4xl mx-auto mt-10">
                    {"Explore"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                </RainbowButton>
                <motion.div
                    style={{ y, scale }}
                    className="bg-black overflow-hidden rounded-xl border-[10px] border-white inline-block mt-20"
                >
                    <video
                        src="./assets/videos/home.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-5xl h-auto block object-bottom"
                    />
                </motion.div>
                <RainbowButton onClick={e => router.push("/contact")} className="flex gap-2 py-6 px-10 text-neutral-700 text-lg font-semibold rounded-4xl mx-auto translate-y-[140px]">
                    {"Get started"}
                </RainbowButton>
                <motion.div style={{ opacity }} className="relative grid grid-cols-4 gap-8 mt-30 w-full">
                    {items.map((item, i) => (
                        <motion.div
                            // ref={refs[i]}
                            key={item.id}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: item.delay }}
                            className={`flex items-center col-span-1 ${item.position}
                      `}
                        >
                            <div>
                                <TextAnimate className="text-4xl md:text-8xl">{String(item.count) + "+"}</TextAnimate>
                                <AuroraText colors={["oklch(60% 0.118 184.704)", "#fff"]} className="text-base md:text-lg text-gray-300">{item.title}</AuroraText>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default memo(ServiceHero)
