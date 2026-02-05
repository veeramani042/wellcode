"use client";

import { AuroraText } from "../ui/aurora-text";
import { ReactCompareSlider } from "react-compare-slider";
import MacWindow from "../custom/mac-window";
import { Spotlight } from "../ui/spotlight-new";
import { Media, OurWorksItem, ServiceInformation, UseCaseSection } from "@/lib/model";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheckBig, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { RainbowButton } from "../ui/rainbow-button";
import { ShinyButton } from "../ui/shiny-button";
import { ShineBorder } from "../ui/shine-border";
import { useRouter } from "next/navigation";
import { Thumbs } from "swiper/modules";
import { ReactCompareSliderImage } from "react-compare-slider";
import { useState } from "react";

export function ServiceFeatures({ usecase }: { usecase: UseCaseSection }) {
    return (
        <div className="relative pt-20 md:pt-40 text-white">
            {/* Section Header */}
            <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/5 via-transparent to-[#a855f7]/5 blur-3xl" />
            <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/10 via-transparent to-[#a855f7]/10 blur-3xl" />
            <div className="text-center">
                <AuroraText className="block text-4xl mb-5 leading-tight font-semibold md:text-5xl lg:text-6xl">
                    {usecase.title}
                </AuroraText>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                    {
                        usecase.link ? <TextWithLink text={usecase.descriptions.join(" ")} link={usecase.link} /> :
                            usecase.descriptions.join(" ")
                    }
                </p>
            </div>

            {/* Cards */}
            <motion.div
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.25 } },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
            >
                {usecase.list.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                        }}
                        className={cn(
                            "group relative overflow-hidden rounded-3xl p-10",
                            "bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl",
                            "border border-transparent",
                            "transition-all duration-500 hover:-translate-y-3"
                        )}
                    >
                        {/* Crown Badge */}
                        <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                            <span className="text-xs uppercase tracking-wider text-teal-600 pl-5">Exclusive</span>
                        </div>

                        {/* Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                            <div className="absolute -inset-20 rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-yellow-400/20 via-pink-500/10 to-transparent blur-3xl" />
                        </div>
                        {
                            typeof item !== "string" &&
                            <>
                                {/* Content */}
                                <h3 className="text-2xl text-white/80 mb-4 relative z-10">
                                    {
                                        item.link ? <TextWithLink text={item.title} link={item.link} /> :
                                            item.title
                                    }
                                </h3>
                                <p className="text-muted-foreground relative z-10 text-sm leading-relaxed">
                                    {
                                        item.link ? <TextWithLink text={item.descriptions.join(" ")} link={item.link} /> :
                                            item.descriptions.join(" ")
                                    }
                                </p>
                            </>
                        }
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

const OurWorks = ({ works, media }: { works: OurWorksItem[] | string[], media: Media }) => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 my-30">
        {
            works.slice(0, 5).map((item, i) => {
                const isString = typeof item === "string"
                return <div key={i}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        style={{
                            backgroundImage: (!isString && item.image) ? `url(${item.image.filepath})`
                                // : "linear-gradient(180deg,rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%)",
                                : `url(${media.images[i] ? media.images[i].filepath : `/assets/images/image${String(i + 11).padStart(2, "0")}.webp`})`,
                        }}
                        className={cn(
                            "relative overflow-hidden rounded-3xl backdrop-blur-3xl p-7 pt-90 h-full content-end cursor-pointer",
                            "bg-black/0 bg-blend-soft-light bg-center bg-cover shadow-lg",
                            (!isString && item.image) && "bg-cover bg-center"
                        )}
                    >
                        {/* Content */}
                        <div className="mt-5 flex flex-col justify-end relative z-10">
                            <h4 className={cn("text-2xl mb-2 font-medium tracking-wide")}>
                                {!isString ? item.title : item}
                            </h4>
                            {
                                !isString && item.descriptions &&
                                item.descriptions?.length > 0 &&
                                <p className="text-sm font-light text-foreground/70">
                                    {
                                        item.link ?
                                            <TextWithLink
                                                text={item.descriptions.join(" ")}
                                                link={item.link}
                                            /> : item.descriptions.join(" ")
                                    }
                                </p>

                            }
                        </div>
                        {/* Bottom shadow fade */}
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute -z-1 bg-linear-to-b from-transparent to-black/90"></div>
                    </motion.div>
                </div>
            })}
    </div>
}

