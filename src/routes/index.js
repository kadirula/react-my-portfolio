import Home from '../pages/Home';
import Project from '../pages/Project';

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
]