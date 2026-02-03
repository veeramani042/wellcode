import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from "framer-motion"
import { ShinyButton } from './shiny-button';
import { RainbowButton } from './rainbow-button';

interface FixedScrollServicesProps {
    badgeText?: string;
    title: React.ReactNode;
    description: React.ReactNode;
    ctaText: string;
    ctaHref: string;
    className?: string;
}

export const FixedScrollServices = ({
    title,
    description,
    ctaText,
    ctaHref,
    className,
}: FixedScrollServicesProps) => {

    return (
        <div
            className={cn(
                'relative w-full mx-auto py-32 sm:py-40 px-4',
                className
            )}
        >
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="tracking-tighter mb-4 max-w-3xl">
                    {title}
                </div>
                <div className="max-w-xl text-lg text-muted-foreground mb-8">
                    {description}
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex gap-2"
                >
                    <RainbowButton link={ctaHref} className="flex gap-2 py-5 px-6 md:py-6 md:px-10 text-neutral-700 text-lg font-semibold rounded-4xl">
                        {ctaText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </RainbowButton>
                </motion.div>
            </div>
        </div>
    );
};