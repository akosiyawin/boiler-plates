<template>
    <div class="container">
        <button @click="appendPet">Append Pet</button>
        <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(cat,index) in cats">
            <th scope="row" v-text="index"></th>
            <td v-text="cat.name"></td>
            <td v-text="cat.type"></td>
        </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
    name: "About",
    computed: {
       /* mapState is the preferable syntax
        cats(){
          return this.$store.state.cats
        },*/

        /*A state is placed in a computed, to watch for changes*/
        ...mapState([
            'cats'
        ])
    },
    mounted() {
        console.log(this.cats[0].name)
    },
    methods: {
        ...mapActions([
            'addPet'
        ]),
        appendPet(){
            const pet = {
                name : 'Dogy Cat',
                type: 'Aso malaki'
            }
            this.addPet(pet)
        }
    }
}
</script>

<style scoped>

</style>
