import ScrollSmoothWrapper from '@/components/custom/scroll-smoothner'
import React from 'react'
import HeroSection from './components/hero-section'

type Props = {}

const RealEstate = (props: Props) => {
    return (
        <ScrollSmoothWrapper>
            <HeroSection />
        </ScrollSmoothWrapper>
    )
}

export default RealEstate