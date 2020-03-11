<template>
  <div class="overflow-hidden bg-white rounded-t-xl">
    <div class="py-2 font-semibold text-white bg-black lg:py-3 md:text-sm lg:text-base xl:text-lg" style="background: rgba(0, 0, 0, 0.1)">I'm a user</div>
    <div class="py-3 pl-3 pr-2 md:py-3 sm:pl-3 lg:py-4">
      <div class="px-3 text-center text-white md:text-sm lg:text-base xl:text-lg">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header"]
};
</script>