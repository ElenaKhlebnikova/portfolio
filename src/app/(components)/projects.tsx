'use client'
import { useState, useEffect } from 'react'

import { PROJECTS_DATA } from '../(constants)/constants'
import ProjectDisplayedLg from './project-displayed-lg'
import ProjectDisplayedSm from './project-displayed-sm'

const Projects = () => {
    // currentIndex
    const [index, setIndex] = useState<number>(0)
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
        if (ind === index) {
            return styles.front
        } else if (ind >= index) {
            return styles.right
        } else if (ind <= index) {
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
                <div className="flex relative min-h-screen">
                    {/* rename from `ind` to projectIndex */}
                    {/* rename from `item` to `project` */}
                    {PROJECTS_DATA.map((item, ind) => {
                        return (
                            <div key={item.title} className={getClassName(ind)}>
                                <ProjectDisplayedLg
                                    ind={ind}
                                    p={item}
                                    index={index}
                                    setIndex={setIndex}
                                />
                            </div>
                        )
                    })}
                </div>
            ) : (
                PROJECTS_DATA.map((item) => (
                    <ProjectDisplayedSm key={item.id} p={item} />
                ))
            )}
        </div>
    )
}

export default Projects
