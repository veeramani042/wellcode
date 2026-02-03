import { memo } from "react"
import { Safari } from "../ui/safari"
import { AuroraText } from "../ui/aurora-text"
import { MotionDiv } from "../motion/motion-client"

const WorkComparisonSection = memo(() => {
    return (
        <section className="relative z-10 pb-10 md:pb-24">
            {/* Background glow */}
            <div className="pointer-events-none absolute -inset-12 -z-10 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 blur-3xl" />

            <div className="mx-auto relative max-w-6xl px-4">
                {/* Heading */}
                <MotionDiv
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                >
                    <h2 className="block text-5xl md:text-6xl leading-tight mb-6">
                        What Makes Wellcode Studio Different
                    </h2>

                    <p className="mx-auto max-w-5xl text-base md:text-lg text-white/80 mb-16">
                        We’re not just a service provider—we’re a growth partner. By blending real estate image excellence, advanced retouching, creative design, and custom digital product development, we deliver reliable, scalable solutions that help businesses stand out and convert better in a competitive digital space.
                    </p>
                </MotionDiv>

                {/* Safari preview */}
                <MotionDiv
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="pointer-events-none absolute inset-0 md:-inset-10 -z-10 bg-linear-to-br from-blue-500/20 via-transparent to-purple-500/20 blur-3xl" />

                    <Safari url="wellcodestudio.com" />
                </MotionDiv>
            </div>
        </section>
    )
})

export default WorkComparisonSection
