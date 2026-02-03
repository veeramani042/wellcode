import ScrollViewTrigger from '../custom/scrollview-trigger'
import InfiniteDraggableGallery from '../custom/infinite-draggable-gallery'
import { cn } from '@/lib/utils'
import { AuroraText } from '../ui/aurora-text'
import { MotionDiv } from '../motion/motion-client'

type Props = {
    className?: string
}

const InfinteWorksGallery = (props: Props) => {
    return (
        <section className='px-2'>
            <ScrollViewTrigger
                className={cn("text-center py-20", props.className)}
            >
                <MotionDiv
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center"
                >
                    <h2 className="text-5xl md:text-6xl leading-tight mb-5">
                        Work That Speaks for Itself
                    </h2>

                    <p className="text-lg text-white/80 max-w-3xl mx-auto mb-20">
                        Discover high-quality real estate image editing, creative visuals, and digital project work crafted for performance, consistency, and brand impact.
                    </p>
                </MotionDiv>
            </ScrollViewTrigger>
            {/* <NeonGradient> */}
            <InfiniteDraggableGallery />
            {/* </NeonGradient> */}
        </section>
    )
}

export default InfinteWorksGallery