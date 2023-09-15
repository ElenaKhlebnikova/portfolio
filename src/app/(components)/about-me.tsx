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
            <div className="md:w-1/2 mx-10  mb-3 md:mx-0">
                <h2 className="text-3xl font-semibold">About me</h2>
                <p className="mb-2">
                    Hi! My name is Elena and I am a frontend developer based in
                    Berlin.
                </p>
                <p className="mb-2">
                    Before descovering frontend I got a bachelor&apos;s degree
                    in Teaching and Languages (German and English) and had been
                    working as a teacher and a private tutor for around 6 years.
                    This experience helped me to get a rage of valuable skills:
                    working in a team, solving conflicts, working undes stress
                    and, most importantly, I&apos;ve learnt how to teach and
                    learn, and it is somethins that I apply everyday on my
                    journey.
                </p>
                <p className="mb-2">
                    Even though being a teacher is a very important role, I
                    realized that my heart leans towards web-development as it
                    has 2 essential components: creativity and challenge.
                </p>

                <div className="text-xl mt-8">
                    <a
                        href="/CV.pdf"
                        download="Elena Khlebnikova CV"
                        target="_blank"
                        className="flex"
                    >
                        <button>Download my CV</button>
                        <animated.div style={props}>
                            <Image
                                className="mt-24 mb-36 ml-5"
                                src="/social-documents.png"
                                alt="document"
                                width={100}
                                height={100}
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
