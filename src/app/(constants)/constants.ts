import { TProject } from '../(types)'

// export const PROJECTS_DATA = [
//     {
//         title: 'Movie Mash',
//         id: 'movie-mash',
//         pic: [
//             '/movie-mash.png',
//             '/movie-mash-1.png',
//             '/movie-mash-2.png',
//             '/movie-mash-3.png',
//             '/movie-mash-4.png',
//             '/movie-mash-5.png',
//             '/movie-mash-6.png',
//             '/movie-mash-7.png',
//         ],
//         techstack: [
//             {
//                 technology: 'React',
//                 usage: 'Main framework for building the application',
//             },
//             {
//                 technology: 'React Router',
//                 usage: 'Navigation and routing within the application',
//             },
//             {
//                 technology: 'React Query',
//                 usage: 'To handle data fetching and caching',
//             },
//             {
//                 technology: 'Taiwind',
//                 usage: 'CSS framework for building UI',
//             },
//             {
//                 technology: 'GitHub Actions',
//                 usage: 'To test and deploy the application (2 separate workflows)',
//             },
//             {
//                 technology: 'ESLint/Prettier/Husky',
//                 usage: 'For linting/formatting/Git-hooks',
//             },
//             {
//                 technology: 'Jest & RTL',
//                 usage: 'To write unit and integration tests',
//             },
//             {
//                 technology: 'Mock Service Worker',
//                 usage: 'To mock requests during testing',
//             },
//             {
//                 technology: 'Vite',
//                 usage: 'Development environment (local dev server and building)',
//             },
//         ],
//         description:
//             "A web-application which allows users to view different movies, tv-shows, see their rating, production, cast, crew and popularity. It also allows users to view actors and producers' biography, filmography and their popularity.",
//         repo: 'https://github.com/ElenaKhlebnikova/movie-mash',
//         webLink: 'https://startling-travesseiro-2774de.netlify.app/',
//         features: [
//             'Fully responsive',
//             'Filtering: users can filter TV shows and movies based on genres, rating and country',
//             'Sorting: users can sort TV shows and movies by their rating and release date',
//             'Trending today/this week slider. Users can see what TV shows and Movies are popular now',
//             'Main picture changes every day based on the most trending movie',
//             "Users can view different people and see their brief biography and view movies and TV shows they've starred in or worked as a part of the crew",
//             'Slider for trending/similar movies/TV shows is fully responsive',
//             'Users can search for movies/TV shows on the main page',
//         ],
//         learnt: [
//             'Using React Router v6.11 to implement navigation between different pages.',
//             'Using React Query to fetch data using multiple queries.',
//             'Using The Movie Database which requires token authentication.',
//             'How to work with different endpoints provided by The Movie Database.',
//             'How to build features in smaller PRs and avoid pushing to main.',
//             'How to use RTL to write integration tests that span multiple components.',
//             'How to use Tailwind to build responsive UI much faster.',
//             'Improved CSS skills.',
//             'How to work with env variables locally (.env files) and on deployment platform (Netlify).',
//         ],
//         struggled: [
//             'Using React Query for the first time mainly because their documentation was confusing at first.',
//             'Building complicated filtering functionality for "Explore Movies" and "Explore TV shows" pages.',
//             'Although the biggest part of the project is built using Tailwind, custom CSS was still required to animate the slider component and build rating range component when exploring movies or TV shows.',
//         ],
//     },

