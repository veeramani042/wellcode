import BeamsBackground from '@/components/ui/beams-background'
import { LayoutTextFlip } from '@/components/ui/layout-text-flip'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { ShinyButton } from '@/components/ui/shiny-button'
import BlobPolymerScene from '@/components/ui/blob-polymer-scene'
import { cn, servicesData } from '@/lib/utils'
import DotPattern from '@/components/ui/dot-pattern'
import HeroSearch from '@/components/custom/search-hero-component'
import { MotionDiv, MotionP } from '@/components/motion/motion-client'
import { AuroraText } from '@/components/ui/aurora-text'
import { ChevronRight } from 'lucide-react'
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'

type Props = {
    animate?: Boolean,
}

const HeroSection = ({ animate = true }: Props) => {
    return (
        <section className="relative min-h-screen">
            <BeamsBackground>
                <div className="container mx-auto text-center relative">
                    <h1 className="md:text-8xl text-3xl text-white text-shadow-2xs capitalize">
                        <AuroraText>REAL ESTATE INTELLIGENCE.</AuroraText>
                    </h1>
                    <MotionP
                        initial={animate && { opacity: 0, y: 50 }}
                        whileInView={animate && { opacity: 1, y: 0 }}
                        viewport={animate && { once: true, amount: 0.5 }}
                        transition={animate && { duration: 0.7, ease: "easeOut" }}
                        className="max-w-3xl mx-auto mt-5 text-md text-neutral-500 mb-10"
                    >
                        You have discovered one of the top outsource providers for your business requirements. Save time and resources by partnering with reliable experts at Outsource Infotech in Image Editing, Software Development, and more.
                    </MotionP>
                    <HeroSearch
                        animate={true}
                        categories={[servicesData[0]]}
                    />
                </div>
            </BeamsBackground>
            <DotPattern />
            <BlobPolymerScene />
            <div className="w-full absolute bottom-[-150px] h-100 z-10" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 55%, rgb(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)' }}></div>
        </section>
    )
}

export default HeroSection