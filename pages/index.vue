
<template>
  <full-page id="fullpage" ref="fullpage" class="fullPage" :options="options">
    <!-- Home section -->
    <section id="home-section" class="section fp-table">
      <div class="fp-tableCell">
        <div class="grid items-center grid-cols-2 p-6 md:pl-1/6">
          <div class="order-first col-span-2 md:col-span-1 md:order-last">
            <img
              id="hero"
              src="../assets/img/hero_phones.svg?inline"
              class="hidden w-64 max-w-md mx-auto md:block lg:w-3/5"
            />
            <img
              id="hero"
              src="../assets/img/hero_phones_small.svg?inline"
              class="w-7/12 pb-6 mx-auto md:hidden"
            />
          </div>
          <div class="order-last col-span-2 md:col-span-1 md:order-first">
            <div>
              <h1 class="pb-6 text-3xl font-bold text-green-500">Android™, enhanced</h1>
              <div class="text-gray-700 md:px-1/12">
                <span class="font-semibold">Potato Open Sauce Project</span>
                <p
                  class="pb-4"
                >(or POSP, for short) is a buttery smooth aftermarket Android™ firmware.</p>
                <p>Combining newest security patches, original features and wide device support, POSP is a product created to make your life easier and breathe some fresh air into the custom ROM scene.</p>
              </div>
              <button
                class="px-5 py-3 mt-6 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
              >Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Feature section -->
    <section id="feature-section" class="section">
      <div class="grid items-center grid-cols-8 row-gap-6 p-6 md:row-gap-20 md:pl-1/6">
        <div class="col-span-8 md:col-span-4">
          <div class="inline-block mx-auto">
            <h1
              class="hidden font-bold text-left text-white md:block md:text-xl lg:text-2xl xl:text-3xl"
            >
              <p>We've included many</p>
              <p>useful features,</p>
              <p>to help with everyday</p>
              <p>tasks</p>
            </h1>
            <h1 class="text-2xl font-bold text-center text-white sm:text-3xl md:hidden">
              <p>We've included many useful</p>
              <p>features,</p>
              <p>to help with everyday tasks</p>
            </h1>
          </div>
        </div>
        <div class="col-span-8 md:col-span-4">
          <img
            id="hero"
            src="../assets/img/better_notch.svg?inline"
            class="w-24 w-full mx-auto md:w-64 lg:w-80 xl:w-96"
          />
        </div>
        <div class="col-span-8 md:col-span-3">
          <img
            id="hero"
            src="../assets/img/volpanel_small.svg?inline"
            class="w-10/12 w-full mx-auto md:hidden"
          />
        </div>
        <div class="col-span-8 md:col-span-4">
          <img
            id="hero"
            src="../assets/img/ota.svg?inline"
            class="w-full mx-auto md:w-64 lg:w-80 xl:w-96"
          />
        </div>
      </div>
      <img
        id="hero"
        src="../assets/img/volpanel.svg?inline"
        style
        class="absolute bottom-0 hidden left-1/6 md:block md:w-48 lg:w-56 xl:w-64"
      />
    </section>
    <!-- Team section -->
    <section id="team-section" class="section">
      <div class="grid items-center grid-cols-1 pt-3">
        <div class="col-span-6">
          <h1 class="text-4xl font-semibold text-center text-white md:text-5xl">Meet the team</h1>
        </div>
      </div>
      <div
        class="grid items-center grid-cols-6 gap-3 px-6 pb-6 md:pl-1/8 md:pr-8 md:gap-4 lg:gap-6 lg:pr-1/12"
      >
        <div class="col-span-6">
          <h1 class="text-3xl font-semibold text-left text-white">Core Team</h1>
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Kshitij Gupta"
            role="Founder"
            img="https://avatars1.githubusercontent.com/u/18647641?s=460&v=4"
            github="https://github.com/AgentFabulous"
            instagram="https://instagram.com/agent_fabulous"
            twitter="https://twitter.com/Agent_fabulous"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Nico Franke"
            role="Co-founder"
            img="https://avatars1.githubusercontent.com/u/23036430?s=460&v=4"
            github="https://github.com/ZerNico"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Raj Jadeja"
            role="Lead developer"
            img="https://avatars2.githubusercontent.com/u/35948825?s=460&v=4"
            github="https://github.com/rajadeja"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="HrX"
            role="Lead developer"
            img="https://avatars2.githubusercontent.com/u/29352339?s=460&v=4"
            github="https://github.com/HrX03"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Ashwin R C"
            role="Lead developer"
            img="https://avatars1.githubusercontent.com/u/40515149?s=460&v=4"
            github="https://github.com/Ashwin4RC"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Shreyansh Lodha"
            role="Lead developer"
            img="https://avatars0.githubusercontent.com/u/17433364?s=460&v=4"
            github="https://github.com/ShreyanshLodha"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Till Kottmann"
            role="Developer"
            img="https://avatars0.githubusercontent.com/u/13785669?s=400&v=4"
            github="https://github.com/deletescape"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Jagrav Naik"
            role="Developer"
            img="https://avatars2.githubusercontent.com/u/4006623?s=460&v=4"
            github="https://github.com/JagravNaik"
          />
        </div>
        <div class="col-span-6 md:col-span-2">
          <team-card
            name="SphericalKat"
            role="Developer"
            img="https://avatars0.githubusercontent.com/u/31761843?s=460&v=4"
            github="https://github.com/ATechnoHazard"
          />
        </div>
        <div class="col-span-6">
          <h1 class="text-3xl font-semibold text-left text-white">Designers</h1>
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Rishi Bafna"
            role="UI / UX Designer"
            img="https://i.imgur.com/XylFonZ.png"
            twitter="https://twitter.com/rshbfn"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Karol Szcześniak"
            role="UI / UX Designer"
            img="https://avatars2.githubusercontent.com/u/24192214?s=460&v=4"
            github="https://github.com/McAwesomePL"
          />
        </div>
        <div class="col-span-6 md:col-span-2">
          <team-card
            name="Parth Shah"
            role="Designer and Animator"
            img="https://avatars0.githubusercontent.com/u/41704108?s=460&v=4"
            youtube="https://www.youtube.com/channel/UCkzhkIspDgx1HsUnA2oeUqA"
            github="https://github.com/valvze"
          />
        </div>
      </div>
    </section>
    <section id="changelog-section" class="section">Changelog....</section>
    <section id="download-section" class="section">Downloads....</section>
  </full-page>
</template>

<script>
import TeamCard from "~/components/team-card";
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
      }
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
    }
  },
  components: {
    TeamCard
  }
};
</script>