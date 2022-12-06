import ReactRestaurantSinglePage from '../assets/project/react-restaurant-single-page.png';
import ReactTmdbMovie from '../assets/project/react-tmdb-movie.png';
import ReactCountryCovid19 from '../assets/project/react-country-covid19.png';
import ReactFirebaseBlog from '../assets/project/react-firebase-blog.png';
import BusinessUi1 from '../assets/project/business-ui-1.png';
import BusinessUi2 from '../assets/project/business-ui-2.png';

const projectData = [
    {
        id:1,
        image: ReactRestaurantSinglePage,
        tech: [
            { name: 'React' },
            { name: 'Scss' },
            { name: 'Material UI' }
        ],
        title: 'Restaurant Single Page',
        liveUrl: 'https://react-restaurant-single-page.netlify.app/',
        githubUrl: 'https://github.com/kadirula/react-restaurant-single-page',
        homeShow: true
    },
    {
        id:2,
        image: ReactTmdbMovie,
        tech: [
            { name: 'React' },
            { name: 'Sass' },
            { name: 'TMDB' },
        ],
        title: 'TMDB Movie',
        liveUrl: 'https://react-tmdb-movie-app-v1.netlify.app/',
        githubUrl: 'https://github.com/kadirula/react-movie-app-tmdb',
        homeShow: true
    },
    {
        id:3,
        image: ReactCountryCovid19,
        tech: [
            { name: 'React' },
            { name: 'RapidAPI' },
            { name: 'Tailwind' }
        ],
        title: 'Country Covid Statistic',
        liveUrl: 'https://country-covid19-statistics.netlify.app/',
        githubUrl: 'https://github.com/kadirula/country-covid-statistics',
        homeShow: true
    },
    {
        id:4,
        image: ReactFirebaseBlog,
        tech: [
            { name: 'React' },
            { name: 'Sass' },
            { name: 'Bootstrap' },
        ],
        title: 'Firebase Blog',
        liveUrl: 'https://firebase-react-blog-app.netlify.app/',
        githubUrl: 'https://github.com/kadirula/firebase-react-blog-app',
        homeShow: true
    },
    {
        id:5,
        image: BusinessUi1,
        tech: [
            { name: 'Html' },
            { name: 'Css' },
            { name: 'JavaScript' }
        ],
        title: 'Business UI - 1',
        liveUrl: 'https://project-business-ui1.netlify.app/',
        githubUrl: 'https://github.com/kadirula/business-ui-1',
        homeShow: true
    },
    {
        id:6,
        image: BusinessUi2,
        tech: [
            { name: 'Html' },
            { name: 'Css' },
            { name: 'JavaScript' }
        ],
        title: 'Business UI - 2',
        liveUrl: 'https://project-business-ui2.netlify.app/',
        githubUrl: 'https://github.com/kadirula/business-ui-2',
        homeShow: true
    },
];

export default projectData;