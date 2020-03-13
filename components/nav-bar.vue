<template>
  <header class>
    <div
      class="flex items-center justify-between p-4 text-2xl font-semibold xl:text-3xl md:justify-center"
    >
      <button @click="collapsed = !collapsed" class="md:hidden focus:outline-none">
        <img class="w-10" src="@/assets/img/icons/menu.svg" />
      </button>
      <a href="/" class="md:hidden">
        <img src="@/assets/img/logo_large.svg" class="w-24" />
      </a>
      <button @click="parentRefs.fullpage.api.moveTo(5)" class="md:hidden focus:outline-none">
        <img class="w-10" src="@/assets/img/icons/arrow.svg" />
      </button>
      <a href="/" class="hidden mr-4 md:block">
        <img src="@/assets/img/logo.svg" class="w-6 xl:w-8" />
      </a>
      <button
        v-on:click="parentRefs.fullpage.api.moveTo(1)"
        class="hidden px-5 py-2 mx-3 text-lg font-semibold text-white rounded-full focus:outline-none xl:text-xl md:block bg-p-red"
      >Home</button>
      <a
        class="hidden mx-4 cursor-pointer md:block"
        @click="parentRefs.fullpage.api.moveTo(2)"
      >Features</a>
      <a class="hidden mx-4 cursor-pointer md:block" @click="parentRefs.fullpage.api.moveTo(3)">Team</a>
      <a
        class="hidden mx-4 cursor-pointer md:block"
        @click="parentRefs.fullpage.api.moveTo(4)"
      >Changelog</a>
      <a
        class="hidden ml-4 cursor-pointer md:block"
        @click="parentRefs.fullpage.api.moveTo(5)"
      >Download</a>
    </div>
    <div
      @click="collapsed = true"
      class="absolute top-0 left-0 w-full h-screen bg-black shadow md:hidden"
      v-bind:class="{collapsed: collapsed}"
    ></div>
    <div
      class="absolute top-0 left-0 h-screen bg-white md:hidden w-72 sm:w-96 drawer"
      v-bind:class="{collapsed: collapsed}"
    >
      <button class="absolute left-0 m-4 focus:outline-none" @click="collapsed = !collapsed">
        <img class="w-10" src="@/assets/img/icons/menu.svg" />
      </button>
      <div class="flex justify-center h-full">
        <ul class="my-auto text-2xl font-semibold text-left">
          <li class="my-6">
            <a
              class="cursor-pointer"
              @click="parentRefs.fullpage.api.moveTo(1); collapsed = true"
            >Home</a>
          </li>
          <li class="my-6">
            <a
              class="cursor-pointer"
              @click="parentRefs.fullpage.api.moveTo(2); collapsed = true"
            >Features</a>
          </li>
          <li class="my-6">
            <a
              class="cursor-pointer"
              @click="parentRefs.fullpage.api.moveTo(3); collapsed = true"
            >Team</a>
          </li>
          <li class="my-6">
            <a
              class="cursor-pointer"
              @click="parentRefs.fullpage.api.moveTo(4); collapsed = true"
            >Changelog</a>
          </li>
          <li class="my-6">
            <a
              class="cursor-pointer"
              @click="parentRefs.fullpage.api.moveTo(5); collapsed = true"
            >Download</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: ["parentRefs"],
  data() {
    return {
      collapsed: true
    };
  }
};
</script>

<style>
.drawer {
  transition: transform 0.2s ease-out;
}
.drawer.collapsed {
  transform: translateX(-24rem);
}

.shadow {
  opacity: 0.5;
  transition: visibility 0.2s, opacity 0.2s linear;
}

.shadow.collapsed {
  visibility: hidden;
  opacity: 0;
}
</style>