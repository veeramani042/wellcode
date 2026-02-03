import React from 'react'
import { AuroraText } from '../ui/aurora-text'
import { MacbookScroll } from '../custom/macbook-scroll'

type Props = {}

const AboutWorkPlatforms = (props: Props) => {
    return (
        <section className='py-20 bg-black'>
            <div className="text-center max-w-7xl mx-auto">
                <AuroraText className='text-4xl md:text-8xl'>Connected Horizons</AuroraText>
            </div>
            <MacbookScroll>

            </MacbookScroll>
        </section>
    )
}

export default AboutWorkPlatforms