"use client"

import { PulsingBorder } from "@paper-design/shaders-react"
import { AnimatePresence, motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"
import { useRef, useState } from "react"
import AnimatedPlaceholderInput from "../custom/placeholder-animate-input"
import { BorderBeam } from "./border-beam"
import { RainbowButton } from "./rainbow-button"
import { Send } from "lucide-react"
import { TextAnimate } from "./text-animate"
import { TypingAnimation } from "./typing-animation"
import { Iphone } from "./iphone"
import { cn } from "@/lib/utils"

const PLACEHOLDERS = [
    "Search anything…",
    "Ask AI for help…",
    "Query something you want…",
];


export default function ChatBox() {
    const [open, setOpen] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false)
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

    return (
        <div className="fixed bottom-2 right-2 md:bottom-8 md:right-8 z-10000">
            <AnimatePresence>
                {
                    open &&
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                            type: "spring",
                            mass: 0.5,
                            damping: 11.5,
                            stiffness: 100,
                        }}
                        style={{ transformOrigin: "bottom right" }}  // <-- key line
                    >
                        <Iphone className="w-50 h-[85vh] md:h-[80vh] lg:h-[70vh]">
                            <div className="absolute inset-0 z-100 h-full border border-neutral-900 bg-[url(https://images.unsplash.com/photo-1687371804876-0f70072af9aa?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center rounded-2xl bg-teal-900/90 bg-blend-luminosity">
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
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "50%",
                                            margin: "auto"
                                        }}
                                    />
                                    <h1 className="text-center ">
                                        <TextAnimate className="text-2xl text-shadow-2xs">Clarity Through AI</TextAnimate>
                                    </h1>
                                    <p className="text-center">
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
                                                        ? "bg-white ml-auto text-neutral-900 self-end before:content-[''] before:absolute before:-right-2 before:bottom-3 before:border-t-8 before:border-l-8 before:border-t-transparent before:border-l-white"
                                                        : "bg-teal-900 text-gray-200 self-start before:content-[''] before:absolute before:-left-2 before:bottom-3 before:border-t-8 before:border-r-8 before:border-t-transparent before:border-r-teal-900"
                                                )}
                                            >
                                                {msg.text}
                                            </div>
                                        ))}
                                        {
                                            loading &&
                                            <div
                                                className={cn(
                                                    "relative max-w-[80%] w-fit px-3 py-1.5 text-xs font-light rounded-md", "bg-teal-900 text-gray-200 self-start before:content-[''] before:absolute before:-left-2 before:bottom-3 before:border-t-8 before:border-r-8 before:border-t-transparent before:border-r-teal-900"
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
                    </motion.div>
                }
            </AnimatePresence>
            <div role="button" onClick={e => setOpen(!open)}>
                <Tooltip>
                    <TooltipTrigger role="button" className="relative w-20 h-20 md:w-14 md:h-14 flex items-center justify-center cursor-pointer ml-auto">
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
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                            }}
                        />

                        {/* Rotating Text Around the Pulsing Border */}
                        <motion.svg
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 100 100"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 20,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                            style={{ transform: "scale(1.6)" }}
                        >
                            <defs>
                                <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                            </defs>
                            {/* <text className="text-sm fill-white/80 font-medium">
                        <textPath href="#circle" startOffset="0%">
                            Wellcode • Studio • ChatAi • Hello •
                        </textPath>
                    </text> */}
                        </motion.svg>
                    </TooltipTrigger>
                    <TooltipContent>Hey Whatsapp!</TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}