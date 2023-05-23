<template>
  <div class="text-2xl w-full">
    <section class="w-full h-[120px] px-[20%] bg-black flex items-center">
      <img class="w-[82px] h-[82px]" src="https://news.sabay.com.kh/img/logo.png">
    </section>
    <van-sticky>
      <nav id="menu" class="navbar navbar-inverse navbar-static-top h-[50px] bg-[#fa1939] px-[20%] flex items-center">
        <ul class="nav navbar-nav h-full">
          <li class=" h-full grid items-center">
            <a class="" href="">
              <Icon icon="ic:baseline-house" class="text-[25px]" />
            </a>
          </li>
          <li id="entertainment" class="category">
            <a href="" class="menu_entertainment">កម្សាន្ត</a>
          </li>
          <li id="technology" class="category">
            <a href="" class="menu_technology">បច្ចេកវិទ្យា</a>
          </li>
          <li id="life" class="category">
            <a href="" class="menu_life ">ជីវិតនិងសង្គម</a>
          </li>
          <li id="sport" class="category">
            <a href="" class="menu_sport">កីឡា</a>
          </li>
          <li id="cambodia-sea-game-2023" class="category">
            <a href="" class="menu_cambodia_sea_game_2023">ស៊ីហ្គេម ២០២៣</a>
          </li>
          <li id="autotalk" class="tag">
            <a href="" class="menu_autotalk">AUTO TALK</a>
          </li>
          <li id="smart-axiata" class="tag">
            <a href="" class="menu_smart-axiata">SMART HUB</a>
          </li>
          <li id="deals" class="category">
            <a href="" class="menu_deals no-unicode">DEALS</a>
          </li>
          <li id="starting-up" class="tag">
            <a href="" class="menu_starting-up">STARTING UP</a>
          </li>
        </ul>
      </nav>
    </van-sticky>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
#menu {
  color: #BDB9A6;
}

#menu.navbar-inverse .navbar-nav>li.active>a {
  background: #D90C16;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
}

#menu.navbar-inverse .navbar-nav>li>a:hover,
#menu.navbar-inverse .navbar-nav>li.active>a {
  color: #ffffff;
  transition: 0.3s;
}

#menu.navbar-inverse .navbar-nav>li>a {
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Koulen', Arial, Helvetica, sans-serif;
  font-size: 18px;
  position: relative;
}

.navbar-nav>li {
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav>li>a {
  font-weight: bold;
  padding: 10px 15px;
  font-family: 'Koulen', Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
}
</style>