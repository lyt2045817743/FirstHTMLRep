import Vue from 'vue'
import Vuex from 'vuex'
import Stylist from './stylist'

Vue.use(Vuex);

const state={
    user:"",
    hasLogin:false,
    isLogining:false,
    isStylist:false,
}

const mutations={
    changeLogining(state,flag){
        state.isLogining=flag;
        sessionStorage.setItem("isLogining",flag);
    },
    setUser(state,user){
        if(user){
            state.user=user;
            state.isLogin=true;
        }
        else if(user==null){
            state.user="";
            state.isLogin=false;
        }
        
    },
    changeHasLogin(state,flag){
        state.hasLogin=flag;
    },
    changeIsStylist(state,flag){
        state.isStylist=flag;
    }
}
const actions={
    setUser(context,data){
        context.commit("setUser",data);
    }
}

const getters={
    
}

const modules={
    Stylist
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules
})