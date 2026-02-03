import HeroSection from "@/components/constructed/hero-section";
import ServiceInfo from "@/components/constructed/service-info";
import Testimonial from "@/components/constructed/testimonial";
import LandingFooter from "@/components/constructed/landing-footer";
import ServiceFaQ from "@/components/constructed/service-faq";
import ScrollSmoothWrapper from "@/components/custom/scroll-smoothner";
import servicesJson from "@/lib/services.json";
import { ServiceInformation } from "@/lib/model";
import ComingSoonSection from "@/components/custom/comming-soon";
import faqJson from "@/lib/faqs.json"
import ServiceFooter from "@/components/constructed/service-footer";

export const dynamic = "force-static"; // ensures SSG

export async function generateStaticParams() {
    return servicesJson.map(el => ({ slug: el.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = servicesJson.find(service => service.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found",
            description: "The requested service does not exist."
        };
    }

    const title = Array.isArray(service.meta_titles)
        ? service.meta_titles[0]
        : service.meta_titles

    const description = Array.isArray(service.meta_descriptions)
        ? service.meta_descriptions[0]
        : service.meta_descriptions || `Learn more about ${service.service_title}.`;

    const schema = service?.meta_schema || {}

    return {
        title,
        description,
        other: {
            // This injects JSON-LD schema directly into head
            "application/ld+json": JSON.stringify(schema),
        },
    };
}

type FAQ = {
    question: string;
    answer: string;
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const service = servicesJson.find(service => {
        return service.slug === slug;
    });

    if (!service) return <ComingSoonSection />

    const faqs = faqJson.find(faq => faq.title === slug) || { faqs: [] }

    return (
        <ScrollSmoothWrapper>
            <HeroSection animate={true} />
            <div id="content">
                <ServiceInfo service={service as ServiceInformation} />
            </div>
            {
                (faqs && faqs.faqs.length > 0) &&
                <ServiceFaQ faqs={faqs?.faqs as FAQ[]} />
            }
            {/* <Testimonial /> */}
            <ServiceFooter
                title={service.footer.title}
                descriptions={service.footer.descriptions}
                link={service.footer.link}
            />
            <LandingFooter />
        </ScrollSmoothWrapper>
    );
}
