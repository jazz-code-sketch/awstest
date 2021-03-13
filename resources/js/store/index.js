import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
        createPersistedState({
            key: 'SRS',
            storage: localStorage       
        })],
    state: {
        //isLogged            : false,
        planInfo : {
            ConstructionCode: '',
            RevisionNumber  : '',
            RequestNumber   : '',
            HouseType       : '',
        },

        
    },
    mutations: {
      // loggedIn (state) {
      //   state.isLogged = true;
      // },
      // loggedOut (state) {
      //   state.isLogged = false;
      // }
    }



















});
