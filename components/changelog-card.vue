<template>
  <div class="overflow-hidden bg-white rounded-xl md:rounded-2xl">
    <div class="py-2 pl-3 pr-2 text-center text-white md:py-3">
      <p class="text-xs font-semibold tracking-normal sm:text-sm md:text-sm lg:text-base">{{ title }}</p>
      <p class="text-lg font-semibold sm:text-xl lg:text-2xl xl:text-3xl">{{ data }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "data"]
};
</script>