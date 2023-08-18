'use client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import MainSection from './(components)/main-section'
import Footer from './(components)/footer'
import Image from 'next/image'

export default function Home() {
    return (
        <Parallax pages={2}>
            <ParallaxLayer sticky={{ start: 0.15 }}>
                <Image
                    className="ml-20"
                    src="/rocket.png"
                    alt="rocket"
                    width={200}
                    height={200}
                />
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={0.5}
                factor={1.5}
                style={{
                    backgroundImage: `url('/stars.png')`,
                    backgroundSize: 'cover',
                }}
            >
                <MainSection />
            </ParallaxLayer>
            <ParallaxLayer
                style={{
                    backgroundImage: `url('/stars.png')`,
                    backgroundSize: 'cover',
                }}
                factor={1}
                offset={1}
                speed={2}
            >
                <Footer />
            </ParallaxLayer>
        </Parallax>
    )
}
