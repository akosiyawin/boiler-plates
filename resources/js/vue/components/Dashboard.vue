<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                User Information
            </div>
            <div class="card-body" v-if="user !== null">
                <h5 class="card-title">Name: {{user.name}}</h5>
                <p class="card-text">Email: {{user.email}}</p>
            </div>
            <div class="card-footer">
                <button @click="logout" class="btn btn-danger">Logout</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data(){
        return {
            user : null
        }
    },
    mounted() {
        axios.get('/api/user')
        .then(r=>{
            this.$root.$emit('toggleLogin',true)
            this.user = r.data.data
        })
    },
    methods: {
        logout(){
            axios.post('/api/user/logout')
            .then(()=>{
                this.$root.$emit('toggleLogin',false)
                this.$router.push({name:'welcome'})
            })
        }
    }
}
</script>

<style scoped>

</style>
