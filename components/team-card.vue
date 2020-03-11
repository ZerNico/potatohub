<template>
  <div class="overflow-hidden bg-white rounded-xl md:rounded-2xl">
    <div class="flex items-center py-3 pl-3 pr-2 md:py-3 sm:pl-3 lg:py-4">
      <img class="w-10 mr-2 rounded-full sm:mr-3 min-w-10 sm:w-12 md:w-10 lg:w-12" :src="img" />
      <div class="text-left truncate">
        <p
          class="text-xs font-semibold leading-tight text-black truncate sm:text-sm md:text-sm lg:text-lg"
        >{{ name }}</p>
        <p
          class="text-xs text-black truncate sm:text-xs md:text-xs lg:text-sm"
        >{{ role }}</p>
      </div>
    </div>
    <div class="flex flex-wrap px-3 py-2 bg-gray-100 border-t border-gray-300">
      <a v-if="github != null" class="pr-3" :href="github" target="_blank">
        <img class="w-5 lg:w-6" src="@/assets/img/icons/github.svg" />
      </a>
      <a v-if="youtube != null" class="pr-3" :href="youtube" target="_blank">
        <img class="w-5 lg:w-6" src="@/assets/img/icons/youtube.svg" />
      </a>
      <a v-if="instagram != null" class="pr-3" :href="instagram" target="_blank">
        <img class="w-5 lg:w-6" src="@/assets/img/icons/instagram.svg" />
      </a>
      <a v-if="twitter != null" class="pr-3" :href="twitter" target="_blank">
        <img class="w-5 lg:w-6" src="@/assets/img/icons/twitter.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "role", "img", "youtube", "github", "instagram", "twitter"]
};
</script>