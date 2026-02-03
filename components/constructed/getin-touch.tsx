"use client"
import React from 'react'
import { motion } from "framer-motion";
import { RainbowButton } from '../ui/rainbow-button';
import { useRouter } from 'next/navigation';

type Props = {}

const GetInTouch = (props: Props) => {
    const router = useRouter()
    return (
        <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .1 }}
            className="mb-25 pt-50 text-center px-2"
        >
            <h2 className="mb-6 text-5xl md:text-6xl leading-tight">
                Let’s Turn Your Ideas Into Results
            </h2>
            <p className="mx-auto mb-8 max-w-5xl text-lg text-muted-foreground text-neutral-300">
                Partner with Wellcode Studio for professional real estate photo editing, advanced image retouching, creative design, and custom digital product development. Let’s build high-quality, scalable solutions that help your business grow faster.
            </p>
            <RainbowButton onClick={e => router.push("/contact")} className='px-5'>Get Started Today</RainbowButton>
        </motion.div>
    )
}

export default GetInTouch