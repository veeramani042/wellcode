"use client"

import { cn } from "@/lib/utils"
import {
    ReactCompareSlider,
    ReactCompareSliderImage,
} from "react-compare-slider"
import type { CSSProperties } from "react"

export interface ImageComparisonProps {
    beforeImage: string
    afterImage: string
    altBefore?: string
    altAfter?: string
    className?: string
    style?: CSSProperties
}

export function ImageComparison({
    beforeImage,
    afterImage,
    altBefore = "Before",
    altAfter = "After",
    className,
    style,
}: ImageComparisonProps) {
    return (
        <div
            className={cn(
                "relative w-full h-full overflow-hidden rounded-b-xl",
                className
            )}
            style={style}
        >
            <ReactCompareSlider
                itemOne={
                    <ReactCompareSliderImage
                        src={beforeImage}
                        alt={altBefore}
                        className="object-cover object-left"
                    />
                }
                itemTwo={
                    <ReactCompareSliderImage
                        src={afterImage}
                        alt={altAfter}
                        className="object-cover object-left"
                    />
                }
                position={50}
                onlyHandleDraggable
                className="h-full w-full"
                handle={
                    <div className="flex items-center justify-center">
                        <div className="h-12 w-4 cursor-grab active:cursor-grabbing rounded-full bg-white/90 shadow-xl flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-gray-700"
                            >
                                <line x1="15" y1="18" x2="9" y2="12" />
                                <line x1="9" y1="6" x2="15" y2="12" />
                            </svg>
                        </div>
                    </div>
                }
            />
        </div>
    )
}
