
<template>
  <full-page id="fullpage" ref="fullpage" class="fullPage" :options="options">
    <!-- Home section -->
    <section id="home-section" class="section fp-table">
      <div class="fp-tableCell">
        <div class="grid items-center grid-cols-2 p-6 md:pl-1/6">
          <div class="order-first col-span-2 md:col-span-1 md:order-last">
            <img
              id="hero"
              src="../assets/img/hero_phones.svg"
              class="hidden w-64 max-w-md mx-auto md:block lg:w-3/5"
            />
            <img
              id="hero"
              src="../assets/img/hero_phones_small.svg"
              class="w-7/12 pb-6 mx-auto md:hidden"
            />
          </div>
          <div class="order-last col-span-2 md:col-span-1 md:order-first">
            <div>
              <h1 class="pb-6 text-3xl font-bold text-p-green">Android™, enhanced</h1>
              <div class="text-gray-700 md:px-1/12">
                <span class="font-semibold">Potato Open Sauce Project</span>
                <p
                  class="pb-4"
                >(or POSP, for short) is a buttery smooth aftermarket Android™ firmware.</p>
                <p>Combining newest security patches, original features and wide device support, POSP is a product created to make your life easier and breathe some fresh air into the custom ROM scene.</p>
              </div>
              <a href="#features">
                <button
                  class="px-5 py-3 mt-6 font-semibold text-white rounded-full bg-p-blue hover:bg-blue-700"
                >Learn more</button>
              </a>
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
            src="../assets/img/better_notch.svg"
            class="w-24 w-full mx-auto md:w-64 lg:w-80 xl:w-96"
          />
        </div>
        <div class="col-span-8 md:col-span-3">
          <img src="../assets/img/volpanel_small.svg" class="w-10/12 w-full mx-auto md:hidden" />
        </div>
        <div class="col-span-8 md:col-span-4">
          <img src="../assets/img/ota.svg" class="w-full mx-auto md:w-64 lg:w-80 xl:w-96" />
        </div>
      </div>
      <img
        src="../assets/img/volpanel.svg"
        style="transform: translateY(1px);"
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
            instagram="https://instagram.com/z3rnico"
            twitter="https://twitter.com/Z3rNico"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Raj Jadeja"
            role="Lead developer"
            img="https://avatars2.githubusercontent.com/u/35948825?s=460&v=4"
            github="https://github.com/rajadeja"
            instagram="https://instagram.com/raj__jadeja"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="HrX"
            role="Lead developer"
            img="https://avatars2.githubusercontent.com/u/29352339?s=460&v=4"
            github="https://github.com/HrX03"
            instagram="https://instagram.com/b_b_biancoboi"
            twitter="https://twitter.com/HrX2003"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Ashwin R C"
            role="Lead developer"
            img="https://avatars1.githubusercontent.com/u/40515149?s=460&v=4"
            github="https://github.com/Ashwin4RC"
            twitter="https://twitter.com/Ashwin4RC"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Shreyansh Lodha"
            role="Lead developer"
            img="https://avatars0.githubusercontent.com/u/17433364?s=460&v=4"
            github="https://github.com/ShreyanshLodha"
            instagram="https://instagram.com/shreyanshlodha"
            twitter="https://twitter.com/_ShreyanshLodha"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Till Kottmann"
            role="Developer"
            img="https://avatars0.githubusercontent.com/u/13785669?s=400&v=4"
            github="https://github.com/deletescape"
            instagram="https://instagram.com/deletescape"
            twitter="https://twitter.com/deletescape"
          />
        </div>
        <div class="col-span-3 md:col-span-2">
          <team-card
            name="Jagrav Naik"
            role="Developer"
            img="https://avatars2.githubusercontent.com/u/4006623?s=460&v=4"
            github="https://github.com/JagravNaik"
            instagram="https://www.instagram.com/jagrav_"
            twitter="https://twitter.com/JagravN"
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
      <img
        src="../assets/img/team_circle_top.svg"
        style="transform: translateY(-1px);"
        class="absolute top-0 right-0 hidden w-24 lg:w-32 md:block"
      />
      <img
        src="../assets/img/team_circle_bottom.svg"
        style="transform: translateY(1px);"
        class="absolute bottom-0 left-0 hidden w-24 lg:w-32 md:block"
      />
    </section>
    <!-- Changelog section -->
    <section id="changelog-section" class="section">
      <div class="grid items-center grid-cols-1 pt-3">
        <div class="col-span-6">
          <h1
            class="text-xl font-semibold text-center text-black md:text-4xl"
          >Curious to see what’s changed?</h1>
        </div>
        <div class="col-span-6">
          <h1 class="text-xl font-semibold text-center text-black md:text-4xl">Coming soon!</h1>
        </div>
        <div class="col-span-6">
          <h1 class="text-lg font-semibold text-center text-black md:text-2xl">
            <p>In the meantime you can check the changelog on github!</p>
          </h1>
        </div>
        <div class="col-span-6">
          <a
            href="https://github.com/PotatoProject/vendor_potato/blob/croquette-release/CHANGELOG.md"
            target="_blank"
          >
            <button
              class="px-5 py-3 mt-6 font-semibold text-white rounded-full bg-p-blue hover:bg-blue-700"
            >Click here</button>
          </a>
        </div>
      </div>
      <img
        src="../assets/img/phone_top.svg"
        style="width: 11.2rem; transform: translateY(1px);"
        class="absolute bottom-0 left-0 hidden md:block"
      />
    </section>
    <!-- Download section -->
    <section id="download-section" class="section">
      <div class="grid items-center grid-cols-1 p-6 mt-3 mb-32 md:mb-96 lg:mb-104">
        <div class="col-span-1">
          <h1
            class="my-6 text-xl font-semibold text-center text-white sm:text-2xl md:text-4xl"
          >Like what you see?</h1>
        </div>
        <div class="col-span-1 mb-6 text-white">
          <p class>Great! Head to our downloads page, grab</p>
          <p>a zip file for your desired device and you</p>
          <p>should be all set. Happy flashing!</p>
        </div>
        <div class="col-span-1">
          <a href="https://sourceforge.net/projects/posp/files/" target="_blank">
            <button
              class="px-5 py-3 mb-10 font-semibold bg-white rounded-full text-p-blue hover:bg-gray-300"
            >Download</button>
          </a>
        </div>
        <div class="col-span-1">
          <h1
            class="mb-6 text-xl font-semibold text-center text-white sm:text-2xl md:mb-0 md:text-4xl"
          >Don’t see your device on the list?</h1>
        </div>
        <div class="col-span-1 mb-6">
          <UserDevCardMobile class="w-full md:hidden" />
        </div>
        <div class="col-span-1">
          <DevDevCardMobile class="w-full md:hidden" />
        </div>
      </div>
      <div class="absolute bottom-0 flex hidden w-full pb-10 md:flex">
        <div class="flex-1">
          <DevCard class="w-64 ml-auto mr-12 bg-p-yellow xl:w-96 lg:w-80 xl:mr-20">
            <p
              class="pb-5"
            >Don’t worry, we’re supporting more and more devices as we grow, so there is a chance that in the near future, we’ll support yours too!</p>
            <p>Some developers also build POSP unofficially, so you can search your device’s xda page for one and try it out. We’re not responsible for any bugs you encounter in those builds, though.</p>
          </DevCard>
        </div>
        <div class="flex-1">
          <DevCard class="w-64 ml-12 bg-p-red xl:ml-20 lg:w-80 xl:w-96">
            <p class="pb-5">
              So you think you have the guts to cook a potato or two by yourself? Great! POSP is entirely open source, so head out to our
              <a
                href="https://t.me/SaucyPotatoesOfficial"
                class="font-semibold text-p-yellow"
                target="_blank"
              >GitHub page</a> instructions and get right to it!
            </p>
            <p>
              Or have you been building POSP unofficially for some time now and want to become a maintainer? Fill out
              <a
                href="https://t.me/AshwinRC"
                class="font-semibold text-p-yellow"
                target="_blank"
              >this form</a> and we’ll see what we can do!
            </p>
          </DevCard>
        </div>
      </div>
      <div class="absolute bottom-0 w-full bg-black md:h-10 lg:h-12">
        <ul
          class="h-full py-4 pl-5 text-left md:p-0 text-p-gray md:items-center md:inline-flex md:flex text-2xs lg:text-xs xl:text-sm"
        >
          <li class="px-1 pb-1 md:pb-0 lg:pr-2">Website created by Karol Szcześniak & Nico Franke</li>
          <li class="px-1 py-1 md:py-0 lg:px-2">
            <a href="https://t.me/SaucyPotatoesOfficial" target="_blank">Our Telegram channel</a>
          </li>
          <li class="px-1 py-1 md:py-0 lg:px-2">
            <a href="https://github.com/PotatoProject" target="_blank">Our GitHub</a>
          </li>
          <li class="px-1 py-1 md:py-0 lg:px-2">
            <a href="https://crowdin.com/project/posp" target="_blank">Help us with translation</a>
          </li>
          <li class="pt-1 pl-1 md:pt-0 lg:pl-2">© 2020 Potato Open Sauce Project</li>
        </ul>
      </div>
      <img
        src="../assets/img/phone_bottom.svg"
        style
        class="absolute top-0 left-0 hidden w-40 md:block"
      />
    </section>
  </full-page>
</template>

<script>
import TeamCard from "~/components/team-card";
import DevCard from "~/components/dev-card";
import UserDevCardMobile from "~/components/user-dev-card-mobile";
import DevDevCardMobile from "~/components/dev-dev-card-mobile";
export default {
  data() {
    return {
      options: {
        anchors: ["home", "features", "team", "changelog", "download"],
        sectionsColor: ["#ffffff", "#4285f4", "#db4437", "#ffffff", "#4285f4"],
        navigation: true,
        scrollingSpeed: 750,
        navigationPosition: "left",
        autoScrolling: true,
        fitToSection: false
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
    TeamCard,
    DevCard,
    UserDevCardMobile,
    DevDevCardMobile
  }
};
</script>