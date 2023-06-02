<template>
  <div class="text-2xl w-full">
    <section class="w-full h-[95px] px-[18.6%] bg-black flex items-center">
      <img
        class="w-[65px] h-[65px]"
        src="https://news.sabay.com.kh/img/logo.png"
      />
    </section>
    <van-sticky>
      <nav
        id="menu"
        class="navbar navbar-inverse navbar-static-top h-[40px] bg-[#fa1939] px-[18.6%] flex items-center"
      >
        <ul class="h-full">
          <li class="h-full grid items-center">
            <RouterLink to="/">
              <Icon icon="ic:baseline-house" class="text-[18px]" />
            </RouterLink>
          </li>
          <li id="entertainment" class="category">
            <RouterLink
              to="/entertainment"
              class="menu_entertainment font-semibold"
            >
              កម្សាន្ត
            </RouterLink>
          </li>
          <li id="technology" class="category">
            <RouterLink to="/technology" class="menu_technology font-semibold">
              បច្ចេកវិទ្យា
            </RouterLink>
          </li>
          <li id="life" class="category">
            <RouterLink to="/life" class="menu_life font-semibold">
              ជីវិតនិងសង្គម
            </RouterLink>
          </li>
          <li id="sport" class="category">
            <RouterLink to="/sports" class="menu_sport font-semibold"
              >កីឡា</RouterLink
            >
          </li>
          <li id="cambodia-sea-game-2023" class="category">
            <RouterLink
              to="/sea-game-2023"
              class="menu_cambodia_sea_game_2023 font-semibold"
            >
              ស៊ីហ្គេម ២០២៣
            </RouterLink>
          </li>
          <li id="autotalk" class="tag">
            <RouterLink to="/auto-talk" class="menu_autotalk font-medium">
              AUTO TALK
            </RouterLink>
          </li>
          <li id="smart-axiata" class="tag">
            <RouterLink
              to="/smart-axiata"
              class="menu_smart-axiata font-medium"
            >
              SMART HUB
            </RouterLink>
          </li>
          <li id="deals" class="category">
            <RouterLink to="/deals" class="menu_deals no-unicode font-medium">
              DEALS
            </RouterLink>
          </li>
          <li id="starting-up" class="tag">
            <RouterLink to="/starting-up" class="menu_starting-up font-medium">
              STARTING UP
            </RouterLink>
          </li>
        </ul>
      </nav>
    </van-sticky>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
a.router-link-exact-active {
  color: #fff;
  background: #d90c16;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
}

a:hover {
  color: #fff;
  transition: 0.3s;
}

ul > li > a {
  height: 40px;
  font-size: 14px;
  padding: 5px 13px;
  position: relative;
  text-decoration: none;
  display: grid;
  place-items: center;
  color: rgba(255, 255, 255, 0.8);
}

nav > ul > li {
  float: left;
}
</style>
