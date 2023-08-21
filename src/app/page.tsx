'use client'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import MainSection from './(components)/main-section'
import Footer from './(components)/footer'
import Image from 'next/image'
import Skills from './(components)/skills'
import {
    useSpring,
    useInView,
    animated,
    useTransition,
} from '@react-spring/web'
import { Tektur } from 'next/font/google'

const tektur = Tektur({
    weight: ['400', '500', '600', '700', '800', '900'],
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
})

export default function Home() {
    const [ref, inView] = useInView()

    return (
        <div className="overflow-hidden " style={tektur.style}>
            <ParallaxProvider>
                <MainSection />

                {/* <Parallax sticky={{ start: 2.25, end: 3 }}>
                    <Image
                        className="ml-20"
                        src="/cat-2.png"
                        alt="rocket"
                        width={200}
                        height={200}
                    />
                    <p ref={ref}></p>
                </Parallax> */}

                <Parallax
                    speed={0.5}
                    style={{
                        backgroundImage: `url('/stars.png')`,
                        backgroundSize: 'cover',
                    }}
                ></Parallax>
                <Parallax
                    // style={{
                    //     backgroundImage: `url('/stars.png')`,
                    //     backgroundSize: 'cover',
                    // }}

                    speed={0.5}
                >
                    <Skills />
                </Parallax>

                <Parallax
                    // style={{
                    //     backgroundImage: `url('/stars.png')`,
                    //     backgroundSize: 'cover',
                    // }}

                    speed={0.5}
                >
                    <Footer />
                </Parallax>
            </ParallaxProvider>
        </div>
    )
}
