"use client"
import React, { PropsWithChildren } from 'react'
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';


type Props = PropsWithChildren<{
    className?: string
    containerVariants?: any
    itemVariants?: any
    childClassName?: string
    amount?: number
}>

const defaultContainerVariants = {
    hidden: {

    },
    visible: {
        transition: {
            staggerChildren: 0.2,
        }
    },
};

const defaultitemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ScrollViewTrigger = ({ children, 
    className, 
    childClassName, 
    containerVariants = defaultContainerVariants, 
    itemVariants = defaultitemVariants,
     amount = 0.2 }: Props) => {
    return (
        <motion.div
            className={cn(className)}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount }}
        >
            <motion.div
                className={cn(childClassName)}
                variants={itemVariants}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

export default ScrollViewTrigger