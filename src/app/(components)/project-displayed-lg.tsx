import type { TProject } from '../(types)'

import Link from 'next/link'
import Image from 'next/image'
import { PROJECTS_DATA } from '../(constants)/constants'
import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft'
import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight'
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { animated, useSpring } from '@react-spring/web'

const ProjectDisplayedLg = ({
    projectIndex,
    project,
    setCurrentIndex,
    currentIndex,
}: {
    projectIndex: number
    project: TProject
    currentIndex: number
    setCurrentIndex: (value: number) => void
}) => {
    const length = PROJECTS_DATA.length
    const handleClick = (value: number) => {
        if (currentIndex === 0 && value === -1) {
            setCurrentIndex(length - 1)
        } else if (currentIndex === length - 1 && value === 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + value)
        }
    }

    const getTransformValues = () => {
        if (projectIndex === currentIndex) {
            return 'translateX(0px)'
        } else if (projectIndex > currentIndex) {
            return 'translateX(200px)'
        } else if (projectIndex < currentIndex) {
            return 'translateX(-200px)'
        }
    }

    const props = useSpring({
        config: { mass: 5, tension: 500, friction: 80 },
        duration: 500,
        transform: getTransformValues(),
    })
    if (!project) return null
    return (
        <div className="flex flex-col min-h-fit max-h-fit 3xl:ml-96">
            <animated.div style={props} className="mb-10 3xl:ml-96">
                <div className="flex items-stretch relative justify-center w-screen 3xl:h-96">
                    <div className="flex flex-nowrap items-stretch 3xl:justify-end w-3/4 3xl:ml-96">
                        {currentIndex === projectIndex && (
                            <button
                                type="button"
                                onClick={() => handleClick(-1)}
                                className="text-3xl mx-3 mb-3 3xl:translate-x-72"
                            >
                                <FaArrowLeft />
                            </button>
                        )}

                        <div className="flex justify-between items-start 3xl:justify-end">
                            <div
                                className="flex flex-col w-1/2  h-full px-5 xl:py-10 py-5 3xl:w-1/4"
                                style={{
                                    backgroundColor: 'rgb(36, 36, 36)',
                                }}
                            >
                                <h3 className="font-semibold text-2xl">
                                    {project.title}
                                </h3>
                                <p className="text-sm xl:text-base">
                                    {project.description}
                                </p>
                                <Link
                                    href={`project/${project.id}`}
                                    className="text-base text-fuchsia-400 text-right"
                                >
                                    Show more
                                </Link>

                                <div className="mt-10 flex">
                                    <Link
                                        href={project.repo}
                                        target="_blank"
                                        className="text-4xl mr-3"
                                    >
                                        <FaGithub />
                                    </Link>
                                    <Link
                                        href={project.webLink}
                                        target="_blank"
                                        className="text-4xl"
                                    >
                                        <FaGlobe />
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <div
                                    className="h-full absolute top-0 left-0 w-full z-10"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(0.25turn, rgb(36, 36, 36), rgb(36,36,36, 0))',
                                    }}
                                />
                                <Image
                                    className="-z-10"
                                    alt={project.title}
                                    src={`${project.pic[0]}`}
                                    width={600}
                                    height={450}
                                />
                            </div>
                        </div>
                        {currentIndex === projectIndex && (
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

export default ProjectDisplayedLg
