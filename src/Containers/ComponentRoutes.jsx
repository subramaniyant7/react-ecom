import Home from '../Components/home';
import About from '../Components/about';
import Dashboard from '../Components/dashboard';
import Login from '../Components/login';
import Logout from '../Components/logout';
import Todolist from '../Components/todolist';
import Cart from '../Components/cart';
import ProductDetail from '../Components/productdetails';

export const ComponentRoutes = {
  default: [
    { path: '/', component: Home, page: 'Home' },
    { path: '/detail/:id', component: ProductDetail, page: 'Product Detail' },
    { path: '/about', component: About, page: 'About' },
    { path: '/todo', component: Todolist, page: 'Todo' },
    { path: '/login', component: Login, page: 'Login' }
  ],
  authenticate :[
      { path: '/dashboard', component: Dashboard, page: 'Dashboard' },
      { path: '/cart', component: Cart, page: 'Cart' },
      { path: '/logout', component: Logout, page: 'Logout' }, 
  ]
};

