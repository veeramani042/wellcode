"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AuroraText } from "../ui/aurora-text";
import { BorderBeam } from "../ui/border-beam";
import { servicesData } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Sparkle } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { ServiceCard, ServiceSection } from "@/lib/model";
import { useRouter } from "next/navigation";
import { PortalModal } from "../custom/modal";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { RainbowButton } from "../ui/rainbow-button";
import { ShinyButton } from "../ui/shiny-button";
import { ShineBorder } from "../ui/shine-border";

const images = [
    "/assets/images/image01.jpg",
    "/assets/images/image02.jpg",
    "/assets/images/image03.jpg",
    "/assets/images/image04.jpg",
    "/assets/images/image05.jpg",
    "/assets/images/image06.jpg",
    "/assets/images/image07.jpg",
];

const engines = [
    {
        id: "ENGINE_01",
        title: "Window View Pulls",
        desc: "Preserves exterior detail with zero clipping."
    },
    {
        id: "ENGINE_02",
        title: "Flash–Ambient Synthesis",
        desc: "Balances flash and ambient frames seamlessly."
    },
    {
        id: "ENGINE_03",
        title: "Color Cast Removal",
        desc: "Neutralizes mixed lighting contamination."
    },
    {
        id: "ENGINE_04",
        title: "Shadow Detail Recovery",
        desc: "Recovers texture from deep shadows."
    }
];

type PopperModalProps = {
    item: ServiceCard;
    nextEle: ServiceCard | null;
    onClose: () => void;
    changePrev: () => void;
    changeNext: () => void;
    total: number;
    category: string;
    activeIndex: number,
    setActiveIndex: (number: number) => void
}

