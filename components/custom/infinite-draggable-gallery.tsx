import React from 'react'
import { DraggableContainer, GridBody, GridItem } from '../ui/infinite-drag-scroll'
import Image from 'next/image';

type Props = {}

const InfiniteDraggableGallery = (props: Props) => {
    return (
        <DraggableContainer variant="masonry">
            <GridBody>
                {Array.from({ length: 10 }).map((image, index) => (
                    <GridItem
                        key={index}
                        className="relative h-36 w-54 md:h-64 md:w-96"
                    >
                        <Image
                            width={400}
                            height={250}
                            src={`/assets/images/image${String(index + 12).padStart(2, "0")}.webp`}
                            alt={`wellcode-asset-${index}`}
                            className="pointer-events-none absolute h-full w-full object-cover"

                        />
                    </GridItem>
                ))}
            </GridBody>
        </DraggableContainer>
    )
}

export default InfiniteDraggableGallery