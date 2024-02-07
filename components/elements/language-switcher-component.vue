<script setup>
const { locale, locales, setLocale } = useI18n();

const setLanguage = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
});
</script>

<template>
  <select v-model="setLanguage">
    <option v-for="item in locales" :key="item.code" :value="item.code">
      {{ item.code }}
    </option>
  </select>
</template>
