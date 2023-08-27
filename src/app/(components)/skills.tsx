import { useTrail, useInView, animated } from '@react-spring/web'
import SkillContent from './skill-content'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

const Skills = () => {
    const config = { mass: 5, tension: 2000, friction: 200 }

    const [ref, inView] = useInView()

    interface Skill {
        className: string
        content:
            | 'ts'
            | 'react'
            | 'html'
            | 'css'
            | 'js'
            | 'git'
            | 'node'
            | 'rtl'
            | 'next'
    }
    const skills = [
        {
            className: 'bg-emerald-400  h-16 pl-4 flex rounded-tl-md',
            content: 'ts',
        },
        {
            className: 'bg-teal-400 h-16 pl-4 flex',
            content: 'react',
        },
        {
            className: 'bg-cyan-400 h-16 pl-4',
            content: 'html',
        },
        {
            className: 'bg-sky-400 h-16 pl-4',
            content: 'css',
        },
        {
            className: 'bg-blue-400 h-16 pl-4',
            content: 'js',
        },
        {
            className: 'bg-indigo-400 h-16 pl-4 ',
            content: 'git',
        },
        {
            className: 'bg-violet-400 h-16 pl-4',
            content: 'node',
        },
        {
            className: 'bg-purple-400  h-16 pl-4 flex items-center',
            content: 'rtl',
        },
        {
            className:
                'bg-fuchsia-400  h-16 pl-4 flex items-center rounded-bl-md',
            content: 'next',
        },
    ] as Skill[]

    const trail = useTrail(skills.length, {
        config,
        opacity: !inView ? 0 : 1,
        duration: 10000,
        from: inView
            ? {
                  opacity: 0,
                  transform: 'translateX(1000px)',
              }
            : {
                  opacity: 1,
                  transform: 'translateX(0)',
              },
        to: inView
            ? {
                  opacity: 1,
                  transform: 'translateX(0)',
              }
            : {
                  opacity: 0,
                  transform: 'translateX(1000px)',
              },
    })

    return (
        <>
            <div
                ref={ref}
                className="flex mt-24 lg:mt-48 justify-between mb-12"
                style={{
                    backgroundImage: `url('/stars.png')`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="flex flex-col">
                    <h2 className="text-3xl font-semibold self-center ml-10 lg:ml-32">
                        Skills
                    </h2>
                    <Parallax
                        translateX={['-100px', '400px']}
                        translateY={['150px', '-500px']}
                        speed={1}
                    >
                        <Image
                            className="mt-24 self-end mb-36 "
                            src="/clip-satellite.png"
                            alt="satellite"
                            width={200}
                            height={200}
                        />
                    </Parallax>
                </div>
                <div className="flex justify-end w-full lg:w-2/3">
                    <div className="text-white text-base lg:text-xl flex flex-col w-11/12 lg:w-3/4">
                        {trail.map((props, index) => (
                            <animated.div
                                key={index}
                                style={{ ...props }}
                                className={skills[index].className}
                            >
                                <SkillContent content={skills[index].content} />
                            </animated.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
