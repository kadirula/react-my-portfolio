import Home from './pages/Home';
import Blog from './pages/Blog';
import Project from './pages/Project';
import Login from './pages/Login';
import Admin from './pages/Dashboard/Admin';
import BlogList from './pages/Dashboard/Blog/BlogList';
import BlogAdded from './pages/Dashboard/Blog/BlogAdded';

export const routes = [
    {
        path: '/',
        element: Admin,
        auth: false
    },
    {
        path: '/blog',
        element: Blog,
        auth: false
    },
    {
        path: '/project',
        element: Project,
        auth: false
    },
    {
        path: '/login',
        element: Login,
        auth: false
    },
    {
        path: '/admin/blog-list',
        element: BlogList,
        auth: false
    },
    {
        path: '/admin/blog-add',
        element: BlogAdded,
        auth: false
    },
]