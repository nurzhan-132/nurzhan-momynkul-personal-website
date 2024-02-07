<script setup lang="ts">
const localPath = useLocalePath();
const colorMode = useColorMode();
const changeColor = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};
console.log(colorMode.value);
</script>

<template>
  <header class="header-component bg-white dark:bg-black dark:text-white">
    <nav class="wrapper header-component_content">
      <nuxt-link :to="localPath('/')" class="header-component_content__left">
        <img src="~/assets/icons/laptop_ibook_icon.svg" alt="Momynkul" />
        <h1>{{ $t("menu.shortname") }}</h1>
      </nuxt-link>

      <div class="header-component_content__right">
        <nuxt-link :to="localPath('/')">{{ $t("menu.home") }}</nuxt-link>
        <nuxt-link :to="localPath('/about')">{{ $t("menu.about") }}</nuxt-link>
        <nuxt-link :to="localPath('/project')">{{
          $t("menu.project")
        }}</nuxt-link>
        <nuxt-link :to="localPath('/contact')">{{
          $t("menu.contact")
        }}</nuxt-link>
        <!-- <img
          :src="
            colorMode.value === 'light'
              ? require('~/assets/icons/light_mode_icon.svg')
              : require('~/assets/icons/dark_mode_icon.svg')
          "
          alt="light/dark"
        /> -->

        <ElementsLanguageSwitcherComponent />
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header-component {
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.05);
  &_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;

    & > * {
      display: flex;
      gap: 20px;
      align-items: center;
    }

    &__left {
      color: $primary-color;
    }

    &__right {
      font-size: 1.2em;
      color: $heading-color;
      & > * {
        transition: 0.4s ease;
        &::after {
          content: "";
          display: block;
          width: 0;
          height: 1px;
          background: $primary-color;
          transition: width 0.4s ease;
        }
        &:hover {
          color: $primary-color;
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
