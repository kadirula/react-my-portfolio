import Home from '../pages/Home';
import Project from '../pages/Project';
import NotFound from '../pages/NotFound';
import Blog from '../pages/Blog';

export const routes = [
    {
        path: '/',
        element: Home,
        auth: false
    },
    {
        path: '/project',
        element: Project,
        auth: false
    },
    {
        path: '/blog',
        element: Blog,
        auth: false
    },
    {
        path: '*',
        element: NotFound,
        auth: false
    }
]