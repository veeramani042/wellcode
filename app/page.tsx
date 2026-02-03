import GetInTouch from "@/components/constructed/getin-touch";
import InfinteWorksGallery from "@/components/constructed/infinte-works-gallery";
import HeroSection from "@/components/constructed/hero-section";
import AboutPhraseParallax from "@/components/constructed/about-phrase-parallax";
import OurFixedServices from "@/components/constructed/our-fixed-services";
import WorkComparisonSection from "@/components/constructed/work-comparsion";
import ServiceFeature from "@/components/constructed/service-feature";
import Testimonial from "@/components/constructed/testimonial";
import FounderQoute from "@/components/constructed/founder-quote";
import LandingFooter from "@/components/constructed/landing-footer";
import ScrollEditedImages from "@/components/constructed/scoll-images";
import ScrollSmoothWrapper from "@/components/custom/scroll-smoothner";

export const dynamic = "force-static"; // ensures SSG

export default function HomePage() {
    return (
        <ScrollSmoothWrapper>
            <HeroSection animate={true} />
            <AboutPhraseParallax />
            <OurFixedServices />
            <ScrollEditedImages />
            <WorkComparisonSection />
            <ServiceFeature />
            <InfinteWorksGallery />
            <Testimonial />
            <FounderQoute />
            <GetInTouch />
            <LandingFooter />
        </ScrollSmoothWrapper>
    );
}