"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] text-white">

            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[160px]" />
                <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center px-6"
            >
                {/* 404 */}
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 120,
                    }}
                    className="text-[40vmin] tracking-tight text-white text-shadow-2xs"
                >
                    404
                </motion.h1>

                {/* Floating subtitle */}
                <motion.p
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-lg md:text-xl text-slate-400 mt-4"
                >
                    Looks like you drifted into the void.
                </motion.p>

                {/* Divider */}
                <div className="mx-auto my-8 h-px w-24 bg-linear-to-r from-transparent via-slate-500 to-transparent" />

                {/* CTA */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                >
                    <RainbowButton
                        link={"/"}
                    >
                        Take me home →
                    </RainbowButton>
                </motion.div>
            </motion.div>
        </div>
    );
}
