'use client'
import Image from 'next/image'
import {
    useInView,
    animated,
    useTransition,
    useSpringRef,
} from '@react-spring/web'

const Footer = () => {
    const [ref, inView] = useInView()

    const data = ['/cat-2.png']
    const api = useSpringRef()
    console.log(api)
    const transitions = useTransition(data, {
        ref: api,
        config: {
            duration: 3500,
            tension: 280,
            friction: 60,
        },

        from: { opacity: 0, transform: 'translatey(-700px)' },
        enter: { opacity: 1, transform: 'translatey(0)' },

        // leave: { opacity: 1, transform: 'translatey(-700px)' },
    })

    return (
        <div className="flex items-end">
            <div className="m-0 text-white text-xl bg-yellow-500 transition-all duration-1000 flex">
                {/* {transitions((style, item) => (
                    <animated.div style={style}>
                        <Image
                            className="ml-20"
                            src={item}
                            alt="rocket"
                            width={200}
                            height={200}
                        />
                    </animated.div>
                ))} */}

                <div className="flex flex-col w-1/2">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minima enim doloremque quae veritatis fugit animi
                        nobis culpa hic similique. Totam veniam corporis, error
                        voluptates dicta velit harum quasi ullam sint!
                    </p>{' '}
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minima enim doloremque quae veritatis fugit animi
                        nobis culpa hic similique. Totam veniam corporis, error
                        voluptates dicta velit harum quasi ullam sint!
                    </p>{' '}
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Minima enim doloremque quae veritatis fugit animi
                        nobis culpa hic similique. Totam veniam corporis, error
                        voluptates dicta velit harum quasi ullam sint!
                    </p>
                </div>
                <div ref={ref}></div>
            </div>
        </div>
    )
}

export default Footer

// 'use client'
// import Image from 'next/image'
// import { useInView, animated, useTransition } from '@react-spring/web'

// const Footer = () => {
//     return (
//         <div className="flex items-end">
//             <div className="m-0 text-white text-xl bg-yellow-500 transition-all duration-1000 flex">
//                 <div className="flex flex-col w-1/2">
//                     <p>
//                         Lorem, ipsum dolor sit amet consectetur adipisicing
//                         elit. Minima enim doloremque quae veritatis fugit animi
//                         nobis culpa hic similique. Totam veniam corporis, error
//                         voluptates dicta velit harum quasi ullam sint!
//                     </p>{' '}
//                     <p>
//                         Lorem, ipsum dolor sit amet consectetur adipisicing
//                         elit. Minima enim doloremque quae veritatis fugit animi
//                         nobis culpa hic similique. Totam veniam corporis, error
//                         voluptates dicta velit harum quasi ullam sint!
//                     </p>{' '}
//                     <p>
//                         Lorem, ipsum dolor sit amet consectetur adipisicing
//                         elit. Minima enim doloremque quae veritatis fugit animi
//                         nobis culpa hic similique. Totam veniam corporis, error
//                         voluptates dicta velit harum quasi ullam sint!
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer
