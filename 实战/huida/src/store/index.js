import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
    user:"",
    stylistInfo:"",
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

    //公用的：修改某一对象下某些属性
    // setAtt(state,obj,modiObj){
    //     console.log(obj,modiObj);
        
    //     for(let item in modiObj){
    //         state[obj][item]=modiObj[item];
    //     }
    // }
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