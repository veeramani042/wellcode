"use client"

import { ServiceInformation, ServiceSection } from '@/lib/model'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { CircleSmall } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BorderBeam } from '../ui/border-beam'
import { useMediaQuery } from '@/hooks/use-media-query'
import serviceJson from "@/lib/services.json"

type Props = {
    className?: string;
    animate: boolean;
    categories?: ServiceSection[]
}

const Highlight = ({
    text,
    query,
    className = ""
}: {
    text: string;
    query: string;
    className?: string
}) => {
    if (!query) return <>{text}</>;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return (
        <p className={cn("text-base", className)}>
            {parts.map((part, i) =>
                part.toLowerCase() === query.toLowerCase() ? (
                    <span key={i} className="text-teal-600">
                        {part}
                    </span>
                ) : (
                    part
                )
            )}
        </p>
    );
};

const HeroSearch = ({
    categories = [],
    animate = true,
    className = ""
}: Props) => {

    const pathname = usePathname()
    const [query, setQuery] = useState("")
    const [menus, setMenus] = useState<ServiceInformation[]>([])

    // ✅ FIX: hydration-safe mount check
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // ✅ hook is ALWAYS called (no rule violation)
    const isMobile = useMediaQuery("(max-width: 500px)")

    useEffect(() => {
        const handler = setTimeout(() => {
            const normalizedQuery = query.toLowerCase().trim();

            if (!normalizedQuery) {
                setMenus([]);
                return;
            }

            const filteredServices = serviceJson.filter(service =>
                service.service_title.toLowerCase().includes(normalizedQuery)
            ) as ServiceInformation[];

            setMenus(filteredServices);
        }, 300);

        return () => clearTimeout(handler);
    }, [query]);

    return (
        <div className={cn("", className)}>
            <div className="mb-8 md:mb-14 flex justify-center">
                <div className="relative z-10 w-full max-w-2xl rounded-4xl bg-white/10 dark:bg-white/5 backdrop-blur-xl ring-1 ring-white/20">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-200">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-80">
                            <path
                                d="M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>

                    <input
                        type="text"
                        onChange={e => setQuery(e.target.value)}
                        placeholder="What solution are you looking for ?"
                        className="w-full pl-12 pr-16 py-3 bg-transparent text-white placeholder:text-slate-300/70 outline-none rounded-2xl text-sm md:text-base"
                        aria-label="Search"
                    />

                    <AnimatePresence>
                        {menus.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="absolute z-50 mt-2 w-full rounded-lg bg-white dark:bg-neutral-900 shadow-lg border border-gray-200 dark:border-neutral-700 overflow-hidden text-left"
                            >
                                <ul className="overflow-y-auto max-h-150">
                                    {menus.map((menu, i) => (
                                        <li key={i}>
                                            <Link
                                                href={`/services/${menu.slug}#content`}
                                                className="cursor-pointer"
                                            >
                                                <div className="flex gap-5 items-center pt-4 px-5">
                                                    <CircleSmall color="#ffffff60" size={18} />
                                                    <Highlight text={menu.service_title} query={query} />
                                                </div>
                                                <div className="px-15 pt-2 pb-4 text-sm text-muted-foreground">
                                                    <Highlight
                                                        text={menu.header.descriptions.join(" ")}
                                                        query={query}
                                                        className="text-sm text-muted-foreground"
                                                    />
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <motion.div
                initial={mounted && animate ? { y: 80, opacity: 0 } : false}
                whileInView={mounted && animate ? { y: [80, -10, 0], opacity: 1 } : undefined}
                transition={{ duration: 1, ease: "easeOut", bounce: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex gap-2 max-w-6xl mx-auto justify-center flex-wrap mb-10 cursor-pointer"
            >
                <Link
                    href="/"
                    className={cn(
                        "relative overflow-hidden px-3 md:px-5 py-2 md:py-3 text-sm text-white/90 rounded-4xl bg-white/5 backdrop-blur-xl border border-transparent transition-colors duration-300 hover:bg-teal-500/20 hover:border-teal-800",
                        pathname === "/" && "bg-teal-500/20 border-teal-800"
                    )}
                >
                    Home
                    <BorderBeam size={40} initialOffset={20} className="from-transparent via-teal-800 to-transparent" />
                </Link>

                {serviceJson
                    .slice(0, mounted && isMobile ? 5 : 10)
                    .map((item, i) => (
                        <Link
                            key={i}
                            href={`/services/${item.slug}#content`}
                            className={cn(
                                "relative capitalize overflow-hidden px-3 md:px-5 py-2 md:py-3 text-sm text-white/90 rounded-4xl bg-white/5 backdrop-blur-xl border border-transparent transition-colors duration-300 hover:bg-teal-500/20 hover:border-teal-800",
                                pathname.includes(item.slug) && "bg-teal-500/20 border-teal-800"
                            )}
                        >
                            {item.service_title}
                            <BorderBeam size={40} initialOffset={20} className="from-transparent via-teal-800 to-transparent" />
                        </Link>
                    ))}
            </motion.div>
        </div>
    )
}

export default HeroSearch
