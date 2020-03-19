Vue.component('num-input',{
    template:`
        <div>
            <input v-model.number="currentValue" :thisMax="max" :thisMin="min"></input>
        </div>
    `,
    props:{
        max:{
            type:Number,
            default:Infinity
        },
        min:{
            type:Number,
            default:-Infinity
        },
        value:{
            type:Number,
            default:0
        }
    },
    data(){
        return {
            currentValue:this.value,
            thisMax:this.max,
            thisMin:this.min
        }
    },
    watch: {
        currentValue:function(newVal){
            this.$emit('input',newVal);
        },
        value:function(newVal){
            this.updateValue(newVal);
        }
    },
    methods:{
        updateValue(val){
            if(val>this.max){
                this.currentValue=this.max;
            }else if(val<this.min){
                this.currentValue=this.min;
            }
        }
    },
    mounted() {
        this.updateValue(this.value)
    },
})