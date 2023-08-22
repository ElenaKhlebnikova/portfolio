'use client'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import MainSection from './(components)/main-section'
import Footer from './(components)/footer'
import Skills from './(components)/skills'
import { Tektur } from 'next/font/google'
import AboutMe from './(components)/about-me'
import Projects from './projects'

const tektur = Tektur({
    weight: ['400', '500', '600', '700', '800', '900'],
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
})

export default function Home() {
    return (
        <div className="overflow-hidden text-white " style={tektur.style}>
            <ParallaxProvider>
                <MainSection />
                <AboutMe />
                <Skills />
                <Projects />
                <Footer />
            </ParallaxProvider>
        </div>
    )
}
