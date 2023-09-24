'use client'
import { useState, useEffect } from 'react'

import { PROJECTS_DATA } from '../(constants)/constants'
import ProjectDisplayedLg from './project-displayed-lg'
import ProjectDisplayedSm from './project-displayed-sm'

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [windowWidth, setWindowWidth] = useState<number>(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])
    const styles = {
        front: 'absolute top-0 left-1/2  -translate-x-1/2 ',
        left: 'blur-sm opacity-40 -z-10 absolute ',
        right: 'absolute opacity-40 blur-sm  -z-10 ',
        back: 'absolute  opacity-40 blur-sm  -z-10 ',
    }

    const getClassName = (ind: number) => {
        if (ind === currentIndex) {
            return styles.front
        } else if (ind >= currentIndex) {
            return styles.right
        } else if (ind <= currentIndex) {
            return styles.left
        } else {
            return styles.back
        }
    }

    return (
        <div
            className="flex flex-col mt-60 justify-between min-h-screen w-screen"
            style={{
                backgroundImage: `url('/stars.png')`,
                backgroundSize: 'cover',
            }}
        >
            <h2 className="text-3xl ml-32 font-semibold mb-3">Projects</h2>
            {windowWidth >= 1024 ? (
                <div className="flex relative 3xl:max-w-fit min-h-screen">
                    {PROJECTS_DATA.map((item, projectIndex) => {
                        return (
                            <div
                                key={item.title}
                                className={getClassName(projectIndex)}
                            >
                                <ProjectDisplayedLg
                                    projectIndex={projectIndex}
                                    project={item}
                                    currentIndex={currentIndex}
                                    setCurrentIndex={setCurrentIndex}
                                />
                            </div>
                        )
                    })}
                </div>
            ) : (
                PROJECTS_DATA.map((item) => (
                    <ProjectDisplayedSm key={item.id} project={item} />
                ))
            )}
        </div>
    )
}

export default Projects
