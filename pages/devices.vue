<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <button v-for="device in devices" :key="device.name" class="bg-p-blue p-2 mt-2">
      <a :href="device.url">{{ device.name }}</a>
    </button>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const fetchedDevices = await $axios.$get('https://raw.githubusercontent.com/PotatoProject/vendor_potato/dumaloo-staging/devices.json')
    const devices = Array.from(Object.entries(fetchedDevices)).map(([name, body]) => {
      return { url: `${body.repo}/releases/latest`, name }
    })
    return { devices }
  },
};
</script>

<style>
</style>