import { useState } from 'react'
import ProjectDisplayed from './project-displayed'
import { PROJECTS_DATA } from '../(constants)/constants'

const Projects = () => {
    const [index, setIndex] = useState<number>(0)

    const styles = {
        front: 'absolute top-0 left-1/2 z-10 -translate-x-1/2 ',
        left: 'blur-sm opacity-40 -z-10 absolute ',
        right: 'absolute opacity-40 blur-sm  -z-10 ',
        back: 'absolute  opacity-40 blur-sm  -z-10 ',
    }

    const getClassName = (ind: number) => {
        if (ind === index) {
            return styles.front
        } else if (ind === index + 1) {
            return styles.right
        } else if (ind === index - 1) {
            return styles.left
        } else {
            return styles.back
        }
    }

    return (
        <div
            className="flex flex-col justify-between h-full"
            style={{
                backgroundImage: `url('/stars.png')`,
                backgroundSize: 'cover',
            }}
        >
            <h2 className="text-3xl ml-32 font-semibold mb-3 min-h-fit">
                Projects
            </h2>
            <div className="flex relative min-h-screen max-h-full">
                {PROJECTS_DATA.map((item, ind) => {
                    return (
                        <div key={item.title} className={getClassName(ind)}>
                            <ProjectDisplayed
                                ind={ind}
                                p={item}
                                index={index}
                                setIndex={setIndex}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
