import Welcome from "./vue/components/Welcome";
import About from "./vue/components/About";
import NotFound from "./vue/NotFound";

export default {
    mode: 'history',
    linkActiveClass: 'text-danger font-weight-bold',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Welcome,
            name: 'home'
        },
        {
            path: '/about',
            component: About,
            name: 'about'
        }
    ]
};
