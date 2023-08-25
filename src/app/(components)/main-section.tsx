'use client'
import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'

const MainSection = () => {
    return (
        <div
            className="h-screen text-white flex items-center justify-around  mb-12"
            style={{
                backgroundImage: `url('/stars.png')`,
                backgroundSize: 'cover',
            }}
        >
            <div>
                <Parallax translateY={['-4700px', '4600px']} speed={0.5}>
                    <Image
                        className="z-50"
                        src="/cat-1.png"
                        alt="cat"
                        width={100}
                        height={100}
                    />
                </Parallax>
                <Parallax translateX={['150px', '-300px']} speed={1}>
                    <Image
                        className="mt-20 -z-10"
                        src="/social-planet.png"
                        alt="planet-earth"
                        width={150}
                        height={150}
                    />
                </Parallax>
            </div>
            <div className="flex flex-col w-1/2 items-end">
                <Parallax translateX={['-500px', '200px']} speed={1}>
                    <Image
                        className="mb-10"
                        src="/juicy-planet.png"
                        alt="yellow-planet"
                        width={100}
                        height={100}
                    />
                </Parallax>
                <p className=" text-6xl  font-semibold">
                    Hi! I am a frontend developer.
                </p>
            </div>
        </div>
    )
}

export default MainSection
