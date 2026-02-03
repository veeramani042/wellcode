import LandingFooter from '@/components/constructed/landing-footer'
import ServiceHero from '@/components/constructed/service-hero'
import ServiceItems from '@/components/constructed/service-items'
import ServiceItemSections from '@/components/constructed/service-items-sections'
import StrengthSection from '@/components/constructed/service-strength'
import ScrollSmoothWrapper from '@/components/custom/scroll-smoothner'

export const dynamic = "force-static"; // ensures SSG

type Props = {}

const ServicesPage = (props: Props) => {
    return (
        <ScrollSmoothWrapper>
            <ServiceHero />
            <ServiceItems />
            <ServiceItemSections />
            <StrengthSection />
            <LandingFooter />
        </ScrollSmoothWrapper>
    )
}

export default ServicesPage