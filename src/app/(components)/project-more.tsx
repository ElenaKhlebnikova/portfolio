import { animated, useSpring, useInView } from '@react-spring/web'

const ProjectMore = ({
    setProjectFullShown,
}: {
    setProjectFullShown: (arg: boolean) => void
}) => {
    const [ref, inView] = useInView()
    console.log(inView)
    const props = useSpring({
        config: { mass: 5, tension: 500, friction: 80 },
        transform: inView ? 'scale(1)' : 'scale(0)',
    })

    return (
        <animated.div style={props}>
            <div
                ref={ref}
                className="bg-fuchsia-500 min-h-max min-w-max p-5 mx-10"
            >
                <button onClick={() => setProjectFullShown(false)}>X</button>
                <div className="grid grid-cols-3">
                    <div className="w-16 h-16 bg-red-500"></div>
                    <div className="w-16 h-16 bg-sky-500"></div>
                    <div className="w-16 h-16 bg-yellow-500"></div>
                    <div className="w-16 h-16 bg-violet-500"></div>
                    <div className="w-16 h-16 bg-green-500"></div>
                    <div className="w-16 h-16 bg-lime-500"></div>
                    <div className="w-16 h-16 bg-purple-500"></div>
                    <div className="w-16 h-16 bg-emerald-500"></div>
                    <div className="w-16 h-16 bg-pink-500"></div>
                </div>
            </div>
        </animated.div>
    )
}

export default ProjectMore
