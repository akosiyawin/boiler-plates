import VueRouter from "vue-router";
import routes from "../routes";
const router = new VueRouter(routes)
import Api from "./api";


/*This is a way better for handling Middleware Auth*/
router.beforeEach((to,from,next) => {
    if(to.meta.auth){
        Api.isLoggedIn()
        .then(r=>{
            next()
        })
        .catch(err=>{
            next({name:'login'})
        })

    }else if (to.meta.auth === undefined){
        next()
    }else{
        Api.isLoggedIn()
        .then(r=>{
            next({name:'dashboard'})
        })
        .catch(err=>{
            next()
        })
    }
})

export default router
