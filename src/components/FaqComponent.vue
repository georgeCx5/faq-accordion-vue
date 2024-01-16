<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import iconPlus from '@/assets/images/icon-plus.svg?url'
import iconMinus from '@/assets/images/icon-minus.svg?url'
import iconStar from '@/assets/images/icon-star.svg?url'

interface IData {
   question: string,
   answer: string,
   isOpened: boolean,
   isHovered: boolean
}
const data: Ref<Array<IData>> = ref([
   {
      answer: "What is Frontend Mentor, and how will it help me?",
      question: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
      isOpened: false,
      isHovered: false
   },
   {
      answer: "Is Frontend Mentor free?",
      question: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      isOpened: false,
      isHovered: false
   },
   {
      answer: "Can I use Frontend Mentor projects in my portfolio?",
      question: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      isOpened: false,
      isHovered: false
   },
   {
      answer: "How can I get help if I'm stuck on a challenge?",
      question: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      isOpened: false,
      isHovered: false
   }
])
const setHover = (val: boolean) => {
   return val ? 'text-neo-pink' : ''
}
const clickedIcon = (val: number) => {
   let n: number = 0
   while (n < 4) {
      data.value[n].isOpened = false
      n++
   }
   data.value[val].isOpened = !data.value[val].isOpened
}
onMounted(() => data.value[0].isOpened = true)
</script>
<template>
   <section
      class=" relative flex flex-col gap-6 sDT:gap-8 w-full sDT:w-[58.6%] max-w-[400px] sDT:max-w-[600px] bg-neo-white mx-6 sDT:mx-0 p-6 sDT:p-10 text-neo-dark-purple font-work-sans rounded-lg sDT:rounded-2xl z-10">
      <div class=" flex gap-6 select-none">
         <img :src="iconStar" alt="iconStar" class=" w-6 sDT:w-9">
         <h1 class=" text-[2rem] sDT:text-[3.5rem] leading-[2.375rem] sDT:leading-[4.125rem] font-bold">FAQs</h1>
      </div>
      <div>
         <article v-for="(item, index) in data" :key="index">
            <button @click="clickedIcon(index)" @mouseenter="item.isHovered = true" @mouseleave="item.isHovered = false"
               class=" flex justify-between items-center gap-4 w-full text-left select-none">
               <h2
                  :class="` ${setHover(item.isHovered)} sDT:text-lg leading-[1.1875rem] sDT:leading-[1.3125rem] font-semibold`">
                  {{ item.answer }}</h2>
               <img v-show="!item.isOpened" :src="iconPlus" alt="icon plus">
               <img v-show="item.isOpened" :src="iconMinus" alt="icon minus">
            </button>
            <p v-show="item.isOpened" class=" mt-6 text-neo-grayish-purple text-sm sDT:text-base leading-[150%]">
               {{ item.question }}</p>
            <div v-if="index < data.length - 1" class=" w-full h-px bg-neo-light-pink my-5 sDT:my-6" />
         </article>
      </div>
   </section>
</template>