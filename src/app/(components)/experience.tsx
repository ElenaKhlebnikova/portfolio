const Experience = () => {





    return (
        <div
            className="flex my-20 md:flex-row flex-col justify-around"
            style={{
                backgroundImage: `url('/stars.png')`,
                backgroundSize: 'cover',
            }}
        >
            <div className="md:mx-10 mx-2 flex flex-col md:text-xl leading-7 font-mono px-5 py-5 bg-black rounded-md bg-opacity-50 mb-3">
                <h2 className="md:text-3xl text-2xl font-semibold">Experience</h2>
                <p className="mb-2">
                  
                </p>
          
                <p className="mb-2">
<h3 className="my-2">WebTeam Storm, Remote - Full-stack developer</h3>
<h5 className="mb-10 mt-2">Nov.2023 - Nov.2024 (1 year)</h5>


I worked as a full-stack developer focusing mainly on backend and building resilient APIs however I also contributed on the frontend by building pixel-perfect responsive web apps according to our Figma designs. Below are some of the major projects I worked on:
<ul>
    <li className="my-10 leading-relaxed"><strong>Rapple Analytics:</strong> It is a centralized dashboard for different ad campaigns created from different sources to allow the customer to analyze the conversion rate of different campaigns. 
The challenge was integrating Yandex API as it does not provide full access to its campaigns so came up with a solution which involved import/export of the data and a beautifully designed cronjob to overcome this limitation.
</li>
<li className="my-10 leading-relaxed"><strong>Learning Platform:</strong> It is a fully fledged learning platform which includes ability to manage courses and their sections. Each section can contain different types of tasks such as video, texts and graded tests. In addition, the ability to keep track of students real-time progress throughout the course.
Because of a tight deadline, I worked closely with the frontend developer to ensure timely delivery of features to the client.
</li>

<li className="my-10 leading-relaxed"><strong> GK Maximum: </strong>  It is a large cosmetic store built on top of a legacy vendor with a custom SQL database, our agency was contracted to modernize their architecture by first migrating the database to a standard MySQL one and also revamp their frontend and mobile application.
The complexity lies within the data migration. Given that database is a legacy one, I had to connect to their server hosting the database via FTP, download the data in CSV format and finally import it into our own database.
Because of a tight deadline, I worked closely with the frontend developer to ensure timely delivery of features to the client.
</li>
</ul>


                </p>

            </div>

                
        </div>
    )
}



export default Experience