<template>
<div class="grid grid-cols-1">

    <span class="ml-0.5 ">{{name}}</span>

 <input :type="typeInput"  :placeholder="placeholder"
 :class="css + `shadow appearance-none border rounded  py-2 pl-2  leading-tight focus:outline-none  focus:shadow-outline`"

 >

     
</div>
    
</template>

<script>
export default {
    data () {
        return {
            num: 5
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    watch: {
        
    } ,
    computed:{
        
    },
    methods: {
        methodName() {
            
        },
    },
  props: {
    typeInput: String ,
    placeholder : String ,
    css : String ,
    name : String
  }
    
}
</script>