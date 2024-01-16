<script setup lang="ts">
import FaqComponent from '@/components/FaqComponent.vue'

const bgpattern: Array<string> = [
  "bg-[url('@/assets/images/background-pattern-mobile.svg?url')]",
  "sDT:bg-[url(@/assets/images/background-pattern-desktop.svg?url)]"
]
</script>
<template>
  <body class=" relative flex justify-center items-center h-screen bg-neo-light-pink">
    <div :class="` absolute top-0 w-full h-[232px] sDT:h-[320px] ${bgpattern.join(' ')} bg-cover `" />
    <FaqComponent />
  </body>
</template>