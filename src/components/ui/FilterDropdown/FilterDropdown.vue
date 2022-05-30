<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import { useTheme } from '@store/useTheme'
import { gsap } from 'gsap'
import { storeToRefs } from 'pinia'

defineEmits(['fetchRegion'])

const isOpen = ref<boolean>(false)
const { isDark } = storeToRefs(useTheme())

function beforeEnter(element: HTMLDivElement): void {
  element.style.transform = 'translateY(-10px)'
  element.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)'
}

function enter(element: HTMLDivElement): void {
  gsap.to(element, {
    y: 0,
    opacity: 1,
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    ease: 'power2.out',
    duration: 0.4,
  })
}

function leave(element: HTMLDivElement): void {
  gsap.fromTo(
    element,
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      y: 0,
      opacity: 1,
    },
    {
      y: -10,
      opacity: 0,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 0.6,
    },
  )
}
</script>

<template>
  <div :class="{ dark: isDark }" class="dropdown flex" @click="isOpen = !isOpen">
    <div class="dropdown-title flex">
      <h4>Filter by Region</h4>
      <img
        class="dropdown-title__icon"
        src="../../../assets/images/chevron-down-outline.svg"
        alt="open dropdown"
      />
    </div>
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <aside v-if="isOpen" class="dropdown-content flex flex-fd-c">
        <p @click="$emit('fetchRegion', ($event.target as HTMLParagraphElement))">Africa</p>
        <p @click="$emit('fetchRegion', ($event.target as HTMLParagraphElement))">Americas</p>
        <p @click="$emit('fetchRegion', ($event.target as HTMLParagraphElement))">Asia</p>
        <p @click="$emit('fetchRegion', ($event.target as HTMLParagraphElement))">Europe</p>
        <p @click="$emit('fetchRegion', ($event.target as HTMLParagraphElement))">Oceania</p>
      </aside>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@use './styles';
</style>
