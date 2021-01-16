export default {
    /*addPet(context,pet){

    },*/
    addPet : ({commit},payload) => {
        commit('addPet',payload);
    }
}
