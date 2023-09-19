import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

import { useSpring, animated } from '@react-spring/web'

const AboutMe = () => {
    const [props] = useSpring(
        () => ({
            config: { duration: 2500 },
            loop: { reverse: true },
            from: { translateY: '0px' },
            to: { translateY: '30px' },
        }),
        []
    )

    return (
        <div
            className="flex md:flex-row flex-col justify-around"
            style={{
                backgroundImage: `url('/stars.png')`,
                backgroundSize: 'cover',
            }}
        >
            <div className="md:w-1/2 md:mx-10 mx-2 flex flex-col md:text-xl leading-7 font-mono px-5 py-5 bg-black rounded-md bg-opacity-50 mb-3">
                <h2 className="md:text-3xl text-2xl font-semibold">About me</h2>
                <p className="mb-2">
                    Hi! My name is Elena and I am a frontend developer based in
                    Berlin.
                </p>
                <p className="mb-2">
                    Before discovering frontend I got a bachelor&apos;s degree
                    in Teaching and Languages (German and English) and had been
                    working as a teacher and a private tutor for around 6 years.
                    This experience helped me to get a range of valuable skills:
                    working in a team, solving conflicts, working under stress
                    and, most importantly, I&apos;ve learnt how to teach and how
                    to learn, and it is something that I apply everyday on my
                    journey.
                </p>
                <p className="mb-2">
                    Even though being a teacher is a very important role, I
                    realized that my heart leans towards web-development as it
                    has 2 essential components: creativity and challenge.
                </p>

                <div className="text-xl mt-8 mb-8 border px-2 py-1 rounded-md md:w-1/2 md:self-end ">
                    <a
                        href="/Elena_Khlebnikova_Frontend_Developer.pdf"
                        download="Elena Khlebnikova CV"
                        target="_blank"
                        className="flex justify-center items-center"
                    >
                        <span>Download my CV</span>
                        <animated.div style={props}>
                            <Image
                                className="ml-5"
                                src="/social-documents.png"
                                alt="document"
                                width={50}
                                height={50}
                            />
                        </animated.div>
                    </a>
                </div>
            </div>

            <Parallax
                translateX={['0px', '-400px']}
                translateY={['150px', '-500px']}
                speed={1}
                className="ml-32 md:ml-0"
            >
                <animated.div style={props}>
                    <Image
                        className="mt-24 mb-36 "
                        src="/girl.png"
                        alt="girl"
                        width={200}
                        height={200}
                    />
                </animated.div>
            </Parallax>
        </div>
    )
}

export default AboutMe
