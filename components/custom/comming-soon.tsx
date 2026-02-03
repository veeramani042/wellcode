"use client";

import React from "react";
import { RainbowButton } from "../ui/rainbow-button";
import { ShinyButton } from "../ui/shiny-button";

export default function ComingSoonSection() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center relative">
            <div className="w-full absolute top-[-200px] h-100 z-10" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 55%, rgb(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%)' }}></div>
            <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br to-[#3b82f6]/5 via-transparent from-[#a855f7]/5 blur-3xl" />
            <div className="absolute -inset-12 -z-10 pointer-events-none bg-linear-to-br to-[#3b82f6]/25 via-transparent from-[#a855f7]/10 blur-3xl" />
            <div className="text-center px-6">
                <h1 className="text-8xl tracking-tight mb-4">
                    Coming Soon
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                    We’re working hard to bring you something amazing. Stay tuned!
                </p>
                <div className="flex justify-center space-x-4">
                    <RainbowButton className="px-6 py-2 rounded-md">
                        Notify Me
                    </RainbowButton>
                    <ShinyButton className="px-6 py-2 z-0">
                        Learn More
                    </ShinyButton>
                </div>
            </div>
        </main>
    );
}
