function isValueNumber(value){
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value+'')
}
Vue.component('num-input',{
    //:value="currentValue"是让刚开始的值为父组件传过来的值
    template:`
        <div>
            <input type="text" :value="currentValue" @change="handleChange($event)" @keyup.up="addHandle(1)" @keyup.down="reduceHandle(1)"></input>
            <button @click="addHandle(1)" :disabled="currentValue >= max">+</button>
            <button @click="reduceHandle(1)" :disabled="currentValue <= min">-</button>
            <button @click="addHandle" :disabled="currentValue >= max">+10</button>
            <button @click="reduceHandle" :disabled="currentValue <= min">-10</button>
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
        },
        step:{
            type:Number,
            default:1
        }
    },
    data(){
        return {
            currentValue:this.value
        }
    },
    watch: {
        currentValue:function(newVal){
            this.$emit('input',newVal);
            // this.$emit('on-change',newVal)
        },
        value:function(newVal){
            this.updateValue(newVal);
        }
    },
    methods:{
        addHandle(val){
            if((typeof val)!="number"){
                this.currentValue+=this.step;
            }
            else{
                this.currentValue+=val;
            }
            this.updateValue(this.currentValue);
        },
        reduceHandle(val){
            if(typeof val!="number"){
                this.currentValue-=this.step;
            }
            else{
                this.currentValue-=val;
            }
            this.updateValue(this.currentValue);
        },
        updateValue(val){
            if(val>this.max){
                this.currentValue=this.max;
                
            }else if(val<this.min){
                this.currentValue=this.min;
            }else{
                this.currentValue=val;
            }
        },
        handleChange(event){
            var val=event.target.value.trim();
            if(isValueNumber(val)){
                val=Number(val);
                // this.currentValue=val;
                this.updateValue(val);
                event.target.value=this.currentValue;
            }
        }
    },
    mounted() {
        this.updateValue(this.value)
    },
})