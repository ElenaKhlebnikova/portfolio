'use client'
import { ParallaxProvider } from 'react-scroll-parallax'
import MainSection from './(components)/main-section'
import Footer from './(components)/footer'
import Skills from './(components)/skills'

import AboutMe from './(components)/about-me'
import Projects from './(components)/projects'

const Home = () => {
    return (
        <div className="overflow-hidden ">
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

export default Home
