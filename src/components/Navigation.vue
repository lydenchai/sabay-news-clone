<template>
  <div class="text-2xl w-full">
    <section class="w-full h-[120px] px-[20.3%] bg-black flex items-center">
      <img
        class="w-[82px] h-[82px]"
        src="https://news.sabay.com.kh/img/logo.png"
      />
    </section>
    <van-sticky>
      <nav
        id="menu"
        class="navbar navbar-inverse navbar-static-top h-[50px] bg-[#fa1939] px-[20.3%] flex items-center"
      >
        <ul class="nav navbar-nav h-full">
          <li class="h-full grid items-center">
            <RouterLink to="/">
              <Icon icon="ic:baseline-house" class="text-[25px]" />
            </RouterLink>
          </li>
          <li id="entertainment" class="category">
            <RouterLink to="/entertainment" class="menu_entertainment"
              >កម្សាន្ត</RouterLink
            >
          </li>
          <li id="technology" class="category">
            <RouterLink to="" class="menu_technology">បច្ចេកវិទ្យា</RouterLink>
          </li>
          <li id="life" class="category">
            <RouterLink to="" class="menu_life">ជីវិតនិងសង្គម</RouterLink>
          </li>
          <li id="sport" class="category">
            <RouterLink to="" class="menu_sport">កីឡា</RouterLink>
          </li>
          <li id="cambodia-sea-game-2023" class="category">
            <RouterLink to="" class="menu_cambodia_sea_game_2023"
              >ស៊ីហ្គេម ២០២៣</RouterLink
            >
          </li>
          <li id="autotalk" class="tag">
            <RouterLink to="" class="menu_autotalk">AUTO TALK</RouterLink>
          </li>
          <li id="smart-axiata" class="tag">
            <RouterLink to="" class="menu_smart-axiata">SMART HUB</RouterLink>
          </li>
          <li id="deals" class="category">
            <RouterLink to="" class="menu_deals no-unicode">DEALS</RouterLink>
          </li>
          <li id="starting-up" class="tag">
            <RouterLink to="" class="menu_starting-up">STARTING UP</RouterLink>
          </li>
        </ul>
      </nav>
    </van-sticky>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#menu {
  color: #bdb9a6;
}

#menu.navbar-inverse .navbar-nav > li.active > a {
  background: #d90c16;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
}

#menu.navbar-inverse .navbar-nav > li > a:hover,
#menu.navbar-inverse .navbar-nav > li.active > a {
  color: #ffffff;
  transition: 0.3s;
}

#menu.navbar-inverse .navbar-nav > li > a {
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  position: relative;
  font-weight: 600;
}

.navbar-nav > li {
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav > li > a {
  padding: 8px 14px;
}

a {
  text-decoration: none;
}
</style>
