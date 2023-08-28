import { FaHeart } from '@react-icons/all-files/fa/FaHeart'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'

import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'

const FooterLg = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('/stars.png')`,
                    backgroundSize: 'cover',
                }}
            >
                <div
                    style={{
                        height: '500px',
                        width: '500px',
                        backgroundImage: "url('/moon.png')",
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Parallax translateX={['-300px', '300px']} speed={1}>
                        <Image
                            className="mt-20 -z-10"
                            src="/flag.png"
                            alt="flag"
                            width={50}
                            height={100}
                        />
                    </Parallax>
                    <Parallax translateX={['-350px', '1600px']} speed={1}>
                        <div className="flex flex-col ml-28 items-center  w-full text-xl">
                            <h3 className="flex justify-between items-center">
                                Made with a lot of <FaHeart className="mx-1" />{' '}
                                by Elena Khlebnikova
                            </h3>

                            <div className="flex flex-col items-center mt-5">
                                <span> You can contact me here: </span>
                                <a
                                    href="mailto:khlebnikova.elena.s@gmail.com"
                                    className="text-gray-300"
                                >
                                    khlebnikova.elena.s@gmail.com
                                </a>{' '}
                            </div>

                            <div className="flex text-5xl mt-5">
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
                            <div className="text-xs mt-24">
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
                    </Parallax>
                </div>
            </div>
        </div>
    )
}

export default FooterLg
