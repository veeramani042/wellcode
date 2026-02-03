"use client"
import { useEffect, useRef, useState } from "react";
import { MotionDiv } from "../motion/motion-client";
import { AuroraText } from "../ui/aurora-text";
import { cn } from "@/lib/utils";
import { ShineBorder } from "../ui/shine-border";
import { BorderBeam } from "../ui/border-beam";
import { ChevronDown, MessageCircleQuestionMark, Minus, Plus, Send } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { Iphone } from "../ui/iphone";
import { TypingAnimation } from "../ui/typing-animation";
import { TextAnimate } from "../ui/text-animate";
import AnimatedPlaceholderInput from "../custom/placeholder-animate-input";
import { RainbowButton } from "../ui/rainbow-button";

/* =======================
   Types
======================= */
interface FAQItem {
    q: string;
    a: string;
}

interface FAQCategory {
    category: string;
    items: FAQItem[];
}

/* =======================
   Data
======================= */
const faqData: FAQCategory[] = [
    {
        category: "General",
        items: [
            {
                q: "What is this platform?",
                a: "A premium system designed for performance, scalability, and refined user experience.",
            },
            {
                q: "Who is this for?",
                a: "Built for startups, enterprises, and teams who value speed and quality.",
            },
            {
                q: "Is there a free trial?",
                a: "Yes, we offer a 14-day risk-free trial with full access.",
            },
            {
                q: "Do you offer refunds?",
                a: "We provide a 30-day money-back guarantee.",
            },
        ],
    },
    {
        category: "Security",
        items: [
            {
                q: "How is data protected?",
                a: "All data is encrypted using industry-standard AES-256 encryption.",
            },
            {
                q: "Do you support SSO?",
                a: "Yes, SAML and OAuth based SSO is available on enterprise plans.",
            },
            {
                q: "Is our data shared?",
                a: "Never. Your data remains private and isolated.",
            },
        ],
    },
    {
        category: "Billing",
        items: [
            {
                q: "Can I change my plan?",
                a: "You can upgrade or downgrade your plan at any time.",
            },
            {
                q: "What payment methods are supported?",
                a: "We support all major credit cards and invoicing for enterprises.",
            },
            {
                q: "Are there hidden fees?",
                a: "No. What you see is exactly what you pay.",
            },
        ],
    },
];

/* =======================
   Component
======================= */

const PLACEHOLDERS = [
    "Search anything…",
    "Ask AI for help…",
    "Query something you want…",
];

type FAQ = {
    question: string;
    answer: string;
};

type ServiceContent = {
    title: string;
    faqs: FAQ[];
};

export default function ServiceFaQ({ faqs }: { faqs: FAQ[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState("")
    const [items, setItems] = useState<FAQ[]>(faqs.slice(0, 5))
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hey whatsapp, Is anything to ask?",
            timeStamp: Date.now(),
            from: "MODEL"
        }
    ])

    const handleSendText = () => {
        if (!inputRef?.current) return
        if (inputRef.current?.value !== "") {
            setMessages(prev => {
                return [...prev, {
                    id: messages.length + 1,
                    from: "USER",
                    timeStamp: Date.now(),
                    text: inputRef?.current?.value || ""
                }]
            })
            inputRef.current.value = ""
            setLoading(true)
        }
        setTimeout(() => { setLoading(false) }, 2000)
    }

    useEffect(() => {
        if (!query) {
            setItems(messages => faqs.slice(0, 5))
        } else {
            setItems(messages => faqs.filter(q => q.question.toLocaleLowerCase().includes(query)).slice(0, 5))
        }
    }, [query])

    return (
        <section className="py-28 relative">
            <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br to-[#3b82f6]/5 via-transparent from-[#a855f7]/5 blur-3xl" />
            <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br to-[#3b82f6]/25 via-transparent from-[#a855f7]/10 blur-3xl" />
            <MotionDiv
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center"
            >
                <AuroraText className="block text-4xl mb-5 leading-tight md:text-5xl lg:text-7xl">
                    Help center & Knowledge Base
                </AuroraText>

                <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
                    Find anwsers instanly from our cruated database or ask our AI assistant for personalized support.
                </p>
            </MotionDiv>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-10 items-center gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="col-span-10 md:col-span-7 relative z-10"
                >
                    <div className="relative z-10 w-full max-w-2xl rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-xl ring-1 ring-white/20" >
                        {/* Icon */}
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-100">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-80" >
                                <path d="M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <BorderBeam
                            size={40}
                            initialOffset={20}
                            className="from-transparent via-yellow-500 to-transparent"
                        // transition={{
                        //     type: "spring",
                        //     stiffness: 60,
                        //     damping: 20,
                        // }}
                        />
                        {/* Input */}
                        <input type="text"
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Search 100+ articles (e.g. 'Billing details')..."
                            className="w-full pl-12 pr-16 py-4 md:py-3 bg-transparent text-white placeholder:text-slate-300/70 outline-none rounded-2xl text-sm md:text-base"
                            aria-label="Search"
                        />
                    </div>
                    <div className="flex gap-3 items-center flex-wrap mt-8">
                        {
                            ["All", "Generel", "Billing", "API", "Security", "Account", "Delivery Time"].map((item) => {
                                return <div className={cn("px-5 py-2 text-sm inline-flex gap-2 rounded-md bg-white/5 backdrop-blur-3xl font-light text-muted-foreground reltaive cursor-pointer hover:bg-purple-900/30 ", item === "All" && "bg-purple-900/30")} key={item}>

                                    {item}
                                    {/* <span className="rounded-full min-w-6 text-center content-center text-xs text-white bg-teal-900">{Math.floor(Math.random() * 20)}</span> */}
                                </div>
                            })
                        }
                    </div>
                    <div className="space-y-4 w-full mt-6 max-h-[600px] overflow-auto glass-scroll">
                        {items.map((faq, i) => {
                            const isOpen = openIndex === i;
                            return (
                                <div
                                    key={i}
                                    onClick={() => setOpenIndex(i)}
                                    className={`px-4 py-6 rounded-lg cursor-pointer bg-linear-to-br bg-purple-900/10 backdrop-blur-xl flex gap-5 border border-purple-900/30`}
                                >
                                    <div className="">
                                        <MessageCircleQuestionMark className={cn("text-white/20", isOpen && "text-white/60")} />
                                    </div>
                                    <div className="grow">
                                        <div
                                            className="flex justify-between cursor-pointer items-center w-full text-left text-white/80 text-sm md:text-base"
                                        >
                                            <span>{faq.question}</span>
                                            <span className="text-2xl text-muted-foreground select-none">
                                                {isOpen ? <Plus /> : <Minus />}
                                            </span>
                                        </div>
                                        <AnimatePresence initial={false}>
                                            {isOpen && faq.answer && (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="mt-3 text-gray-400 text-sm leading-relaxed bg-purple-900/5 backdrop-blur-3xl p-4 rounded-lg">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-3">
                        <RainbowButton onClick={(e) => setItems(items.length === 5 ? faqs : faqs.slice(0, 5))}>{items.length === 5 ? "View More" : "See Less"}</RainbowButton>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="col-span-10 md:col-span-3 relative"
                >
                    <Iphone>
                        <div className="absolute inset-0 z-10 h-full border border-neutral-900 bg-[url(https://images.unsplash.com/photo-1687371804876-0f70072af9aa?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center rounded-2xl bg-black/60 bg-blend-soft-light">
                            <div className="h-[50%] content-center relative overflow-hidden p-2">
                                <PulsingBorder
                                    colors={["#06b6d4", "#0891b2", "#f97316", "#00FF88", "#FFD700", "#FF6B35", "#ffffff"]}
                                    colorBack="#00000000"
                                    speed={1.5}
                                    roundness={1}
                                    thickness={0.1}
                                    softness={0.2}
                                    intensity={5}
                                    spotSize={0.1}
                                    pulse={0.1}
                                    smoke={0.5}
                                    smokeSize={4}
                                    scale={0.65}
                                    rotation={0}
                                    frame={9161408.251009725}
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        borderRadius: "50%",
                                        margin: "auto"
                                    }}
                                />
                                <h1 className="text-center ">
                                    <TextAnimate className="text-2xl text-shadow-2xs">Clarity Through AI</TextAnimate>
                                </h1>
                                <p className="text-center ">
                                    <TypingAnimation className="text-sm text-muted-foreground text-shadow-2xs">Get clear, contextual answers powered by advanced reasoning.</TypingAnimation>
                                </p>
                            </div>
                            <div className="flex flex-col justify-end h-[50%] gap-2 p-2">
                                <div
                                    className="flex-1 overflow-y-auto px-3 py-2 space-y-2 content-end"
                                    style={{ scrollbarWidth: "thin" }}
                                >
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={cn(
                                                "relative max-w-[80%] w-fit px-3 py-1.5 text-xs font-light rounded-md",
                                                msg.from === "USER"
                                                    ? "bg-indigo-600 ml-auto text-white self-end before:content-[''] before:absolute before:-right-2 before:bottom-3 before:border-t-[8px] before:border-l-[8px] before:border-t-transparent before:border-l-indigo-600"
                                                    : "bg-purple-900 text-gray-200 self-start before:content-[''] before:absolute before:-left-2 before:bottom-3 before:border-t-[8px] before:border-r-[8px] before:border-t-transparent before:border-r-purple-900"
                                            )}
                                        >
                                            {msg.text}
                                        </div>
                                    ))}
                                    {
                                        loading &&
                                        <div
                                            className={cn(
                                                "relative max-w-[80%] w-fit px-3 py-1.5 text-xs font-light rounded-md", "bg-purple-900 text-gray-200 self-start before:content-[''] before:absolute before:-left-2 before:bottom-3 before:border-t-[8px] before:border-r-[8px] before:border-t-transparent before:border-r-purple-900"
                                            )}
                                        >
                                            <div className="flex items-center gap-1 py-1">
                                                {[0, 0.2, 0.4].map((delay, i) => (
                                                    <motion.span
                                                        key={i}
                                                        className="w-1 h-1 bg-white/80 rounded-full"
                                                        animate={{ y: [0, -4, 0] }}
                                                        transition={{
                                                            duration: 0.6,
                                                            repeat: Infinity,
                                                            delay,
                                                            ease: "easeInOut"
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="p-2">
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 relative px-5 py-2 bg-neutral-800/30 rounded-3xl border border-neutral-700 overflow-hidden">
                                            <AnimatedPlaceholderInput
                                                // placeholder={text}
                                                // rows={1}
                                                onKeyDown={e => {
                                                    if (e.key === "Enter") {
                                                        handleSendText()
                                                    }
                                                }}
                                                ref={inputRef}
                                                animatedPlaceholder={PLACEHOLDERS}
                                                className="text-sm text-white w-full placeholder-gray-400 focus:outline-none"
                                            />
                                            <BorderBeam
                                                size={40}
                                                initialOffset={20}
                                                className="from-transparent via-yellow-500 to-transparent"
                                            // transition={{
                                            //     type: "spring",
                                            //     stiffness: 60,
                                            //     damping: 20,
                                            // }}
                                            />
                                        </div>
                                        <RainbowButton
                                            onClick={handleSendText}
                                            className="p-2 rounded-full transition"
                                        >
                                            <Send className="w-4 h-4 text-teal-800" />
                                        </RainbowButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Iphone>
                    <svg
                        className="absolute inset-0 -z-10"
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <defs>
                            {/* Base blur */}
                            <filter id="blur-xl" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="15" />
                            </filter>

                            {/* Mid blur */}
                            <filter id="blur-lg" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="12" />
                            </filter>
                        </defs>

                        {/* Base glow */}
                        <ellipse
                            cx="50"
                            cy="50"
                            rx="42"
                            ry="30"
                            fill="rgba(99,102,241,0.45)"
                            filter="url(#blur-xl)"
                        />

                        {/* Mid glow */}
                        <ellipse
                            cx="50"
                            cy="50"
                            rx="32"
                            ry="22"
                            fill="rgba(168,85,247,0.45)"
                            filter="url(#blur-lg)"
                            style={{ mixBlendMode: "screen" }}
                        />

                        {/* Highlight glow */}
                        <ellipse
                            cx="50"
                            cy="45"
                            rx="26"
                            ry="18"
                            fill="rgba(168,85,247,0.35)"
                            filter="url(#blur-lg)"
                            style={{ mixBlendMode: "screen" }}
                        />
                    </svg>

                    <div className="absolute -inset-150 z-0 flex items-center justify-center">
                        <div
                            className="h-[70%] w-[85%] rounded-full blur-[120px] opacity-60
      bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.45)_0%,transparent_70%)]">
                        </div>
                    </div>
                    <div className="absolute -inset-80 z-0 flex items-center justify-center">
                        <div
                            className="h-[55%] w-[70%] rounded-full blur-[100px] opacity-50 mix-blend-screen
      bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.65)_0%,transparent_70%)]">
                        </div>
                    </div>
                    <div className="absolute -inset-20 z-0 flex items-center justify-center">
                        <div
                            className="h-[55%] w-[70%] rounded-full blur-[100px] opacity-50 mix-blend-screen
      bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.90)_0%,transparent_70%)]">
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
