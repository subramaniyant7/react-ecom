import Home from '../Components/home';
import About from '../Components/about';
import Dashboard from '../Components/dashboard';
import Login from '../Components/login';
import Logout from '../Components/logout';
import Todolist from '../Components/todolist';
import Cart from '../Components/cart';

export const ComponentRoutes = {
  default: [
    { path: '/', component: Home, page: 'Home', breadcrumb: { Home: '/' } },
    { path: '/about', component: About, page: 'About', breadcrumb: { Home: '/' } },
    { path: '/todo', component: Todolist, page: 'Todo', breadcrumb: { Home: '/' } },
    { path: '/about', component: About, page: 'About', breadcrumb: { Home: '/' } },
    { path: '/dashboard', component: Dashboard, page: 'Dashboard', breadcrumb: { Home: '/' } },
    { path: '/cart', component: Cart, page: 'Cart', breadcrumb: { Home: '/' } },
    { path: '/login', component: Login, page: 'Login', breadcrumb: { Home: '/' } },
    { path: '/logout', component: Logout, page: 'Logout', breadcrumb: { Home: '/' } },
  ],
};
