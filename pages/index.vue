
<template>
  <full-page id="fullpage" ref="fullpage" class="fullPage" :options="options">
    <!-- Home section -->
    <section id="home-section" class="section fp-table">
      <div class="fp-tableCell">
        <div class="grid grid-cols-2 items-center p-6 md:pl-1/6">
          <div class="col-span-2 order-first md:col-span-1 md:order-last">
            <img
              id="hero"
              src="../assets/img/hero_phones.svg"
              class="w-64 max-w-md mx-auto hidden md:block lg:w-3/5"
            />
            <img
              id="hero"
              src="../assets/img/hero_phones_small.svg"
              class="w-7/12 mx-auto pb-6 md:hidden"
            />
          </div>
          <div class="col-span-2 order-last md:col-span-1 md:order-first">
            <div class="">
              <h1 class="text-3xl font-bold text-green-500 pb-6">Android™, enhanced</h1>
              <div class="text-gray-700 md:px-1/12">
                <span class="font-semibold">Potato Open Sauce Project</span>
                <p class="pb-4">(or POSP, for short) is a buttery smooth aftermarket Android™ firmware.</p>
                <p>Combining newest security patches, original features and wide device support, POSP is a product created to make your life easier and breathe some fresh air into the custom ROM scene.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Feature section -->
    <section id="feature-section" class="section">Features....</section>
    <!-- Team section -->
    <section id="team-section" class="section">Team....</section>
    <section id="changelog-section" class="section">Changelog....</section>
    <section id="download-section" class="section">Downloads....</section>
  </full-page>
</template>

<script>
export default {
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        anchors: ["home", "features", "team", "changelog", "download"],
        sectionsColor: ["#ffffff", "#4285f4", "#db4437", "#ffffff", "#4285f4"],
        navigation: true,
        scrollingSpeed: 750,
        navigationPosition: "left",
        autoScrolling: true
      },
      size: "sm"
    };
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.options.navigation = window.innerWidth > 768;
      this.options.autoScrolling = window.innerWidth > 768;
      if (window.innerWidth > 768) this.size = "sm";
      else this.size = "xs";
    }
  }
};
</script>