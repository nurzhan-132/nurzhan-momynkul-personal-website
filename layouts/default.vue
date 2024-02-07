<script setup>
</script>

<template>
  <div class="default-layout">
    <div>
      <LayoutHeader />
      <slot />
      <LayoutFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
  height: 100%;
}
</style>
