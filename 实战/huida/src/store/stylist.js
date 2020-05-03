import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state={
    stylistInfo:"",
}

const mutations={
    setStylistInfo(state,stylist){
        if(stylist){
            state.stylistInfo=stylist;
        }
        else{
            state.stylistInfo="";
        }
    }
}
const actions={
    
}

const getters={
    
}

const modules={

}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules
})