const Modal = ({
    item,
    onClose,
    changePrev,
    changeNext,
    nextEle,
    total = 1,
    activeIndex = -1,
    category = "",
    setActiveIndex,
}: PopperModalProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        setThumbsSwiper(null);
    }, [activeIndex]);

    return (
        <PortalModal open={!!item} onClose={onClose}>
            <motion.div
                layout
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={cn(
                    "w-[95vw] sm:w-[90vw] max-w-[95vw] max-h-[95vh] overflow-hidden flex flex-col text-white rounded-2xl shadow-xl relative z-1 backdrop-blur-3xl",
                    "bg-blend-soft-light bg-center bg-cover shadow-lg bg-transparent",
                    item.images?.[0] && "bg-black/30 bg-cover bg-center"
                )}
            >
                {/* CONTENT */}
                <div className="flex-1 lg:overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 md:gap-x-10 p-5 md:p-10 h-full max-h-[90vh] overflow-auto lg:max-h-none">
                        {/* Left Content */}
                        <div className="hidden md:block relative z-10">
                            <div className="w-full content-end">
                                <Swiper
                                    modules={[Thumbs]}
                                    spaceBetween={10}
                                    allowTouchMove={false}
                                    slidesPerView={1}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    className="overflow-hidden rounded-xl lg:mt-10 h-full"
                                >
                                    {images.map((src, i) => (
                                        <SwiperSlide key={i} className="h-auto">
                                            {i === 1 ? (
                                                <ReactCompareSlider
                                                    className="h-full"
                                                    itemOne={
                                                        <ReactCompareSliderImage
                                                            src="/assets/images/image09.jpg"
                                                            alt="Before"
                                                        />
                                                    }
                                                    itemTwo={
                                                        <ReactCompareSliderImage
                                                            src="/assets/images/image31.webp"
                                                            alt="After"
                                                        />
                                                    }
                                                />
                                            ) : (
                                                <video
                                                    src={"/assets/videos/home.mp4"}
                                                    className="h-full w-full object-cover"
                                                    loop
                                                    playsInline
                                                    muted
                                                    autoPlay
                                                    controls={false}
                                                />
                                            )}
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Thumbnails */}
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                watchSlidesProgress
                                className="mt-5 w-full max-w-5xl"
                            >
                                {images.map((src, i) => (
                                    <SwiperSlide key={i}>
                                        <motion.img
                                            layout
                                            src={src}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.2 }}
                                            alt={`Thumb ${i}`}
                                            className="w-full h-20 object-cover rounded-md border-2 border-gray-300 hover:border-blue-500 transition cursor-pointer"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Right Content (SCROLLABLE) */}
                        <div className="content-center relative space-y-3 z-10 py-5 overflow-auto h-full" style={{ maxHeight: "calc(100vh - 155px)" }}>
                            <div className="relative max-w-6xl mx-auto md:px-6">
                                <p className="flex gap-2 items-center tracking-wider uppercase mb-5 text-xs text-muted-foreground">
                                    <Sparkle size={16} className="text-teal-900" /> {category}
                                </p>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}>
                                        <motion.h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                                            <AuroraText colors={["#0a5128ff", "#ffffffff", "#d2f7e1"]}>{item.title}</AuroraText>
                                        </motion.h2>
                                        <p className="mt-4 max-w-2xl font-light text-white/70 text-sm">
                                            {item.description}
                                        </p>
                                        {/* <p className="mt-4 max-w-2xl font-light text-white/70 text-sm">
                                            {item.title} : {item.description}
                                        </p> */}
                                    </motion.div>
                                </AnimatePresence>

                                {item?.features && (
                                    <div className="mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-8">
                                        {item.features.map((feature, i) => (
                                            <motion.div
                                                key={feature}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 }}
                                                className="group relative p-3 rounded-xl hover:bg-white/10 cursor-pointer">
                                                <p className="font-medium mt-1 text-white/80">{feature}</p>
                                                <p className="text-sm font-light text-white/60 mt-1">
                                                    {item.feature_content?.[i] || "No content available"}
                                                </p>
                                            </motion.div>
                                        ))}

                                    </div>
                                )}

                                <div className="flex gap-3 items-center">
                                    <RainbowButton
                                        className="mt-8 rounded-3xl px-5 py-4"
                                        onClick={() =>
                                            router.push(`/services/${item.slug}#content`)
                                        }
                                    >
                                        Explore
                                    </RainbowButton>
                                    <ShinyButton
                                        onClick={() =>
                                            router.push(`/contact`)
                                        }
                                        className="mt-8 rounded-3xl px-5 py-2">
                                        <ShineBorder />
                                        Book service
                                    </ShinyButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM CONTROLS (PINNED) */}
                <div className="sticky -bottom-5 md:bottom-0 flex flex-col md:flex-row items-center border-t border-neutral-900 rounded-b-2xl bg-black/40 backdrop-blur-xl z-20">
                    <div className="flex grow justify-between items-center px-5 py-3">
                        <button
                            onClick={onClose}
                            className="px-3 py-2 flex items-center gap-3 font-light text-sm rounded-md text-muted-foreground hover:bg-white/20 tracking-wider cursor-pointer"
                        >
                            <ChevronLeft size={15} /> Back to
                        </button>
                    </div>

                    <div className="hidden md:flex grow justify-between items-center px-5 gap-3 py-3 border-l border-neutral-900">
                        <button
                            onClick={changePrev}
                            disabled={activeIndex === 0}
                            className="px-3 py-2 flex items-center gap-3 font-light text-white/70 text-sm rounded-md hover:bg-white/20 tracking-wider cursor-pointer disabled:opacity-40"
                        >
                            <ChevronLeft size={15} /> Previous
                        </button>

                        <div className="md:flex gap-2 items-center grow justify-center hidden">
                            {Array.from({ length: total }).map((_, i) => (
                                <motion.span
                                    key={i}
                                    className={cn(
                                        "w-2 h-2 rounded-full cursor-pointer",
                                        i === activeIndex
                                            ? "bg-teal-900"
                                            : "bg-teal-100/60"
                                    )}
                                    initial={{ scale: 0.8, opacity: 0.5 }}
                                    animate={{
                                        scale: i === activeIndex ? 1.2 : 1,
                                        opacity: i === activeIndex ? 1 : 0.6,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>

                        <button
                            disabled={!nextEle}
                            onClick={changeNext}
                            className="px-3 py-2 flex items-center gap-3 font-light text-white/70 text-sm rounded-md hover:bg-white/20 tracking-wider cursor-pointer disabled:opacity-40"
                        >
                            Next{" "}
                            {nextEle && (
                                <span className="text-teal-200/80 hidden md:inline">: {nextEle.title}</span>
                            )}{" "}
                            <ChevronRight size={15} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </PortalModal >
    );
};


const HorizontalSection = ({
    service,
    index = 0
}: {
    service: ServiceSection;
    reverse?: boolean;
    index?: number
}) => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    return (
        <section className="w-full relative mt-20">

            {/* <Spotlight /> */}
            {index % 2 == 0 ?
                <>
                    <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/10 via-transparent to-[#a855f7]/10 blur-3xl" />
                    <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/10 via-transparent to-[#a855f7]/10 blur-3xl" />
                </> :
                <>
                    <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br to-[#3b82f6]/10 via-transparent from-[#a855f7]/10 blur-3xl" />
                    <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br to-[#3b82f6]/10 via-transparent from-[#a855f7]/10 blur-3xl" />
                </>
            }

            {/* Section title */}
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: [80, -10, 0], opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    bounce: 0.4,
                }}
                viewport={{ once: true, amount: 0.1 }}
                className="text-center pt-30"
                id={service.tag.split(" ").join("-")}
            >
                <Badge className="text-sm py-3 px-5 rounded-full font-light capitalize leading-0.5 tracking-wider text-muted-foreground" variant={"outline"}>#{service.id.replaceAll("-", " ")} Sector</Badge>
                <h2 className="mt-8
                ">
                    <AuroraText className="block text-4xl mb-5 md:text-5xl lg:text-7xl">
                        {service.title}
                    </AuroraText>
                </h2>
                <p className="text-lg text-white/40 max-w-xl mx-auto mb-10">
                    {service.subtitle}
                </p>
            </motion.div>
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: [80, -10, 0], opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    bounce: 0.4
                }}
                viewport={{ once: true, amount: 0.1 }}
                className="flex gap-2 max-w-7xl mx-auto justify-center flex-wrap mb-10 cursor-pointer">
                {
                    service.cards.map((item, i) => {
                        return <div role="button" onClick={e => setActiveIndex(i)} key={i} className={cn("relative overflow-hidden px-5 py-3 text-sm text-white/50 rounded-4xl bg-white/5 backdrop-blur-xl border border-transparent transition-colors duration-300 hover:bg-teal-500/20 hover:border-teal-800")}>
                            {item.title}
                            <BorderBeam
                                size={40}
                                initialOffset={20}
                                className="from-transparent via-teal-800 to-transparent"
                            />
                        </div>
                    })
                }
            </motion.div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: [80, -10, 0], opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    bounce: 0.4
                }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <div
                    className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-10 lg:gap-y-20 gap-10"
                >
                    {service.cards.map((item, i) => (
                        <div key={i}>
                            <motion.div
                                onClick={e => setActiveIndex(i)}
                                // onClick={() => router.push(`/services/${item.slug}#content`)}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                style={{
                                    backgroundImage: item.images?.[0]
                                        ? `url(${item.images[0]})`
                                        : undefined,
                                }}
                                className={cn(
                                    "relative overflow-hidden rounded-3xl backdrop-blur-3xl p-7 pt-70 h-full content-end cursor-pointer",
                                    "bg-black/0 bg-blend-soft-light bg-center bg-cover shadow-lg",
                                    item.images[0] && "bg-cover bg-center"
                                )}
                            >
                                {/* Content */}
                                <div className="mt-5 flex flex-col justify-end relative z-10">
                                    <h4 className="text-2xl mb-2 font-medium tracking-wide">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm font-light text-foreground/70">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom shadow fade */}
                                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                                {item.features && (
                                    <ul className="divide-y divide-white/10 rounded-2xl overflow-hidden mt-4">
                                        {item.features.map((feature, j) => (
                                            <motion.li
                                                key={j}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setActiveIndex(i)
                                                }}
                                                className="p-4 dark:hover:bg-neutral-800 rounded-sm cursor-pointer"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2">
                                                            <h3 className="text-xs md:text-sm grow font-light text-white truncate">
                                                                {feature}
                                                            </h3>
                                                            {j % 2 === 0 ? (
                                                                <span className="inline-flex items-center rounded-md bg-teal-500/15 px-2 py-0.5 text-[10px] font-medium text-teal-700 ring-1 ring-inset ring-teal-500/30">
                                                                    New
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <ChevronRight
                                                            className="size-5 text-white/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white/80"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.li>
                                        ))}
                                    </ul>
                                )}
                                <div className="absolute -z-1 inset-0 bg-linear-to-b from-transparent via-black/80 to-black/90"></div>
                            </motion.div>
                        </div>
                    ))}
                </div>
                {service.cards[activeIndex] &&
                    <Modal
                        item={service.cards[activeIndex]}
                        onClose={() => setActiveIndex(-1)}
                        changePrev={() => setActiveIndex(activeIndex - 1)}
                        changeNext={() => setActiveIndex(activeIndex + 1)}
                        nextEle={service.cards[activeIndex + 1] || null}
                        total={service.cards.length}
                        activeIndex={activeIndex}
                        category={service.tag}
                        setActiveIndex={(index: number) => setActiveIndex(index)}
                    />}
            </motion.div>
        </section>
    );
};

export default function ServicesPage() {
    return (
        <div className="relative px-2" id="content">
            {servicesData.map((service, i) => (
                <HorizontalSection
                    key={service.id}
                    service={service}
                    index={i}
                    reverse={i % 2 === 1} // alternate direction
                />
            ))}
        </div>
    );
}
