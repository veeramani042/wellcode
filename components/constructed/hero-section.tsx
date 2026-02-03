import BeamsBackground from '../ui/beams-background'
import { LayoutTextFlip } from '../ui/layout-text-flip'
import { RainbowButton } from '../ui/rainbow-button'
import { ShinyButton } from '../ui/shiny-button'
import BlobPolymerScene from '../ui/blob-polymer-scene'
import { servicesData } from '@/lib/utils'
import HeroSearch from '../custom/search-hero-component'
import { MotionDiv, MotionP } from '../motion/motion-client'

type Props = {
    animate: Boolean,
}

const HeroSection = ({ animate = true }: Props) => {
    return (
        <section className="relative min-h-[calc(100vh + 350px)">
            <BeamsBackground>
                <div className="container mx-auto text-center relative px-6 md:px-3">
                    <HeroSearch
                        animate={true}
                        categories={[...servicesData]}
                    />
                    <LayoutTextFlip
                        className="lg:text-7xl sm:text-5xl text-3xl font-semibold whitespace-pre-line sm:font-normal text-white text-shadow-2xs capitalize"
                        text="Welcome to "
                        words={servicesData.map(ele => ele.title)}
                    />
                    <MotionP
                        initial={animate && { opacity: 0, y: 50 }}
                        whileInView={animate && { opacity: 1, y: 0 }}
                        viewport={animate && { once: true, amount: 0.5 }}
                        transition={animate && { duration: 0.7, ease: "easeOut" }}
                        className="max-w-3xl mx-auto mt-5 text-sm sm:text-base text-neutral-300"
                    >
                        You have discovered one of the top outsource providers for your business requirements. Save time and resources by partnering with reliable experts at Outsource Infotech in Image Editing, Software Development, and more.
                    </MotionP>
                    <MotionDiv
                        initial={animate && { opacity: 0, y: 50 }}
                        whileInView={animate && { opacity: 1, y: 0 }}
                        viewport={animate && { once: true, amount: 0.5 }}
                        transition={animate && { duration: 0.10, ease: "easeOut" }}
                        className="flex items-center justify-center gap-5 mt-7"
                    >
                        <RainbowButton link="/contact" className="py-1" variant={"outline"}>Contact us</RainbowButton>
                        <ShinyButton link="/services" className="text-capitalize">Learn More</ShinyButton>
                    </MotionDiv>
                </div>
            </BeamsBackground>
            {/* <DotPattern /> */}
            {/* <BlobPolymerScene /> */}
            <div className="w-full absolute bottom-[-150px] h-100 z-10" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 55%, rgb(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)' }}></div>
        </section>
    )
}

export default HeroSection