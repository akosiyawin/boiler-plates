<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/dashboard"  v-if="loggedIn">Dashboard</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" >
                    <router-link class="nav-link" to="/about"  v-if="loggedIn" >About</router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/" exact>Welcome</router-link>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" >
                    <router-link class="nav-link" to="/login"  v-if="!loggedIn">Login</router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/register"  v-if="!loggedIn">Register</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import Api from "../tools/api"
export default {
    name: "Navbar",
    data(){
        return {
            loggedIn: false
        }
    },
    methods: {
        setLoggedIn(){
            Api.isLoggedIn()
            .then(r=>{
                this.loggedIn = true
            })
            .catch(err=>{
                this.loggedIn = false
            })
        }
    },
    mounted() {
        this.setLoggedIn()
        this.$root.$on('tae', (status)=>{
            this.loggedIn = status
        })
    }
}
</script>

<style scoped>

</style>
