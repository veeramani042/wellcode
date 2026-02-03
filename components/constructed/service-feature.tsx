
import { AuroraText } from "../ui/aurora-text";
import ScrollViewTrigger from "../custom/scrollview-trigger";
import { MotionDiv } from "../motion/motion-client";

const ServiceFeature = () => {
    return (
        <section className="relative z-1 px-2">
            <ScrollViewTrigger className="relative py-15 md:py-24">
                <MotionDiv className={`grid grid-cols-1 gap-5 sm:gap-10 md:gap-8 w-full max-w-6xl mx-auto items-center md:grid-cols-2`}>
                    <MotionDiv
                        className={`flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0`}
                        initial={{ x: -200, opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut", }}
                    >
                        <div className="md:pt-20">
                            <h2 className="text-5xl md:text-6xl leading-tight ">
                                Powerful Features Backed by Skilled Execution
                            </h2>
                            <p className="text-sm max-w-sm my-4 text-neutral-500 font-normal dark:text-neutral-300">
                                Wellcode Studio delivers feature-rich solutions powered by skilled professionals, streamlined workflows, and quality-focused execution. From real estate photo editing and advanced image retouching to creative design and custom digital development, every service is built for accuracy, consistency, and scalability—so you get results without complexity.
                            </p>
                        </div>
                    </MotionDiv>
                    <MotionDiv
                        className={`relative mt-10 md:mt-0 mx-auto w-full max-w-[300px] md:max-w-[471px]`}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: .6, ease: "easeOut", delay: 0.6 }}
                    >
                        <MotionDiv
                            className={`absolute w-[300px] h-[317px] md:w-[472px] md:h-[500px] bg-[#090909] rounded-4xl z-0`}
                            style={{
                                top: '10%',
                                bottom: 'auto',
                                left: '-18%',
                                right: 'auto',
                                transform: 'translateY(10%)',
                                filter: 'blur(2px)'
                            }}
                            initial={{ y: 0 }}
                            whileInView={{ y: -30 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div
                                className="relative w-full h-full bg-cover bg-center rounded-4xl"
                                style={{
                                    backgroundImage: `url(/assets/images/service-images/real_estate_service/real_estate_home_01.avif)`,
                                }}
                            />
                        </MotionDiv>
                        <MotionDiv
                            className="relative w-full h-[405px] md:h-[637px] bg-[#ffffff0a] rounded-4xl backdrop-blur-[15px] backdrop-brightness-100 border-0 z-10 overflow-hidden"
                            initial={{ y: 0 }}
                            whileInView={{ y: 30 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="p-0 h-full">
                                <div
                                    className="h-full relative"
                                    style={{
                                        backgroundSize: "100% 100%",
                                    }}
                                >
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(/assets/images/service-images/real_estate_service/real_estate_home.avif)`,
                                        }}
                                    />
                                </div>
                            </div>
                        </MotionDiv>
                    </MotionDiv>
                </MotionDiv>
            </ScrollViewTrigger>
            <div className="absolute -inset-30 -z-10 pointer-events-none bg-linear-to-br to-[#3b82f6]/5 via-transparent from-[#a855f7]/5 blur-3xl" />
            {/* <div className="w-full bg-linear-to-b from-transparent via-[#000000] to-transparent absolute top-[-30px] h-60"></div> */}
        </section>
    )
}

export default ServiceFeature