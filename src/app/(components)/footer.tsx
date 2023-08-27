'use client'

import { useState, useEffect } from 'react'
import FooterSm from './footer-sm'
import FooterLg from './footer-lg'

const Footer = () => {
    const [windowWidth, setWindowWidth] = useState<number>(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])
    if (windowWidth === 0) return null
    return <div>{windowWidth >= 1024 ? <FooterLg /> : <FooterSm />}</div>
}

export default Footer
