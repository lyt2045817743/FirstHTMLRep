import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
    loginReturn:"",
    isLogin:false,
    isLogining:false
}

const mutations={
    changeLogining(state,flag){
        state.isLogining=flag;
        sessionStorage.setItem("isLogining",flag);
    },
    setUser(state,user){
        if(user){
            state.loginReturn=user;
            state.isLogin=true;
        }
        else if(user==null){
            state.loginReturn="";
            state.isLogin=false;
        }
    }
}

const getters={
    
}

const modules={

}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    modules
})