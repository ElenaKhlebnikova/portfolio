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
    <li className="my-10 leading-relaxed"><strong>Rapple Analytics:</strong> 
    
    It is a centralized dashboard for different ad campaigns created from different sources to allow the customer to analyze the conversion rate of different campaigns. 


    <ul className="mt-4 list-disc ml-10">
        <li>    Designed a solution to overcome Yandex API’s limitation (some campaigns could not be fetched from regular REST endpoint) to ensure full data integration.</li>

<li>Implemented import/export mechanism in a cronjob to automate the continuous data integration between Yandex API and our application.</li>

    </ul>
</li>
<li className="my-10 leading-relaxed"><strong>Learning Platform:</strong> 
<ul className="mt-4 list-disc ml-10">
<li>Developed a fully-fledged learning platform, which includes different types of tasks such as video, texts and graded tests along with the ability for the client to manage the content of the courses.</li>
<li>Enabled real-time progress tracking throughout the course.</li>
<li>Collaborated closely with the frontend developer to ensure timely delivery of features to the client.</li>
</ul>
</li>

<li className="my-10 leading-relaxed"><strong> GK Maximum: </strong> It is a large cosmetic store built on top of a legacy vendor with a custom
SQL database, our agency was contracted to modernize their architecture by first migrating the
database to a standard MySQL one and also revamp their frontend and mobile application.

<ul className="mt-4 list-disc ml-10"><li>Engineered a migration solution of the client’s legacy database, which involves
connecting to client’s FTP server to access the data, converting it from CSV and
importing into our own MySQL database while ensuring data integrity.</li></ul>
</li>
</ul>


                </p>

            </div>

                
        </div>
    )
}



export default Experience