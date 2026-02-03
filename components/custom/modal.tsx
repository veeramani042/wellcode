"use client";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface PortalModalProps {
    children: ReactNode;
    onClose: () => void;
    className?: string
    open: boolean
}

export function PortalModal({ children, open = false, onClose, className = "" }: PortalModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const originalOverflow = document.body.style.overflow;
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = originalOverflow || "";
        }
        return () => {
            document.body.style.overflow = originalOverflow || "";
        };
    }, [open, mounted]);
    if (!mounted) return null;

    return createPortal(
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                />
            )}

            {open && (
                <motion.div
                    key="modal"
                    layout
                    onClick={onClose}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={cn(
                        "fixed inset-0 z-10000 flex flex-col items-center justify-center m-2 p-2",
                        className
                    )}
                >
                    <div onClick={(e) => e.stopPropagation()}>{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
        ,
        document.body
    );
}