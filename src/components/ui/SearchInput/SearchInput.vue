<script setup lang="ts">
// @ts-ignore
import { useTheme } from '@store/useTheme'
import { storeToRefs } from 'pinia'

defineProps({ modelValue: String })

const { isDark } = storeToRefs(useTheme())
</script>

<template>
  <div :class="{ dark: isDark }" class="search-input flex">
    <img
      class="search-input__icon"
      src="../../../assets/images/search-outline.svg"
      alt="search icon"
    />
    <input
      type="text"
      placeholder="Search for a country..."
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped lang="scss">
@use './styles';
</style>
