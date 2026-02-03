import Link from "next/link";
import { AuroraText } from "../ui/aurora-text";
import { MotionDiv, MotionH2 } from "../motion/motion-client";
import { ContentLink } from "@/lib/model";
import { cn } from "@/lib/utils";

type FooterProps = {
    title: string;
    descriptions: string[];
    link: ContentLink
};

type TextWithLinkProps = {
    text: string;
    link?: {
        text: string;
        slug: string;
    };
    className?: string;
};

export const TextWithLink = ({
    text,
    link,
    className = "",
}: TextWithLinkProps) => {

    if (!link?.text) {
        return <span className={cn(className)}>{text}</span>;
    }

    const regex = new RegExp(`(${link.text})`, "gi");
    const parts = text?.split(regex);

    return (
        <span className={cn("text-base", className)}>
            {parts.map((part, i) =>
                part.toLowerCase() === link.text.toLowerCase() ? (
                    //   <LinkPreview key={i} url={(process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_LIVE_SITE_URL : process.env.NEXT_PUBLIC_LOCAL_SITE_URL) + `/services/${link.slug}#content`} className="font-medium text-teal-500 underline underline-offset-4 decoration-teal-400/50 transition hover:text-teal-400 hover:decoration-teal-400">
                    //     {part}
                    // </LinkPreview>
                    <Link
                        key={i}
                        href={`/contact`}
                        className="font-medium text-teal-500 underline underline-offset-4 decoration-teal-400/50 transition hover:text-teal-400 hover:decoration-teal-400"
                    >
                        {part}
                    </Link>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </span>
    );
};



export default function ServiceFooter({ title, descriptions, link }: FooterProps) {
    return (
        <footer className="relative overflow-hidden z-1">
            {/* Gradient Border */}

            <div className="mx-auto max-w-7xl px-6 py-20 text-center">
                {/* Title */}
                <MotionH2 initial={{ y: 50 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: .2 }} className="text-3xl md:text-6xl font-semibold tracking-tight text-white">
                    <AuroraText>{title}</AuroraText>
                </MotionH2>

                {/* Description */}
                <MotionDiv initial={{ opacity: .4 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .2 }}
                    className="mt-6 space-y-4 text-base font-light md:text-lg text-white/80 max-w-4xl mx-auto">
                    <TextWithLink text={descriptions.join("\n")} link={link} />
                </MotionDiv>
            </div>
        </footer>
    );
}
