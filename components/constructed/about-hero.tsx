// "use client"
import { cn } from '@/lib/utils';
import { MotionDiv } from '../motion/motion-client';
import { TextAnimate } from '../ui/text-animate';
const Image01 = "https://outsource-infotech.com/wp-content/uploads/2024/07/pexels-cottonbro-5082579-1-scaled.jpg"

type Props = {}

const AboutHero = (props: Props) => {
    return (
        <section className="h-screen bg-linear-60 from-teal-950/5 to-teal-950/70 relative overflow-hidden">
            <MotionDiv
                initial={{ x: "50%", rotate: -15, y: "50%" }}
                animate={{ x: "0%", rotate: -15, y: "0%" }}
                style={{ transform: 'rotate(-15deg)', backgroundImage: `url(${Image01})` }}
                className={cn("absolute h-screen w-[70vw] -right-100 -bottom-50 rounded-3xl bg-cover overflow-hidden shadow-2xl")}>
            </MotionDiv>
            {/* <div className="absolute -inset-12 z-10 pointer-events-none bg-linear-to-br from-[#a855f7]/10 via-transparent to-[#3b82f6]/10 blur-3xl" /> */}
            <div className="p-10 sm:p-20 md:p-30 mx-auto h-full flex flex-col justify-between relative z-1">
                <div>
                    {/* <div className="flex flex-wrap mt-20 items-center gap-5">
                        <img src="./wcs_logo.png" className="h-10 sm:h-14 md:h-15 relative z-10 invert-90" alt="WCS Logo" />
                        <div className="text-foreground/90 text-4xl sm:text-6xl md:text-6xl max-w-xl font-semibold text-shadow-cyan-200 text-shadow-2xs">
                            <TextAnimate duration={.6} animation="slideUp" by="character">WellCode</TextAnimate>
                        </div>
                    </div> */}
                    <div className="mt-20 relative">
                        <div
                            style={{ backgroundImage: `url(${Image01})` }}
                            className={cn("block md:hidden h-70 transform sm:-rotate-15 rounded-3xl bg-cover overflow-hidden shadow-2xl")}>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-foreground/90 text-4xl sm:text-6xl md:text-7xl max-w-xxl font-semibold text-shadow-cyan-200 text-shadow-2xs mb-3">
                        <TextAnimate duration={.6} animation="slideUp" by="character">About Well Code Studio</TextAnimate>
                    </h1>
                    <TextAnimate className="text-foreground/90 font-light text-sm max-w-xl leading-[1.8] line-clamp-5" delay={.5} duration={.6} animation="slideUp" by="word">
                        Well Code Studio is a service-driven creative and technology company delivering customized solutions that help businesses stand out and scale faster.
                    </TextAnimate>
                </div>
            </div>
            <div className="absolute -inset-12 pointer-events-none bg-linear-to-br to-teal-800/20 via-transparent from-teal-500/30 blur-3xl" />
        </section >
    )
}

export default AboutHero


