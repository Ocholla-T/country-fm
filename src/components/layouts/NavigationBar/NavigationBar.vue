<script setup lang="ts">
/*Dependencies */
import { storeToRefs } from 'pinia'

// @ts-ignore
import { useTheme } from '@store/useTheme'

/*useTheme() store state and actions */
const { isDark } = storeToRefs(useTheme())
const { changeTheme } = useTheme()
</script>

<template>
  <nav class="nav container flex flex-jc-sb flex-ai-c" :class="{ dark: isDark }">
    <div class="nav__logo">
      <router-link to="/" role="heading"> Where in the world? </router-link>
    </div>

    <div class="nav__dark-toggle flex flex-ai-c" @click="changeTheme()">
      <img
        v-if="!isDark"
        class="nav__dark-toggle__icon"
        src="../../../assets/images/moon-outline.svg"
        alt="Turn on dark mode"
      />
      <img
        v-else
        class="nav__dark-toggle__icon nav__dark-toggle__icon--light"
        src="../../../assets/images/sunny-outline.svg"
        alt="Turn on light mode"
      />

      <p class="nav__dark-toggle__desc">
        <span v-if="!isDark">Dark</span><span v-else>Light</span> Mode
      </p>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use './styles';
</style>