//     {
//         title: 'Create Kitchen form',
//         id: 'kitchen-form',
//         pic: [
//             '/kitchen-form.png',
//             '/kitchen-form-1.png',
//             '/kitchen-form-2.png',
//             '/kitchen-form-3.png',
//             '/kitchen-form-4.png',
//         ],
//         techstack: [
//             {
//                 technology: 'Next.js 13 (App Router)',
//                 usage: 'Meta React framework for building the application',
//             },
//             {
//                 technology: 'Vercel',
//                 usage: 'To deploy the application',
//             },
//             {
//                 technology: 'Typescript',
//                 usage: 'To ensure type safety',
//             },
//             {
//                 technology: 'Taiwind',
//                 usage: 'CSS framework for building UI',
//             },
//             {
//                 technology: 'React hook form',
//                 usage: 'To manage the state of the form',
//             },
//             {
//                 technology: 'ESLint/Prettier/Husky',
//                 usage: 'For linting/formatting/Git-hooks',
//             },
//             {
//                 technology: 'Cloudinary',
//                 usage: 'To upload and delete photos',
//             },
//             {
//                 technology: 'Geocode (Geocoding API)',
//                 usage: 'To provide better UX with autocomplete when adding location',
//             },
//         ],
//         description:
//             "This form is a part of an application I've collaborated on which allows users to rent out their kitchens. This form allows users to inзclude a wide variety of information to their kitchen's listing such as: description, location, photos, host's languages, rules and availability (recurring and non-recurring).",
//         repo: 'https://github.com/ElenaKhlebnikova/kitchen-form',
//         webLink: 'https://kitchen-form.vercel.app',
//         features: [
//             'Fully responsive',
//             'Better UX with autocomplete when using location field',
//             'Upload signed photos to Cloudinary',
//             'Choose your favourite photo (in the application this photo will be set as main picture)',
//             'Deleting photos which also deletes them from Cloudinary',
//             'Custom multi-select component to select languages',
//             'Custom availability fields',
//             'Form validation and error handling on both regular fields and custom (where it is required)',
//         ],
//         learnt: [
//             'Using React Hook Form',
//             'Registering and validating custom fields with React Hook Form',
//             'Building custom multiple select component',
//             'How to deploy Next.js applications to Vercel (I have previously used Netlify)',
//             'How to add server and client env variables to vercel',
//             'Using Cloudinary to upload signed/unsigned photos',
//             'Using Cloudinary to delete signed/unsigned photos',
//             'Using Next.js features: file system routing, managing client and server env variables, using route handlers as backend for uploading/deleting photos',
//             'How to use Tailwind to build responsive UI much faster',
//             'Working on different branches in small PRs',
//             'Resolving git conflicts.',
//         ],
//         struggled: [
//             'Building multi-select and registering it and validating it using React hook form.',
//             'Validating custom fields as it is much harder to do than with regular fields since I needed to set errors and clear them when the value is updated. It was not so clear how to do it the right way at first to get the needed behaviour.',
//             'Using Cloudinary to upload signed photos mainly because Next.js and Cloudinary documentation is not beginner friendly at all. Cloudinary documentation seems to be a bit outdated and it was hard to figure out the way to sign the photos.',
//             'Using Cloudinary to delete signed photos. Same issue as previously mentioned, but much easier than dealing with the documentation for the first time.',
//             'Building dynamic availbility fields using useFieldsArray from React hook form.',
//             'Validating custom availability fields. The main difficulty is that for form validation only one of these fields is required + these are custom fields. So it was hard to figure out the right way to clear errors.',
//         ],
//     },
//     {
//         title: 'UmVet',
//         id: 'um-vet',
//         backend: 'https://github.com/ElenaKhlebnikova/um-vet-backend',
//         pic: [
//             '/um-vet.png',
//             '/um-vet-1.png',
//             '/um-vet-2.png',
//             '/um-vet-3.png',
//             '/um-vet-4.png',
//             '/um-vet-5.png',
//         ],
//         techstack: [
//             {
//                 technology: 'React',
//                 usage: 'Main framework for building the application',
//             },
//             {
//                 technology: 'React Router',
//                 usage: 'Navigation and routing within the application',
//             },
//             {
//                 technology: 'CSS Modules',
//                 usage: 'For styling the components and prevent clashing of classes',
//             },

