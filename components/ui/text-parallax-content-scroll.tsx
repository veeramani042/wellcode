'use client'
import React, { PropsWithChildren, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AuroraText } from "./aurora-text";

const HomeAbout = ({ }) => {
    return (
        <div>
            <TextParallaxContent
                imgUrl="/assets/images/image01.jpg"
                videoUrl="./assets/videos/home.mp4"
            >
                {/* <Details />? */}
            </TextParallaxContent>
        </div>
    );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, children, videoUrl }: PropsWithChildren<{ imgUrl?: string, videoUrl?: string }>) => {
    return (
        <div>
            <div className="relative">
                <StickyImage imgUrl={imgUrl} videoUrl={videoUrl} />
                <OverlayCopy />
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl, videoUrl }: PropsWithChildren<{ imgUrl?: string, videoUrl?: string }>) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, .5], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: videoUrl ? "" : `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(${80}vh - ${IMG_PADDING}px)`,
                // top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden bg-neutral-950 rounded-3xl"
        >
            {
                videoUrl &&
                <video src={videoUrl} className="absolute inset-0 object-cover" autoPlay loop muted playsInline controls={false} ></video>
            }

            <motion.div
                className="absolute inset-0 bg-neutral-950/95"
                style={{ opacity, }}
            />
            {/* <ColorBends /> */}
        </motion.div>
    );
};

const OverlayCopy = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-[60vh] w-full flex-col items-center justify-center text-white"
        >
            <div className="px-8 mt-40">
                <h4 className="text-3xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                    Your One-Stop Solution
                    <AuroraText className="ml-2"> Technology and Creative Services</AuroraText>
                </h4>
                <p className="text-base max-w-2xl my-4 mx-auto text-center font-normal dark:text-neutral-300">Your vision, our expertise – whether you’re buying a home, enhancing your images, or pioneering in AI, we make it happen</p>
            </div>
        </motion.div>
    );
};


export default HomeAbout