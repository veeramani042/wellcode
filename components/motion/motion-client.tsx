"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { PropsWithChildren } from "react";

// Div
export const MotionDiv = (props: PropsWithChildren<HTMLMotionProps<"div">>) => {
    return <motion.div {...props} />;
};

// Span
export const MotionSpan = (props: PropsWithChildren<HTMLMotionProps<"span">>) => {
    return <motion.span {...props} />;
};

// Headings
export const MotionH1 = (props: PropsWithChildren<HTMLMotionProps<"h1">>) => {
    return <motion.h1 {...props} />;
};
export const MotionH2 = (props: PropsWithChildren<HTMLMotionProps<"h2">>) => {
    return <motion.h2 {...props} />;
};
export const MotionH3 = (props: PropsWithChildren<HTMLMotionProps<"h3">>) => {
    return <motion.h3 {...props} />;
};
export const MotionH4 = (props: PropsWithChildren<HTMLMotionProps<"h4">>) => {
    return <motion.h4 {...props} />;
};
export const MotionH5 = (props: PropsWithChildren<HTMLMotionProps<"h5">>) => {
    return <motion.h5 {...props} />;
};
export const MotionH6 = (props: PropsWithChildren<HTMLMotionProps<"h6">>) => {
    return <motion.h6 {...props} />;
};

// Paragraph
export const MotionP = (props: PropsWithChildren<HTMLMotionProps<"p">>) => {
    return <motion.p {...props} />;
};

// Anchor
export const MotionA = (props: PropsWithChildren<HTMLMotionProps<"a">>) => {
    return <motion.a {...props} />;
};

// Button
export const MotionButton = (props: PropsWithChildren<HTMLMotionProps<"button">>) => {
    return <motion.button {...props} />;
};