//             {
//                 technology: 'ESLint/Prettier/Husky',
//                 usage: 'For linting/formatting/Git-hooks',
//             },
//             {
//                 technology: 'Jest & RTL',
//                 usage: 'To write unit and integration tests',
//             },
//             {
//                 technology: 'Leaflet',
//                 usage: 'To show an interactive map on the "Contact Us" page',
//             },
//             {
//                 technology: 'GitHub Projects',
//                 usage: 'To track proogress on the project',
//             },
//         ],
//         description:
//             'This is a web-application which allows users to view UmVet vet clinic website, on which users can view doctors, make an appointment with them and leave feedback.',
//         repo: 'https://github.com/ElenaKhlebnikova/um-vet-frontend',
//         webLink: 'https://frolicking-begonia-777545.netlify.app/',
//         features: [
//             'Fully responsive.',
//             'Booking functionality: users can choose a doctor, date and time of their appointment, then the appointment is stored on the backend.',
//             'Interactive calendar: users can choose a doctor, date and time of their appointment and also they can see if the appointment time is unavailable (if it has been booked).',
//             'Leaving reviews on doctors and writing comments.',
//             'Added internalization support for English and German.',
//             'Added custom hook which return data fetched from the backend and loading state.',
//         ],
//         learnt: [
//             'Using React Router v6.11 to implement navigation between different pages.',
//             'Using Leaflet to display an interactive map and also changing the default pin to a custom one.',
//             'Connecting frontend and backend using fetch API and how to work with common HTTP methods.',
//             'How to use RTL to write integration tests that span multiple components.',
//             'Building custom hook to share form validation logic between components.',
//             'How to implement internalization.',
//         ],
//         struggled: [
//             'Implementing calendar: it was hard to make days of the week appear like in a real calendar. For example, if today is Wed. Mon and Tue should not be displayed as to not allow the user to book an appointment in the past.',
//             'New version of React Router. No comments.',
//             'Writing a lot of custom CSS (in later projects I switched to Tailwind, which simplified the process).',
//         ],
//     },
//     {
//         title: 'Meow food',
//         pic: [
//             '/meow-food.png',
//             '/meow-food-1.png',
//             '/meow-food-2.png',
//             '/meow-food-3.png',
//             '/meow-food-4.png',
//             '/meow-food-5.png',
//         ],
//         id: 'meow-food',
//         description:
//             'This is a web-application which allows users to view UmVet vet clinic website, on which users can view doctors, make an appointment with them and leave feedback.',
//         repo: 'https://github.com/ElenaKhlebnikova/meow-food-frontend',
//         webLink: 'https://dashing-cupcake-30c83a.netlify.app',
//         backend: 'https://github.com/ElenaKhlebnikova/meow-food-backend',
//         techstack: [
//             {
//                 technology: 'React',
//                 usage: 'Main framework for building the application',
//             },
//             {
//                 technology: 'React Router',
//                 usage: 'Navigation and routing within the application',
//             },
//             {
//                 technology: 'CSS Modules',
//                 usage: 'For styling the components and prevent clashing of classes',
//             },

//             {
//                 technology: 'ESLint/Prettier/Husky',
//                 usage: 'For linting/formatting/Git-hooks',
//             },
//             {
//                 technology: 'Jest & RTL',
//                 usage: 'To write unit and integration tests',
//             },
//             {
//                 technology: 'Leaflet',
//                 usage: 'To show an interactive map on the "Contact Us" page',
//             },
//         ],
//         features: [
//             'Fully responsive.',
//             'Cart functionality in which a user can add or remove items.',
//             'Rating and comment fuctionality for the cafe.',
//             'Filtering meals by type.',
//             'Sorting meals by price.',
//         ],
//         learnt: [
//             'Using React Router v6 to implement navigation between different pages.',
//             'Using Leaflet to display an interactive map and also changing the default pin to a custom one.',
//             'Connecting frontend and backend using fetch API and how to work with common HTTP methods.',
//             'How to use RTL to write integration tests that span multiple components.',
//             'Experimented with TDD.',
//             'Using ReactHooks (including useReducer, useContext).',
//             'Building custom hook to share meal fetching logic between the components.',
//         ],
//     },
//     {
//         title: 'Portfolio',
//         pic: [
//             '/portfolio.png',
//             '/portfolio-1.png',
//             '/portfolio-2.png',
//             '/portfolio-3.png',
//             '/portfolio-4.png',
//         ],
//         id: 'portfolio',
//         description:
//             'This is my portfolio website which showcases projects I have worked on.',
//         repo: 'https://github.com/ElenaKhlebnikova/portfolio',
//         webLink: 'https://portfolio-elenakhlebnikova.vercel.app/',

//         techstack: [
//             {
//                 technology: 'Next.js',
//                 usage: 'Main framework for building the application',
//             },
//             {
//                 technology: 'Typescript',
//                 usage: 'To typecheck',
//             },
//             {
//                 technology: 'Tailwind',
//                 usage: 'CSS framework for building UI',
//             },

//             {
//                 technology: 'React Spring',
//                 usage: 'To animate UI elements',
//             },
//             {
//                 technology: 'Vercel',
//                 usage: 'To deploy the project',
//             },
//         ],
//         features: [
//             'Fully responsive.',
//             'Parallax scroll effect on the main page with multiple elements.',
//             'Animation with React Spring (project slider, project page and trailing animation for skills section).',
//             'Slider to preview projects.',
//             'Each project is represented by a page which shows all information and relevant links.',
//         ],
//         learnt: [
//             'How to implement parallax effect using 2 libraries: React Spring and React Scroll Parallax. (I decided to use React Scroll Parallax since it has more functionality).',
//             'How to implement animation using React Spring.',
//         ],
//         struggled: [
//             'Using React Spring for the first time.',
//             'Adapting parallax effect for different screen sizes.',
//         ],
//     },
// ] as TProject[]

export const PROJECTS_DATA = [] as TProject[]
