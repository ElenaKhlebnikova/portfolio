'use client'

import { FaHeart } from '@react-icons/all-files/fa/FaHeart'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'

import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'

const FooterSm = () => {
    return (
        <div>
            <div
                className="flex flex-col mt-20 w-full"
                style={{
                    backgroundImage: `url('/stars.png')`,
                    backgroundSize: 'cover',
                }}
            >
                <div
                    style={{
                        height: '200px',
                        width: '200px',
                        backgroundImage: "url('/moon.png')",
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Parallax translateX={['-300px', '350px']} speed={1}>
                        <Image
                            className="-z-10"
                            src="/flag.png"
                            alt="flag"
                            width={25}
                            height={50}
                        />
                    </Parallax>
                </div>

                <div className="flex flex-col items-center w-full text-sm">
                    <div className="flex flex-col items-center">
                        <span> Made with a lot of</span>
                        <span>
                            <FaHeart className="mx-1" />
                        </span>
                        <span>by Elena Khlebnikova</span>
                    </div>

                    <div className="flex flex-col items-center mt-5">
                        <span> You can contact me here: </span>
                        <a
                            href="mailto:khlebnikova.elena.s@gmail.com"
                            className="text-gray-300"
                        >
                            khlebnikova.elena.s@gmail.com
                        </a>{' '}
                    </div>

                    <div className="flex text-xl mt-5">
                        <a
                            href="https://github.com/ElenaKhlebnikova"
                            className="mr-2"
                        >
                            <FaGithub />{' '}
                        </a>
                        <a href="https://github.com/ElenaKhlebnikova">
                            <FaLinkedin />{' '}
                        </a>
                    </div>
                    <div className="text-xs my-10">
                        <span>Images are provided by:</span>
                        <a
                            target="_blank"
                            href=" https://icons8.com/"
                            className="ml-2 text-gray-300"
                        >
                            https://icons8.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSm
