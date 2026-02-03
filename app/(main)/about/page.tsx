import AboutFeautres from '@/components/constructed/about-feature'
import AboutHero from '@/components/constructed/about-hero'
import AboutTimeline from '@/components/constructed/about-timeline'
import AboutWorkPlatforms from '@/components/constructed/about-work-platforms'
import LandingFooter from '@/components/constructed/landing-footer'
import ServiceManagement from '@/components/constructed/service-management'
import ComingSoonSection from '@/components/custom/comming-soon'
import ScrollSmoothWrapper from '@/components/custom/scroll-smoothner'
import type { Metadata } from "next";

type Props = {}

export const metadata: Metadata = {
    title: 'About Wellcode Studio | Creative, Image Editing & Digital Experts',
    description: 'Learn about Wellcode Studio, a service-based creative and digital solutions company delivering real estate image editing, design, and custom software services.'
}

export const dynamic = "force-static"; // ensures SSG

function AboutPage({ }: Props) {
    return (
        <ScrollSmoothWrapper>
            <AboutHero />
            <AboutFeautres />
            <AboutTimeline />
            <ServiceManagement />
            {/* <AboutWorkPlatforms /> */}
            <ComingSoonSection />
            <LandingFooter />
        </ScrollSmoothWrapper>
    )
}

export default AboutPage