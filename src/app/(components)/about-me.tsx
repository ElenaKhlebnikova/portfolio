import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

import { useSpring, animated } from '@react-spring/web'

const AboutMe = () => {
    const [props] = useSpring(
        () => ({
            config: { duration: 2000 },
            loop: { reverse: true },
            from: { translateY: '0px' },
            to: { translateY: '25px' },
        }),
        []
    )

    return (
        <div
            className="flex overflow-hidden justify-around"
            style={{
                backgroundImage: `url('/stars.png')`,
                backgroundSize: 'cover',
            }}
        >
            <div className="w-1/2">
                <h2 className="text-3xl font-semibold">About me</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Modi officia temporibus quibusdam enim, eos omnis repellat
                    eligendi atque exercitationem repudiandae magni cumque.
                    Minus nulla quibusdam ipsa eligendi corporis mollitia
                    voluptas.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Modi officia temporibus quibusdam enim, eos omnis repellat
                    eligendi atque exercitationem repudiandae magni cumque.
                    Minus nulla quibusdam ipsa eligendi corporis mollitia
                    voluptas.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Modi officia temporibus quibusdam enim, eos omnis repellat
                    eligendi atque exercitationem repudiandae magni cumque.
                    Minus nulla quibusdam ipsa eligendi corporis mollitia
                    voluptas.
                </p>
            </div>

            <Parallax
                translateX={['0px', '-400px']}
                translateY={['150px', '-500px']}
                speed={1}
            >
                <animated.div style={props}>
                    <Image
                        className="mt-24 mb-36 "
                        src="/girl.png"
                        alt="satellite"
                        width={200}
                        height={200}
                    />
                </animated.div>
            </Parallax>
        </div>
    )
}

export default AboutMe
