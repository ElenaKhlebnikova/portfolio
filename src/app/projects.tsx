import Image from 'next/image'

const Projects = () => {
    const projectsData = [
        {
            title: 'Movie Mash',
            pic: '/movie-mash.png',
            description:
                "A web-application which allows users to view different movies, tv-shows, see their rating, production, cast, crew and popularity. It also allows users to view actors and producers' biography, filmography and their popularity.",
            repoLink: 'https://github.com/ElenaKhlebnikova/movie-mash',
            webLink: 'startling-travesseiro-2774de.netlify.app/',
        },
    ]

    return (
        <div
            className="mb-12 mt-48 flex flex-col ml-32 mr-16 justify-between"
            style={{
                backgroundImage: `url('/stars.png')`,
                backgroundSize: 'cover',
            }}
        >
            <h2 className="text-3xl  font-semibold mb-3">Projects</h2>
            {projectsData.map((p) => {
                return (
                    <div
                        key={p.title}
                        className="flex justify-between items-start"
                    >
                        <div className="flex flex-col w-1/2">
                            <h3 className="font-semibold text-2xl">
                                {p.title}
                            </h3>
                            <p>{p.description}</p>
                        </div>
                        <div
                            style={{
                                height: '400px',
                                width: '600px',
                                backgroundImage: `linear-gradient(0.25turn, rgb(36, 36, 36), rgb(36,36,36, 0)), url(${p.pic}) `,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects
