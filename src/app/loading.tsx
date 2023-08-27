import Image from 'next/image'

const Loading = () => {
    return (
        <div
            className="w-full h-screen flex justify-center"
            style={{
                backgroundImage: `url('/stars.png')`,
                backgroundSize: 'cover',
            }}
        >
            <Image
                src="/loader.gif"
                height={70}
                width={50}
                alt="Loading clock"
                className="self-center"
            />
        </div>
    )
}

export default Loading
