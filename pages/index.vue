<template>
	<div id="app" :class="!hoverTextCheck ?'bg-[#AC76B5]' : 'bg-white'" class="transition-all duration-500 delay-150 h-screen w-screen flex justify-center items-center">
		<div class="flex flex-col justify-center items-center w-[800px]">
				<div :class="!hoverTextCheck ?'text-white' : 'transition delay-150 duration-500 text-transparent bg-clip-text bg-gradient-to-r from-[#AC76B5] to-[#FE7D7D]'" class="text-[100px] font-bold">
					NUTTAWAT DEV
				</div>
				<div :class="!hoverTextCheck ?'text-white' : 'text-black'" class="transition delay-150 duration-500 text-[20px] mt-[-15px] mb-10 font-bold px-5">
					Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
				</div>
				<button 
				@mouseover="hoverTextCheck=true"
        @mouseleave="hoverTextCheck=false"
				class="w-[200px] py-4 border-2 bg-white rounded-lg font-bold text-[24px] pb-4.5 flex items-center justify-center border-[#FE7D7D]">
					<span v-if="hoverTextCheck">let's goooo</span>
					<span v-else>go to main page</span>
				</button>
		</div>

	</div>
</template>

<script>
export default {
	data () {
    return {
      hoverTextCheck: false
		}
	},
	methods: {
}
}

</script>

<style scoped>
button {
 --color: #560bad;
 font-family: inherit;
 height: 2.6em;
 line-height: 2.5em;
 position: relative;
 overflow: hidden;
 border: 2px solid var(--color);
 transition: color .5s;
 z-index: 1;
 font-size: 16px;
 border-radius: 6px;
 font-weight: 500;
 color: var(--color);
}

button:before {
 content: "";
 position: absolute;
 z-index: -1;
 background: var(--color);
 height: 150px;
 width: 250px;
 border-radius: 50%;
}

button:hover {
 color: #fff;
}

button:before {
 top: 100%;
 left: 100%;
 transition: all .7s;
}

button:hover:before {
 top: -30px;
 left: -30px;
}

button:active:before {
 transition: background 0s;
}
</style>>

