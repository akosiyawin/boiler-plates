<template>
   <div>
       <Navbar></Navbar>
       <router-view></router-view>
   </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
    name: "App",
    components: {
        Navbar
    }
}
</script>

<style scoped>

</style>
