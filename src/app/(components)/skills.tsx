import { useTrail, useInView, animated } from '@react-spring/web'
import SkillContent from './skill-content'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

const Skills = () => {
    const config = { mass: 5, tension: 2000, friction: 200 }

    const [ref, inView] = useInView()

    const skills = [
        {
            className: 'bg-teal-300 h-16 pl-4 flex rounded-tl-md',
            content: 'react',
        },
        {
            className: 'bg-cyan-300 h-16 pl-4',
            content: 'html',
        },
        {
            className: 'bg-sky-300 h-16 pl-4',
            content: 'css',
        },
        {
            className: 'bg-blue-300 h-16 pl-4',
            content: 'js',
        },
        {
            className: 'bg-indigo-300 h-16 pl-4 ',
            content: 'git',
        },
        {
            className: 'bg-violet-300 h-16 pl-4',
            content: 'node',
        },
        {
            className:
                'bg-purple-300  h-16 pl-4 flex items-center  rounded-bl-md',
            content: 'rtl',
        },
    ]

    const trail = useTrail(skills.length, {
        config,
        opacity: !inView ? 0 : 1,
        from: inView
            ? {
                  opacity: 0,
                  transform: 'translateX(100px)',
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
                  transform: 'translateX(100px)',
              },
    })

    return (
        <>
            <div
                ref={ref}
                className="flex justify-end"
                style={{
                    backgroundImage: `url('/stars.png')`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="flex flex-col">
                    <p className="text-white text-3xl self-end  font-semibold">
                        Skills
                    </p>
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
                <div className="flex justify-end w-2/3">
                    <div className="text-white text-xl flex flex-col w-3/4">
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
