import { cn } from "@/lib/utils"
import ScrollViewTrigger from "../custom/scrollview-trigger"
import { AuroraText } from "../ui/aurora-text"
import { ComponentPropsWithoutRef } from "react"
import { MotionH2 } from "../motion/motion-client"
import Image from "next/image"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
    /**
     * Optional CSS class name to apply custom styles
     */
    className?: string
    /**
     * Whether to reverse the animation direction
     * @default false
     */
    reverse?: boolean
    /**
     * Whether to pause the animation on hover
     * @default false
     */
    pauseOnHover?: boolean
    /**
     * Content to be displayed in the marquee
     */
    children: React.ReactNode
    /**
     * Whether to animate vertically instead of horizontally
     * @default false
     */
    vertical?: boolean
    /**
     * Number of times to repeat the content
     * @default 4
     */
    repeat?: number
}

const reviews = [
    {
        "name": "Jack",
        "username": "@jack",
        "body": "I've never seen anything like this before. It's amazing. I love it.",
        "img": "users_1",
        "alt": ""
    },
    {
        "name": "Jill",
        "username": "@jill",
        "body": "I don't know what to say. I'm speechless. This is amazing.",
        "img": "users_2",
        "alt": ""
    },
    {
        "name": "John",
        "username": "@john",
        "body": "I'm at a loss for words. This is amazing. I love it.",
        "img": "users_3",
        "alt": ""
    },
    {
        "name": "Jane",
        "username": "@jane",
        "body": "I'm at a loss for words. This is amazing. I love it.",
        "img": "users_4",
        "alt": ""
    },
    {
        "name": "Jenny",
        "username": "@jenny",
        "body": "I'm at a loss for words. This is amazing. I love it.",
        "img": "users_5",
        "alt": ""
    },
    {
        "name": "James",
        "username": "@james",
        "body": "I'm at a loss for words. This is amazing. I love it.",
        "img": "users_6",
        "alt": ""
    }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string
    name: string
    username: string
    body: string
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-70 cursor-pointer overflow-hidden rounded-xl p-6 bg-linear-to-b from-teal-950/40 to-black/10 backdrop-blur-2xl backdrop-saturate-150 bg-teal-800/5"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full w-10 h-10 object-cover" width={50} height={50} alt="" src={"/assets/images/" + img + ".jpg"} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    )
}

function Marquee({
    className,
    reverse = false,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className={cn(
                "group flex gap-(--gap) overflow-hidden p-2 [--duration:100s] [--gap:1rem]",
                {
                    "flex-row": !vertical,
                    "flex-col": vertical,
                },
                className
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={cn("flex shrink-0 justify-around gap-(--gap)", {
                            "animate-marquee flex-row": !vertical,
                            "animate-marquee-vertical flex-col": vertical,
                            "group-hover:paused": pauseOnHover,
                            "direction-[reverse]": reverse,
                        })}
                    >
                        {children}
                    </div>
                ))}
        </div>
    )
}

const Testimonial = () => {
    return (
        <section className="relative z-1">
            {/* <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10" /> */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pb-20">
                <ScrollViewTrigger
                    className="text-center pb-20 pt-40 z-1"
                >
                    <div className="">
                        <MotionH2
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-6xl leading-tight mb-5"
                        >
                            Trusted by Businesses Worldwide
                        </MotionH2>
                        <p className="text-base md:text-lg max-w-5xl my-4 mx-auto text-neutral-500 font-normal dark:text-neutral-300">
                            Our client reviews reflect the quality, reliability, and consistency we bring to every project. From real estate photo editing and image retouching to creative design and digital development, businesses trust Wellcode Studio for results that meet expectations and timelines.
                        </p>
                    </div>
                </ScrollViewTrigger>
                <Marquee pauseOnHover repeat={5} className="[--duration:30s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover repeat={5} className="[--duration:30s]" >
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="absolute inset-0 -z-10 pointer-events-none bg-linear-to-br from-black/20 via-transparent to-purple-700/20 blur-2xl" />
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            </div>
            {/* <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10" /> */}
        </section>
    )
}

export default Testimonial