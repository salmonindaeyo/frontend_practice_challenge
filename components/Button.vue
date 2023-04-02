<template>
<div>

<div >
   <nuxt-link :to="Route"> <button  :class="css">
<div class="mr-2"><img  :src="img" /></div>
<div>{{text}} </div>
</button>

</nuxt-link>
    
</div>


 

     

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
        Click() {
            
        },
    },
  props: {
    text: String ,
    css : String ,
    Route : String ,
    img :String
    
    
 
  }
    
}
</script>