type TextWithLinkProps = {
    text: string;
    link?: {
        text: string;
        slug: string;
    };
    className?: string;
};

export const TextWithLink = ({
    text,
    link,
    className = "",
}: TextWithLinkProps) => {

    if (!link?.text) {
        return <span className={cn(className)}>{text}</span>;
    }

    const regex = new RegExp(`(${link.text})`, "gi");
    const parts = text?.split(regex);

    return (
        <span className={cn("text-base", className)}>
            {parts.map((part, i) =>
                part.toLowerCase() === link.text.toLowerCase() ? (
                    //   <LinkPreview key={i} url={(process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_LIVE_SITE_URL : process.env.NEXT_PUBLIC_LOCAL_SITE_URL) + `/services/${link.slug}#content`} className="font-medium text-teal-500 underline underline-offset-4 decoration-teal-400/50 transition hover:text-teal-400 hover:decoration-teal-400">
                    //     {part}
                    // </LinkPreview>
                    <Link
                        key={i}
                        href={`/services/${link.slug}#content`}
                        className="font-medium text-teal-500 underline underline-offset-4 decoration-teal-400/50 transition hover:text-teal-400 hover:decoration-teal-400"
                    >
                        {part}
                    </Link>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </span>
    );
};

type Props = {
    service: ServiceInformation
}

export default function ServiceInfo({ service }: Props) {

    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const router = useRouter();

    return (
        <div className="relative z-10 py-20">
            <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/5 via-transparent to-[#a855f7]/5 blur-3xl" />

            {
                service.service_slider &&
                <div className="max-w-[100rem] mx-auto items-center px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 md:gap-x-10 p-5 md:p-10 h-full">
                        {/* Left Content */}
                        <div className=" relative z-10">
                            <div className="w-full content-end">
                                <Swiper
                                    onSwiper={setMainSwiper}
                                    modules={[Thumbs]}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    allowTouchMove={false}
                                    className="overflow-hidden rounded-xl lg:mt-10 h-full">
                                    {service.media.images.map((src, i) => (
                                        <SwiperSlide key={i}>
                                            {src.filepath.endsWith(".mp4") ? (
                                                <video
                                                    src={src.filepath}
                                                    className="h-full w-full object-cover rounded-xl"
                                                    loop
                                                    muted
                                                    autoPlay
                                                    playsInline
                                                />
                                            ) : (
                                                <img
                                                    src={src.filepath}
                                                    alt=""
                                                    className="h-full w-full object-cover rounded-xl min-h-[300px] md:min-h-[485px] max-h-[300px] md:max-h-[485px]"
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
                                className="mt-5 w-full max-w-5xl">
                                {service.media.images.map((src, i) => (
                                    <SwiperSlide key={i}>
                                        <motion.img
                                            src={src.filepath}
                                            alt={`Thumb ${i}`}
                                            onClick={() => mainSwiper?.slideTo(i)}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="min-h-[80px] md:min-h-[130px] object-cover rounded-md border-2 border-gray-300 hover:border-blue-500 cursor-pointer"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>

                        {/* Right Content (SCROLLABLE) */}
                        <div className="content-center relative space-y-3 z-10 py-5 overflow-auto h-full" style={{ maxHeight: "calc(100vh - 155px)" }}>
                            <div className="relative max-w-6xl mx-auto md:px-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={service.service_slider.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}>
                                        <motion.h2 className="text-4xl md:text-5xl xl:text-7xl font-semibold tracking-tight">
                                            <AuroraText colors={["#0a5128ff", "#ffffffff", "#d2f7e1"]}>{service.service_slider.title}</AuroraText>
                                        </motion.h2>
                                        <p className="mt-6 max-w-2xl font-light text-white/70 text-sm md:text-base">
                                            {service.service_slider.description}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                                <div className="flex gap-3 items-center">
                                    <RainbowButton
                                        className="mt-8 rounded-3xl px-5 py-4"
                                        onClick={() => router.push(`/contact`)}>
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
            }

            {
                service.base_service !== "Real Estate Image Editing" &&
                <div className="max-w-7xl mx-auto items-center px-4">
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: [80, -10, 0], opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            bounce: 0.4,
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center my-20 md:my-30"
                    >
                        <h1 className="block text-4xl font-semibold md:font-normal mb-5 leading-tight md:text-5xl lg:text-8xl">
                            <AuroraText>
                                {service.header.title}
                            </AuroraText>
                        </h1>
                        {
                            service.header.sub_title &&
                            <h2 className="text-2xl md:text-4xl text-white/80 max-w-2xl mx-auto my-4 md:my-8">
                                <AuroraText>{service.header.sub_title}</AuroraText>
                            </h2>
                        }
                        <p className="text-lg text-white/80 max-w-4xl mx-auto">
                            {
                                service?.header?.link ?
                                    <TextWithLink
                                        text={service?.header?.descriptions?.join("\n")} link={service?.header?.link}
                                    />
                                    : service?.header?.descriptions?.join("\n")
                            }
                        </p>
                    </motion.div>
                </div>
            }


            {
                service.our_works &&
                <div className="max-w-7xl mx-auto items-center px-4">
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
                    >
                        <Badge className="text-sm py-3 px-5 rounded-full font-light capitalize leading-0.5 tracking-wider text-muted-foreground" variant={"outline"}>SERVICES WE OFFER</Badge>
                        <h2 className="mt-8">
                            <AuroraText className="block text-4xl mb-5 md:text-5xl lg:text-7xl">
                                {service.our_works.title}
                            </AuroraText>
                        </h2>
                        {
                            service.our_works.descriptions.length > 0 &&
                            <p className="text-lg text-white/40 max-w-xl mx-auto mb-10">
                                {
                                    service.our_works.link ?
                                        <TextWithLink
                                            text={service.our_works.descriptions.join(" ")}
                                            link={service.our_works.link}
                                        /> : service.our_works.descriptions.join(" ")
                                }
                            </p>
                        }
                    </motion.div>
                    {(service.our_works.list && service.our_works.list.length > 0) &&
                        <OurWorks works={service.our_works.list} media={service.media} />
                    }
                    {/* {service.our_works.phrase_text &&
                        <p className="text-sm font-light text-foreground/70">
                            {
                                service.our_works.link ?
                                    <TextWithLink
                                        text={service.our_works.phrase_text}
                                        link={service.our_works.link}
                                    /> : service.our_works.phrase_text
                            }
                        </p>
                    } */}
                </div>
            }
            {
                service.process &&
                <div className="max-w-7xl mx-auto relative mt-15 md:mt-30 px-4">
                    <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/5 via-transparent to-[#a855f7]/5 blur-3xl" />
                    <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/10 via-transparent to-[#a855f7]/10 blur-3xl" />
                    {/* First main column */}
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: [80, -10, 0], opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", bounce: 0.4, delay: .3 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <span className="block mb-3 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            {"Our Process"}
                        </span>
                        <h2 className="mb-6 inline-block text-3xl sm:text-4xl md:text-6xl font-medium leading-tight">
                            <AuroraText>
                                {service.process?.title}
                            </AuroraText>
                        </h2>
                        <p className="text-muted-foreground max-w-xl">
                            {
                                service.process?.link ?
                                    <TextWithLink
                                        text={service.process?.descriptions?.join(" ")}
                                        link={service.process?.link}
                                    /> :
                                    service.process?.descriptions?.join(" ")
                            }
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 mt-10">
                        <motion.div
                            initial={{ x: -80, opacity: 0 }}
                            whileInView={{ x: [-80, -10, 0], opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                bounce: 0.4,
                                delay: .3
                            }}
                            viewport={{ once: true }}
                            className="flex flex-col space-y-4"
                        >
                            {
                                service.process?.steps.map((step, i) => {
                                    return <div
                                        key={i}
                                        className={cn("flex items-center justify-between")}
                                    >
                                        <div className="flex items-start space-x-5">
                                            <span className="text-base  font-light">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <div className="pb-4 border-b border-gray-300/10 cursor-pointer relative">
                                                {/* {i == 0 && <div className="absolute inset-x-0 -bottom-px h-0.5 gradient-line w-25 rounded-xl"></div>} */}
                                                <span className="text-lg text-gray-400 font-light">
                                                    <AuroraText>{step.title}</AuroraText>
                                                </span>
                                                <div className={cn("text-base font-light text-muted-foreground")}>
                                                    {
                                                        step?.link ?
                                                            <TextWithLink
                                                                text={step.descriptions?.join(" ")}
                                                                link={step?.link}
                                                            /> :
                                                            step.descriptions?.join(" ")
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right side: arrow */}
                                        {/* <span className="text-gray-500/80">
                                            <ChevronRight size={16} />
                                        </span> */}
                                    </div>
                                })
                            }
                        </motion.div>
                        {/* Second main column with two sub-columns */}
                        <div>
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
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/5 via-transparent to-[#a855f7]/5 blur-3xl" />
                                <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/10 via-transparent to-[#a855f7]/10 blur-3xl" />
                                <MacWindow>
                                    {
                                        service.media.comparison ?
                                            // <ImageComparisonSlider
                                            //     beforeImage={service.media.comparison.before.filepath}
                                            //     afterImage={service.media.comparison.after.filepath}
                                            //     alt="Before/After comparison"
                                            //     className="rounded-b-xl object-cover h-full w-full"
                                            // />
                                            <ReactCompareSlider
                                                style={{ height: "100%" }}
                                                itemOne={
                                                    <div className="relative w-full h-full">
                                                        <Image
                                                            src={service.media.comparison.before.filepath}
                                                            alt={service.media.comparison.before.alt}
                                                            className="rounded-b-xl object-cover h-full w-full"
                                                            fill
                                                            quality={100}
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                }
                                                itemTwo={
                                                    <div className="relative w-full h-full">
                                                        <Image
                                                            src={service.media.comparison.after.filepath}
                                                            alt={service.media.comparison.after.alt}
                                                            className="rounded-b-xl object-cover h-full w-full"
                                                            fill
                                                            quality={100}
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                }
                                            />
                                            // <ReactCompareSlider
                                            //     style={{ height: "100%" }}
                                            //     itemOne={
                                            //         <ReactCompareSliderImage
                                            //             // src={"/assets/images/image01.jpg"}
                                            //             // alt={"realestate-images"}
                                            //             src={service.media.comparison.before.filepath}
                                            //             alt={service.media.comparison.before.alt}
                                            //             className="rounded-b-xl"
                                            //         />
                                            //     }
                                            //     itemTwo={
                                            //         <ReactCompareSliderImage
                                            //             src={service.media.comparison.after.filepath}
                                            //             alt={service.media.comparison.after.alt}
                                            //             className="rounded-b-xl"
                                            //         />
                                            //     }
                                            // />
                                            : (service.media.videos.length > 0 ?
                                                <>
                                                    <video
                                                        // src={service.media.videos[0].filepath}
                                                        src={"/assets/videos/INSANE REAL.mp4"}
                                                        className={"object-cover h-full w-full rounded-b-xl"}
                                                        autoPlay
                                                        muted
                                                        playsInline
                                                    >

                                                    </video>
                                                </>
                                                :
                                                service.media.images.length > 0 ?
                                                    <>
                                                        <Image
                                                            src={service.media.images[0].filepath}
                                                            alt={service.media.images[0].alt}
                                                            // src={`/assets/images/image${String(Math.floor(Math.random() * 10) + 1).padStart(2, "0")}.jpg`}
                                                            // alt={service.media.images[0].alt}
                                                            // alt=""
                                                            width={600}
                                                            height={400}
                                                            className="object-cover h-full w-full rounded-b-xl"
                                                        />
                                                    </> : <>
                                                        <Image
                                                            // src={service.media.images[0].filepath}
                                                            // alt={service.media.images[0].alt}
                                                            src={`/assets/images/image01.jpg`}
                                                            alt={"edited"}
                                                            // alt=""
                                                            width={600}
                                                            height={400}
                                                            className="object-cover h-full w-full rounded-b-xl"
                                                        />
                                                    </>
                                            )
                                    }
                                </MacWindow>
                            </motion.div>
                            {/* Row 2 */}
                            {/* <motion.div
                                    initial={{ x: 80, opacity: 0 }}
                                    whileInView={{ x: [80, -10, 0], opacity: 1 }}
                                    viewport={{ once: true, }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeOut",
                                        bounce: 0.4,
                                        delay: .3
                                    }}
                                    className="space-y-4 content-end text-muted-foreground font-light"
                                >
                                    <hr className="w-16 border h-0" />
                                    <p className="text-sm leading-snug text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in eos explicabo eum rerum saepe culpa ut consequuntur, inventore ducimus..
                                    </p>
                                    <p className="text-sm leading-snug text-justify">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, dolore excepturi impedit aut quod sint earum, eaque rerum eius nobis, eos voluptate. Dignissimos sequi cupiditate error voluptas, accusantium nemo animi.
                                    </p>
                                </motion.div> */}
                        </div>
                    </div>
                </div>
            }
            {service.usecase &&
                service.usecase.list &&
                typeof service.usecase.list[0] === "string" ? <>
                <div className="max-w-7xl mx-auto grid grid-cols-3 flex-col-reverse md:flex-col md:grid-cols-6 gap-x-5 lg:gap-x-30 gap-y-15 md:gap-y-50 items-center mt-10 sm:mt-20 md:mt-40 px-4">
                    {
                        service.usecase &&
                        <motion.div
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: [80, -10, 0], opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                bounce: 0.4,
                                delay: .3
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="col-span-3 order-2 md:order-1 relative"
                        >
                            <Spotlight />
                            <h2 className="mb-6 inline-block text-2xl md:text-3xl font-medium text-primary">
                                {service.usecase.title}
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                {
                                    service.usecase?.link ?
                                        <TextWithLink
                                            text={service.usecase?.descriptions?.join(" ")}
                                            link={service.usecase?.link}
                                        /> :
                                        service.usecase?.descriptions?.join(" ")
                                }
                            </p>
                            <ul className={cn("list space-y-5", typeof service.usecase.list[0] === "string" && "space-y-4")}>
                                {
                                    service.usecase.list.map((use, i) => {
                                        return <li key={i} className="flex flex-col list-decimal">
                                            {
                                                typeof use === "string"
                                                    ?
                                                    <div className="flex items-center gap-2">
                                                        <Sparkles size={18} className="text-teal-800" />
                                                        <div>
                                                            <motion.h3 className="text-slate-100 font-light">
                                                                {use}.
                                                            </motion.h3>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-10 min-w-10">
                                                            <Sparkles className="text-teal-800" />
                                                        </div>
                                                        <div>
                                                            <motion.h3 className="text-slate-100  font-light">
                                                                {
                                                                    use?.link ?
                                                                        <TextWithLink
                                                                            text={use?.title}
                                                                            link={use?.link}
                                                                        /> :
                                                                        use?.title
                                                                }
                                                            </motion.h3>
                                                            <p className="text-sm text-muted-foreground font-light">
                                                                {
                                                                    use?.link ?
                                                                        <TextWithLink
                                                                            text={use?.descriptions?.join(" ")}
                                                                            link={use?.link}
                                                                        /> :
                                                                        use?.descriptions?.join(" ")
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                            }
                                        </li>
                                    })
                                }
                            </ul>
                            {
                                service.usecase?.phrase_text &&
                                <p className="text-sm text-muted-foreground mt-5">
                                    {
                                        service.usecase?.link ?
                                            <TextWithLink
                                                text={service.usecase?.phrase_text}
                                                link={service.usecase?.link}
                                            /> :
                                            service.usecase?.phrase_text
                                    }
                                </p>
                            }
                        </motion.div>
                    }
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: [80, -10, 0], opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            bounce: 0.4,
                        }}
                        viewport={{ once: true }}
                        className="col-span-3 relative">
                        <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/5 via-transparent to-[#a855f7]/5 blur-3xl" />
                        <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br from-[#3b82f6]/10 via-transparent to-[#a855f7]/10 blur-3xl" />
                        <MacWindow>
                            {
                                (service.media.videos.length > 0 ?
                                    <>
                                        <video
                                            // src={service.media.videos[0].filepath}
                                            src={"/assets/videos/INSANE REAL.mp4"}
                                            className={"object-cover h-full w-full rounded-b-xl"}
                                            autoPlay
                                            muted
                                            playsInline
                                        >

                                        </video>
                                    </>
                                    :
                                    // service.media.images.length > 0 &&
                                    <>
                                        {
                                            (service.media.images &&
                                                service.media.images.length > 0) ?
                                                <>
                                                    <Image
                                                        src={service.media.images[service.media.images.length - 1].filepath}
                                                        alt={service.media.images[service.media.images.length - 1].title}
                                                        width={600}
                                                        height={400}
                                                        className="object-cover h-full w-full rounded-b-xl"
                                                    />
                                                </> :
                                                <>
                                                    <Image
                                                        src={`/assets/images/image07.jpg`}
                                                        alt={"Edited"}
                                                        width={600}
                                                        height={400}
                                                        className="object-cover h-full w-full rounded-b-xl"
                                                    />
                                                </>
                                        }
                                    </>
                                )
                            }
                        </MacWindow>
                    </motion.div>
                </div>
            </> : <>
                {service.usecase &&
                    <div className="relative max-w-7xl mx-auto px-4">
                        <ServiceFeatures
                            usecase={service.usecase}
                        />
                    </div>
                }
            </>
            }
            {
                service.general_info &&
                <div className="relative max-w-7xl mx-auto px-6 my-10 sm:my-20 md:my-50">
                    <div className="absolute -inset-x-40 -inset-y-20 -z-10">
                        <div className="w-full h-full rounded-full bg-linear-to-r from-white/20 via-white/20 to-white/20 opacity-10 visible backdrop-blur-xl" />
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-x-30 gap-y-15 md:gap-y-50 items-center">
                        <motion.div
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: [80, -10, 0], opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                bounce: 0.4,
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="col-span-3 relative">
                            {
                                (service.media.images &&
                                    service.media.images.length > 0) ?
                                    <>
                                        <Image
                                            src={service.media.images.length > 1 ? service.media.images[5].filepath : service.media.images[0].filepath}
                                            alt={service.media.images.length > 1 ? service.media.images[5].title : service.media.images[0].title}
                                            width={600}
                                            height={400}
                                            className="object-cover h-full w-full rounded-xl"
                                        />
                                    </> :
                                    <>
                                        <Image
                                            src={`/assets/images/image03.jpg`}
                                            alt={"Edited"}
                                            width={600}
                                            height={400}
                                            className="object-cover h-full w-full rounded-xl"
                                        />
                                    </>
                            }
                        </motion.div>
                        <motion.div
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: [80, -10, 0], opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                bounce: 0.4,
                                delay: .3
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="col-span-3 relative"
                        >
                            <Spotlight />
                            <h2 className="mb-4 inline-block text-3xl font-medium uppercase tracking-[0.2em] text-primary">
                                <AuroraText>{service.general_info?.title}</AuroraText>
                            </h2>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="font-display text-base text-muted-foreground leading-normal tracking-tight relative"
                            >
                                {
                                    service?.general_info?.link ?
                                        <TextWithLink
                                            text={service.general_info?.descriptions?.join(" ")}
                                            link={service?.general_info?.link}
                                        /> :
                                        service.general_info?.descriptions?.join(" ")
                                }
                            </motion.p>
                            {
                                service.general_info?.sub_section && <>
                                    <h4 className="mb-2 text-lg text-muted-foreground mt-5">{service.general_info?.sub_section?.title}</h4>
                                    {
                                        service?.general_info?.sub_section?.list &&
                                        service?.general_info?.sub_section?.list?.length > 0 &&
                                        <ul className="list pl-3 space-y-3">
                                            {
                                                service.general_info?.sub_section?.list?.map((el, i) => {
                                                    return <li key={i} className="text-sm text-muted-foreground list-disc">
                                                        {
                                                            typeof el === "string" ?
                                                                <p>{el}</p>
                                                                :
                                                                <div className="flex flex-col gap-1">
                                                                    <h3> {
                                                                        el?.link ?
                                                                            <TextWithLink
                                                                                text={el?.title}
                                                                                link={el?.link}
                                                                            /> : el?.title
                                                                    } -
                                                                    </h3>
                                                                    <p>
                                                                        {
                                                                            el?.link ?
                                                                                <TextWithLink
                                                                                    text={el?.descriptions?.join(" ")}
                                                                                    link={el?.link}
                                                                                /> :
                                                                                el?.descriptions?.join(" ")
                                                                        }
                                                                    </p>
                                                                </div>
                                                        }

                                                    </li>
                                                })
                                            }
                                        </ul>
                                    }
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, delay: 0.8 }}
                                        className="text-muted-foreground text-sm leading-relaxed pl-0 sm:pl-20 md:pl-50 line-clamp-5 mt-4"
                                    >
                                        {
                                            service.general_info?.sub_section?.phrase_text &&
                                            (service.general_info?.sub_section?.link ?
                                                <TextWithLink
                                                    text={service.general_info?.sub_section?.phrase_text}
                                                    link={service.general_info?.sub_section?.link}
                                                /> :
                                                service.general_info?.sub_section?.phrase_text
                                            )
                                        }
                                    </motion.p>
                                </>
                            }
                        </motion.div>
                    </div>
                </div>
            }
            {
                service.suitable_users &&
                <div className="relative py-15 my-10 md:py-24 px-6">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: [80, -10, 0], opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", bounce: 0.4, delay: .3 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <span className="block mb-3 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                                {"Suits for"}
                            </span>
                            <h2 className="mb-6 inline-block text-3xl sm:text-4xl md:text-6xl font-medium leading-tight">
                                <AuroraText>
                                    {service.suitable_users.title}
                                </AuroraText>
                            </h2>
                            {service?.suitable_users?.descriptions &&
                                <p className="text-muted-foreground max-w-xl">
                                    {service?.suitable_users?.link ?
                                        <TextWithLink
                                            text={service?.suitable_users?.descriptions?.join(" ")}
                                            link={service?.suitable_users?.link}
                                        /> :
                                        service?.suitable_users?.descriptions?.join(" ")}
                                </p>
                            }
                        </motion.div>
                        {/* User Cards */}
                        <div className="mt-6">
                            {service.suitable_users?.users.map((user, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.2, duration: 0.6 }}
                                    className="group relative backdrop-blur-md p-6 shadow-lg border-b border-gray-900 hover:border-purple-500/50 hover:shadow-indigo-500/30 transition"
                                >
                                    <div className="absolute inset-0 bg-linear-to-r from-teal-900 via-purple-900 to-pink-900 opacity-0 group-hover:opacity-10 transition"></div>
                                    <div className="flex gap-5 md:gap-20">
                                        <i className="text-xl font-light text-gray-100">{String(i + 1).padStart(2, "0")}.</i>
                                        <h3 className="text-xl font-light text-gray-100">{user}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            }
            {
                service.ai_works &&
                <div className={cn("relative w-full", !service.suitable_users && "mt-15 md:mt-25",)}>
                    {/* Glow background */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute left-[-20%] top-[-30%] h-[600px] w-[600px] rounded-full bg-green-500/10 blur-[120px]" />
                        <div className="absolute bottom-[-30%] right-[-20%] h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[120px]" />
                    </div>

                    <div className="relative mx-auto max-w-7xl px-6 py-10">
                        {service.ai_works.comparison && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-10">
                                {/* Title + description */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className={cn(service.ai_works.comparison?.human_title ? "col-span-2" : "")}
                                >
                                    <h2 className="text-4xl font-semibold leading-tight text-gray-200 md:text-6xl">
                                        <AuroraText>{service.ai_works.title}</AuroraText>
                                    </h2>
                                    {service.ai_works.descriptions && (
                                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400">
                                            {service.ai_works.descriptions}
                                        </p>
                                    )}
                                </motion.div>

                                {/* AI comparison card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className={cn(
                                        "group relative overflow-hidden rounded-3xl p-10",
                                        "bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl",
                                        "border border-transparent",
                                        "transition-all duration-500 hover:-translate-y-3"
                                    )}
                                >
                                    <div>
                                        <h3 className="text-sm uppercase font-semibold tracking-wider text-gray-300">
                                            {service.ai_works.comparison?.title}
                                        </h3>
                                        {service.ai_works.comparison?.list && (
                                            <ul className="mt-6 space-y-4">
                                                {service.ai_works.comparison?.list.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className="mt-1 inline-flex h-5 w-5 min-w-5 items-center justify-center rounded-full text-teal-700">
                                                            <CircleCheckBig />
                                                        </span>
                                                        <span className="text-gray-300">
                                                            {typeof item === "string" ? (
                                                                item
                                                            ) : (
                                                                <div className="flex flex-col gap-1">
                                                                    <h5>{item.title}</h5>
                                                                    <p className="text-muted-foreground font-light max-w-xl text-sm">
                                                                        {item.descriptions?.join(" ")}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    {service.ai_works.comparison?.human_title && (
                                        <img
                                            src="https://images.unsplash.com/photo-1738003667850-a2fb736e31b3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0"
                                            alt="visual"
                                            className="absolute h-50 w-50 object-cover rounded-tl-3xl -z-1 -bottom-1 -right-4"
                                        />
                                    )}
                                </motion.div>

                                {/* Human comparison card */}
                                {service.ai_works.comparison?.human_title && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                        viewport={{ once: true }}
                                        className={cn(
                                            "group relative overflow-hidden rounded-3xl p-10",
                                            "bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl",
                                            "border border-transparent",
                                            "transition-all duration-500 hover:-translate-y-3"
                                        )}
                                    >
                                        <h3 className="text-sm uppercase font-semibold tracking-wider text-gray-300">
                                            {service.ai_works.comparison?.human_title}
                                        </h3>
                                        {service.ai_works.comparison?.human_list && (
                                            <ul className="mt-6 space-y-4">
                                                {service.ai_works.comparison?.human_list.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className="mt-1 inline-flex h-5 w-5 min-w-5 items-center justify-center rounded-full text-teal-800">
                                                            <CircleCheckBig />
                                                        </span>
                                                        <span className="text-gray-300">
                                                            {typeof item === "string" ? (
                                                                item
                                                            ) : (
                                                                <div className="flex flex-col gap-1">
                                                                    <h5>{item.title}</h5>
                                                                    <p className="text-muted-foreground font-light max-w-xl text-sm">
                                                                        {item.descriptions?.join(" ")}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        <img
                                            src="https://images.unsplash.com/photo-1670081684460-15cd8379fcbc?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.1.0"
                                            alt="visual"
                                            className="absolute h-50 w-50 object-cover rounded-tl-3xl -z-1 -bottom-1 -right-4 grayscale-50 saturate-50"
                                        />
                                    </motion.div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            }
            <style jsx>
                {
                    `
                       /* AnimatedGradientLine.css */

                        .gradient-line {
                            background: linear-gradient(90deg, #9ec9c5, #0b4b44, #084126, #0b4b44, #9ec9c5);
                            background-size: 200% 100%;
                            display: inline-block;
                            width: 50%; /* Fixed width for the gradient */
                            animation: gradient-animation 3s infinite linear;
                        }

                        @keyframes gradient-animation {
                            0% {
                                background-position: 200% 0;
                            }
                            100% {
                                background-position: -200% 0;
                            }
                        }

                    `
                }
            </style>
        </div >
    );
}