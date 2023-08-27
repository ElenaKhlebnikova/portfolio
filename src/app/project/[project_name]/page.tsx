/* eslint-disable @next/next/no-img-element */
'use client'
import { PROJECTS_DATA } from '@/app/(constants)/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { animated, useSpring, useInView } from '@react-spring/web'
import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight'
import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe'
import { FaHome } from '@react-icons/all-files/fa/FaHome'

const ProjectMore = ({
    params,
}: {
    params: {
        project_name: string
    }
}) => {
    const [photoIndex, setPhotoIndex] = useState<number>(0)
    const [ref, inView] = useInView()

    const isBrowser = () => typeof window !== 'undefined'

    useEffect(() => {
        const scrollToTop = () => {
            if (!isBrowser()) return
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        scrollToTop()
    }, [])

    const props = useSpring({
        config: { mass: 5, tension: 500, friction: 80 },
        transform: inView ? 'scale(1)' : 'scale(0)',
    })

    const p = PROJECTS_DATA.find((proj) => proj.id === params.project_name)!
    const currentIndex = PROJECTS_DATA.indexOf(p)

    return (
        <animated.div style={props} className="pb-24">
            <Link href="/">
                <div className="text-fuchsia-500 mt-10 ml-5 flex lg:ml-20 justify-start items-center">
                    <FaHome />
                    <p className="ml-2">Home</p>
                </div>
            </Link>
            <div className="flex justify-between w-full mb-10 lg:mt-10 mt-5">
                {currentIndex > 0 && (
                    <Link href={`${PROJECTS_DATA[currentIndex - 1].id}`}>
                        <div className="text-fuchsia-500 lg:ml-10 ml-5 flex justify-start items-center">
                            <FaArrowLeft />
                            <p className="ml-2">Previous project</p>
                        </div>
                    </Link>
                )}

                {currentIndex < 3 && (
                    <Link href={`${PROJECTS_DATA[currentIndex + 1].id}`}>
                        <div className="text-fuchsia-500 lg:mr-10 mr-5  flex justify-start items-center">
                            <p className="ml-2">Next project</p>
                            <FaArrowRight />
                        </div>
                    </Link>
                )}
            </div>
            <div className="flex justify-start mb-2 lg:mx-10 mx-5">
                <h2 className="text-3xl font-semibold mr-2">{p?.title}</h2>
                <a
                    href={p.repo}
                    target="_blank"
                    className="text-4xl text-fuchsia-500 mr-2"
                >
                    <FaGithub />
                </a>
                <a
                    href={'https://' + p.webLink}
                    target="_blank"
                    className="text-4xl text-fuchsia-500"
                >
                    <FaGlobe />
                </a>
            </div>
            <div
                ref={ref}
                className="text-white text-sm  grid px-5 ml-5 lg:px-10 lg:ml-10 mt-5 py-5 lg:gap-x-9 lg:grid-cols-2"
            >
                <div>
                    <div>
                        {p.backend && (
                            <p className="my-5">
                                This project is connected to backend that is
                                written by me:{' '}
                                <a
                                    href={p.backend}
                                    className="text-fuchsia-300"
                                    target="_blank"
                                >
                                    {p.backend}
                                </a>
                            </p>
                        )}
                        <h3 className="text-2xl">🤖 Features</h3>
                        <ol className="mt-2 leading-loose list-decimal">
                            {p?.features.map((i) => (
                                <li key={i}>{i}</li>
                            ))}
                        </ol>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-2xl">📖 What I have learnt</h3>
                        <ol className="mt-2 leading-loose list-decimal">
                            {p?.learnt.map((i) => (
                                <li key={i}>{i}</li>
                            ))}
                        </ol>
                    </div>
                    {p.struggled && (
                        <div className="mt-10">
                            <h3 className="text-2xl">
                                🥹 What I struggled with
                            </h3>
                            <ol className="leading-loose list-decimal">
                                {p.struggled?.map((i) => (
                                    <li key={i}>{i}</li>
                                ))}
                            </ol>
                        </div>
                    )}
                </div>
                <div className="row-start-1 lg:row-start-auto">
                    <div className="flex flex-col items-center">
                        <div>
                            <img
                                className="rounded-md border border-fuchsia-500"
                                src={p.pic[photoIndex]}
                                alt={p.title}
                            />
                        </div>
                        <div className="flex flex-wrap mt-3 justify-center">
                            {p.pic.map((i: string, index: number) => (
                                <Image
                                    onClick={() => setPhotoIndex(index)}
                                    src={i}
                                    height={50}
                                    style={{ objectFit: 'none' }}
                                    width={100}
                                    alt={i}
                                    key={i}
                                    className={`mx-2 my-1 border hover:cursor-pointer ${
                                        index === photoIndex
                                            ? 'border-fuchsia-500'
                                            : 'border-zinc-200'
                                    }  rounded-md`}
                                />
                            ))}
                        </div>
                    </div>
                    <table className="border border-zinc-200 text-justify rounded-t-md p-3 w-full mt-10 table-fixed">
                        <caption className="caption-top">
                            Tech stack used in the project
                        </caption>
                        <thead className="text-center">
                            <tr>
                                <th>Technology</th>
                                <th>Usage</th>
                            </tr>
                        </thead>

                        <tbody>
                            {p.techstack.map((i) => (
                                <tr key={i.technology}>
                                    <td className="border px-2 py-2 border-zinc-200">
                                        {i.technology}
                                    </td>
                                    <td className="border px-2 py-2 border-zinc-200">
                                        {i.usage}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </animated.div>
    )
}

export default ProjectMore
