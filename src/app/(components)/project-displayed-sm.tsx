import type { TProject } from '../(types)/types'

import { FaGlobe } from '@react-icons/all-files/fa/FaGlobe'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'

import Image from 'next/image'
import Link from 'next/link'

// rename p
const ProjectDisplayedSm = ({ p }: { p: TProject }) => {
    return (
        <div className="flex flex-col mt-20 min-h-fit max-h-fit">
            <div className="flex items-stretch relative justify-center w-screen">
                <div className="flex items-stretch w-4/5">
                    <div className="flex flex-col-reverse justify-between items-start">
                        <div
                            className="flex flex-col h-full px-5 xl:py-10 py-5"
                            style={{
                                backgroundColor: 'rgb(36, 36, 36)',
                            }}
                        >
                            <h3 className="font-semibold text-2xl">
                                {p.title}
                            </h3>
                            <p className="text-sm xl:text-base">
                                {p.description}
                            </p>
                            <Link
                                href={`project/${p.id}`}
                                className="text-base text-fuchsia-400 text-right"
                            >
                                Show more
                            </Link>

                            <div className="mt-10 flex">
                                {/* use Link instead of a tag everywhere */}
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
                                alt={p.title}
                                src={`${p.pic[0]}`}
                                width={600}
                                height={450}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDisplayedSm
