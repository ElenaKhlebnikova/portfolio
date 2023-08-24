import type { TProject } from '../(types)/types'

import { FaArrowLeft, FaArrowRight, FaGithub, FaGlobe } from 'react-icons/fa'
import { animated, useSpring } from '@react-spring/web'
import { useState } from 'react'
import Link from 'next/link'

const ProjectDisplayed = ({
    ind,
    p,
    setIndex,
    index,
}: {
    ind: number
    p: TProject
    index: number
    setIndex: (value: number) => void
}) => {
    const handleClick = (value: number) => {
        if (index === 0 && value === -1) {
            setIndex(3)
        } else if (index === 3 && value === 1) {
            setIndex(0)
        } else {
            setIndex(index + value)
        }
    }

    const getTransformValues = () => {
        if (ind === index) {
            return 'translateX(10px)'
        } else if (ind > index) {
            return 'translateX(200px)'
        } else if (ind < index) {
            return 'translateX(-200px)'
        }
    }

    const props = useSpring({
        config: { mass: 5, tension: 500, friction: 80 },
        transform: getTransformValues(),
    })
    if (!p) return null
    return (
        <div className="flex flex-col min-h-fit max-h-fit">
            <animated.div style={props} className="mb-10">
                <div className="flex items-stretch relative justify-center w-screen h-80">
                    <div className="flex items-stretch w-4/5">
                        {index === ind && (
                            <button
                                type="button"
                                onClick={() => handleClick(-1)}
                                className="text-3xl mx-3"
                            >
                                <FaArrowLeft />
                            </button>
                        )}

                        <div className="flex justify-between items-start">
                            <div
                                className="flex flex-col w-1/2  h-full px-5 py-10"
                                style={{
                                    backgroundColor: 'rgb(36, 36, 36)',
                                }}
                            >
                                <h3 className="font-semibold text-2xl">
                                    {p.title}
                                </h3>
                                <p>{p.description}</p>
                                <Link
                                    href={`project/${p.id}`}
                                    className="text-base text-fuchsia-400 text-right"
                                >
                                    Show more
                                </Link>

                                <div className="mt-10 flex">
                                    <a
                                        href={p.repo}
                                        target="_blank"
                                        className="text-4xl mr-3"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href={'https://' + p.webLink}
                                        target="_blank"
                                        className="text-4xl"
                                    >
                                        <FaGlobe />
                                    </a>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: '600px',
                                    width: '700px',
                                    backgroundImage: `linear-gradient(0.25turn, rgb(36, 36, 36), rgb(36,36,36, 0)), url(${p.pic[0]}) `,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></div>
                        </div>
                        {index === ind && (
                            <button
                                type="button"
                                onClick={() => handleClick(1)}
                                className="text-3xl mx-3 mb-3"
                            >
                                <FaArrowRight />
                            </button>
                        )}
                    </div>
                </div>
            </animated.div>
        </div>
    )
}

export default ProjectDisplayed
