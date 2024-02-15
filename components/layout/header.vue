<script setup lang="ts">
import { ref } from "vue";

const localPath = useLocalePath();
const colorMode = useColorMode();
const changeColor = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="header-component bg-white dark:bg-[#0b0d0e]">
    <nav class="wrapper header-component_content">
      <nuxt-link
        :to="localPath('/')"
        class="header-component_content__left dark:text-white"
      >
        <img src="~/assets/icons/laptop_ibook_icon.svg" alt="Momynkul" />
        <h1 class="">{{ $t("menu.shortname") }}</h1>
      </nuxt-link>

      <div
        :class="[
          isOpen ? 'visible' : '',
          'header-component_content__right',
          'text-[#3f3a64]',
          'dark:text-[#d1d2d2]',
          'bg-white',
          'dark:bg-[#0b0d0e]',
        ]"
      >
        <nuxt-link :to="localPath('/')">{{ $t("menu.home") }}</nuxt-link>
        <nuxt-link :to="localPath('/about')">{{ $t("menu.about") }}</nuxt-link>
        <nuxt-link :to="localPath('/project')">{{
          $t("menu.project")
        }}</nuxt-link>
        <nuxt-link :to="localPath('/contact')">{{
          $t("menu.contact")
        }}</nuxt-link>
        <button @click="changeColor">
          <img
            v-if="colorMode.value === 'dark'"
            src="/assets/icons/light_mode_icon.svg"
            alt="Dark mode"
          />
          <img
            v-if="colorMode.value === 'light'"
            src="/assets/icons/dark_mode_icon.svg"
            alt="Light mode"
          />
        </button>
        <ElementsLanguageSwitcherComponent />
      </div>

      <svg @click="toggleMenu" class="header-component_content__mobile fill-[#8e43e7]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px" > <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" /> </svg>
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

    > * {
      display: flex;
      gap: 20px;
      align-items: center;
    }

    &__left {
      color: $primary-color;
    }

    &__right {
      font-size: 1.2em;

      > *:not(:last-child):not(:nth-last-child(2)) {
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

      @media screen and (max-width: 760px) {
        display: none;
      }
    }

    &__mobile {
      display: none;
      cursor: pointer;

      @media screen and (max-width: 760px) {
        display: block;
      }
    }
  }

  @media screen and (max-width: 760px) {
    .visible {
      position: absolute;
      top: 100px;
      right: 0;
      flex-direction: column;
      align-items: center;
      padding: 8px;
      width: 100%;
      gap: 16px;
      display: flex;
      box-shadow: 0 3px 9px rgba(0, 0, 0, 0.05);
    }
  }
}
</style>
