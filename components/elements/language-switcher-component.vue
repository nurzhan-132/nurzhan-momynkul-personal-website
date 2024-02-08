<script setup>
const { locale, locales, setLocale } = useI18n();

const setLanguage = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
});
</script>

<template>
  <select v-model="setLanguage" class="lang-switcher-component">
    <option
      v-for="item in locales"
      :key="item.code"
      :value="item.code"
      class="lang-switcher-component_options dark:bg-[#0b0d0e]"
    >
      {{ item.code }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.lang-switcher-component {
  background: transparent;
  border: none;
}
</style>
