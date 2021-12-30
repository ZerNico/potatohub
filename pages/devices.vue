<template>
  <div class="w-screen">
    <button
      v-for="device in devices"
      :key="device.name"
      class="px-5 py-3 my-6 font-semibold text-white rounded-full focus:outline-none bg-p-blue hover:bg-blue-700 block mr-auto ml-auto"
    >
      <a :href="device.url">{{ device.name }}</a>
    </button>
    <button
      class="px-5 py-3 my-6 font-semibold text-white rounded-full focus:outline-none bg-p-gray hover:bg-gray-700 block mr-auto ml-auto"
    >
      <a href="https://sourceforge.net/projects/posp/files/">Archive</a>
    </button>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const fetchedDevices = await $axios.$get(
      "https://raw.githubusercontent.com/PotatoProject/vendor_potato/frico-release/devices.json"
    );
    const devices = Array.from(Object.entries(fetchedDevices)).map(
      ([name, body]) => {
        return { url: `${body.repo}/releases/latest`, name };
      }
    );
    return { devices };
  },
};
</script>

<style>
</style>
