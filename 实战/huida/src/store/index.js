import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
    pathSet:{},
    user:"",
    stylistInfo:"",
    hasLogin:false,
    isLogining:false,
    isStylist:false,
}

const mutations={
    setPathSet(state,pathObj){
        state.pathSet=pathObj;
        sessionStorage.setItem("pathSet",JSON.stringify(pathObj));
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
    //搭配师信息
    setStylistInfo(state,stylist){
        if(stylist){
            state.stylistInfo=stylist;
        }
        else{
            state.stylistInfo="";
        }
    },

    changeHasLogin(state,flag){
        state.hasLogin=flag;
    },
    changeLogining(state,flag){
        state.isLogining=flag;
    },
    changeIsStylist(state,flag){
        state.isStylist=flag;
    },
}
const actions={
    setUser(context,data){
        context.commit("setUser",data);
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
    actions,
    modules
})