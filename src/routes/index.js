import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export const routes = [
    {
        path: '/',
        element: Home,
        auth: false
    },
    {
        path: '*',
        element: NotFound,
        auth: false
    }
]