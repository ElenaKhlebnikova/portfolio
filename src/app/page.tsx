'use client'
import { ParallaxProvider } from 'react-scroll-parallax'
import MainSection from './(components)/main-section'
import Footer from './(components)/footer'
import Skills from './(components)/skills'

import AboutMe from './(components)/about-me'
import Experience from './(components)/experience'

const Home = () => {
    return (
        <div className="overflow-hidden ">
            <ParallaxProvider>
                <MainSection />
                <AboutMe />
                <Skills />
                {/* <Projects /> */}
                <Experience />
                <Footer />
            </ParallaxProvider>
        </div>
    )
}

export default Home
