<template>
  <div class="flex bg-black items-center justify-center relative h-screen select-none">
    <div class="w-[25.25rem] h-[25.25rem] bg-gradient-to-t from-[#151629] to-[#27283B] rounded-3xl">
      <div v-if="isVoteSuccess" data-aos="fade-up" class="flex flex-col justify-center items-center p-8 space-y-4">
          <img src="/pic/illustration-thank-you.svg" class="w-36 mt-4 mb-4" />
          <div class="py-2 bg-[#252840] text-orange-500 font-semibold text-[14px] rounded-full px-4"> You selected {{ indexVote + 1 }} out of 5 </div>
          <div class="text-[24px] text-white pt-2">Thank you!</div>
          <div class="text-12 text-gray-400 text-center"> We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! </div>
      </div>
      <div v-else>
        <div class="flex flex-col p-8 space-y-4">
      <div class="bg-[#3D3E45] rounded-full w-12 h-12 flex justify-center items-center p-4 mb-2">
        <span class="material-symbols-outlined text-orange-500 text-[9px] mb-0.5">
        star
        </span>
      </div>
      <div class="text-gray-200 text-[24px] font-medium">How did we do?</div>
      <div class="text-gray-400">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</div>
      <div class="flex flex-row justify-between pt-3 pb-3">
        <span 
        :class="indexVote===index ? 'bg-orange-500 text-white' : 'bg-[#3D3E45] text-[#838590]'"
        class="transition-all font-semibold w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#B4B6C1] cursor-pointer" 
        v-for="(item,index) in 5" :key="index"
        @click="voteRating(index)"
        >
          {{index}}
          </span>
      </div>
      <div @click="submitVote()" class="transition-all cursor-pointer bg-orange-500 rounded-full py-2 mx-2 text-white text-center hover:bg-white hover:text-orange-500">S U B M I T</div>
      </div>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'InteractiveRatingPage',
  layout: 'app',
  data () {
    return {
      indexVote : null,
      isVoteSuccess : false
    }
  },
    mounted() {
    import('aos/dist/aos.css')
    import('aos').then((AOS) => {
      AOS.init()
    })
  },
  methods: {
    voteRating(index) {
      this.indexVote = index
    },
    submitVote(){
      this.isVoteSuccess = true
    }
  },
}
</script>