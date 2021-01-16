import Welcome from "./vue/components/Welcome";
import About from "./vue/components/About";
import NotFound from "./vue/NotFound";
import Login from "./vue/components/Login";
import Register from "./vue/components/Register";
import Dashboard from "./vue/components/Dashboard";

export default {
    mode: 'history',
    linkActiveClass: 'text-primary font-weight-bold',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Welcome,
            name: 'welcome'
        },
        {
            path: '/about',
            component: About,
            name: 'about',
            meta: {
                auth: true
            }
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: {
                auth: false
            }
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
            meta: {
                auth: false
            }
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: {
                auth: true
            }
            /*Move to middleware*/
           /* beforeEnter: (to,from,next) => {
                axios.get('/api/authenticated')
                .then(r=>{
                    console.log(r)
                    next()
                })
                .catch((err)=>{
                    next({name:'login'})
                })
            }*/
        },
    ]
};
