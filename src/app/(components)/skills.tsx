import { useTrail, useInView, animated } from '@react-spring/web'
import SkillContent from './skill-content'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'

interface Skill {
    className: string
    content:
        | 'ts'
        | 'docker'
        | 'githubactions'
        | 'react'
| 'postman'
| 'ssh'
| 'linux'
| 'socket'
        | 'html'
        | 'css'
        | 'js'
        | 'git'
        | 'node'
        | 'rtl'
        | 'next'
        | 'vercel'
}

const Skills = () => {
    const config = { mass: 5, tension: 2000, friction: 200 }

    const [ref, inView] = useInView()

    const skills = [


        {
            className: 'bg-violet-500/90 h-16 pl-4 flex rounded-tl-md',
            content: 'html',
        },
        {
            className: 'bg-violet-500/80  h-16 pl-4 flex',
            content: 'css',
        },
        {
            className: 'bg-violet-500/80 h-16 pl-4',
            content: 'js',
        },
        {
            className: 'bg-violet-500/75 h-16 pl-4',
            content: 'ts',
        },
        {
            className: 'bg-violet-500/70  h-16 pl-4 flex items-center',
            content: 'node',
        },

        {
            className: 'bg-violet-500/60  h-16 pl-4 flex items-center',
            content: 'mysql',
        },
        {
            className: 'bg-violet-500/60  h-16 pl-4 flex items-center',
            content: 'postgresql',
        },
        {
            className: 'bg-violet-500/50  h-16 pl-4 flex items-center',
            content: 'docker',
        },
        {
            className: 'bg-violet-500/50 h-16 pl-4 flex items-center',
            content: 'githubactions',
        },
        {
            className: 'bg-violet-500/40 h-16 pl-4 ',
            content: 'git',
  
        },

        {
            className: 'bg-violet-500/40  h-16 pl-4 flex items-center',
            content: 'postman',
        },
      
        {
            className: 'bg-violet-500/30  h-16 pl-4 flex items-center',
            content: 'linux',
        },
        {
            className: 'bg-violet-500/30 h-16 pl-4',
            content: 'react',
        },
        {
            className: 'bg-violet-500/25  h-16 pl-4 flex items-center',
            content: 'next',
        },
         
        {
            className: 'bg-violet-500/20 h-16 pl-4',
            content: 'rtl',
        },
          
        {
            className:
                'bg-violet-500/10  h-16 pl-4 flex items-center',
            content: 'vercel',
        },
          
        {
            className:
                'bg-violet-500/10  h-16 pl-4 flex items-center ',
            content: 'socket',
        },
        {
            className: 'bg-violet-500/5 h-16 pl-4 flex items-center',
            content: 'rest',
        },
        {
            className: 'bg-violet-500/5  h-16 pl-4 flex items-center rounded-bl-md',
            content: 'ssh',
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
