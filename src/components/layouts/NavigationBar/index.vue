<script setup lang="ts"></script>

<template>
  <nav class="nav container flex flex-jc-sb flex-ai-c">
    <div class="nav__logo">
      <h1>Where in the world?</h1>
    </div>
    <div class="nav__dark-toggle flex flex-ai-c">
      <img
        class="nav__dark-toggle__icon"
        src="../../../assets/images/moon-outline.svg"
        alt="Turn on dark mode"
      />
      <p class="nav__dark-toggle__desc">Dark Mode</p>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use './styles';
</style>
