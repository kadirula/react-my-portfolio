import ReactRestaurantSinglePage from '../assets/project/react-restaurant-single-page.png';
import ReactTmdbMovie from '../assets/project/react-tmdb-movie.png';
import ReactFirebaseBlog from '../assets/project/react-firebase-blog.png';

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
];

export default projectData;