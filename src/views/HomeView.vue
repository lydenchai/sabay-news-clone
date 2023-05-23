<template>
  <div class="w-full h-auto">
    <div
      class="container flex justify-between my-4 h-[500px] mb-4 border-collapse"
    >
      <div class="features_post flex flex-col h-full w-[73.5%]">
        <div class="features_post_top w-full h-[500px] flex">
          <div
            class="w-[485px] h-[250px] relative"
            style="
              background-image: url(https://cdn.sabay.com/cdn/media.sabay.com/media/Chin-Sopheak/CS-17/646c2c2b289b5_1684810740_large.jpg);
              background-size: 486px 250px;
              background-position: center;
              background-repeat: no-repeat;
            "
          >
            <div class="absolute">
              <div class="bg-black w-[100px]">Click me</div>
            </div>
          </div>
          <div
            class="w-[346px] h-[250px]"
            style="
              background-image: url(https://cdn.sabay.com/cdn/media.sabay.com/media/Simala/May-PR-Article/646c5d4489905_1684823340_large.jpg);
              background-size: 346px 250px;
              background-position: center;
              background-repeat: no-repeat;
            "
          ></div>
        </div>
        <div class="features_post_bottom w-full h-[500px] flex">
          <div
            class="w-[485px] h-[250px]"
            style="
              background-image: url(https://cdn.sabay.com/cdn/media.sabay.com/media/Chin-Sopheak/CS-17/646c2c2b289b5_1684810740_large.jpg);
              background-size: 486px 250px;
              background-position: center;
              background-repeat: no-repeat;
            "
          ></div>
          <div
            class="w-[346px] h-[250px]"
            style="
              background-image: url(https://cdn.sabay.com/cdn/media.sabay.com/media/Simala/May-PR-Article/646c5d4489905_1684823340_large.jpg);
              background-size: 346px 250px;
              background-position: center;
              background-repeat: no-repeat;
            "
          ></div>
        </div>
      </div>
      <div class="top-right-ads w-[26.5%]">
        <img
          src="https://ads.sabay.com/images/478ff8e39b041fe5d475200ffe81d645.jpg"
          class="w-full h-[248px] mb-1.5"
        />
        <img
          src="https://ads.sabay.com/images/2284a6573b045b616d7625c2b2ead5a3.gif"
          class="w-full h-[248px]"
        />
      </div>
    </div>
    <div class="categories">
      <div class="category">
        <div class="tab-by-category h-[630px] mt-[30px]"></div>
      </div>
      <div class="category">
        <div class="tab-by-category h-[630px] mt-[30px]"></div>
      </div>
      <div class="category">
        <div class="tab-by-category h-[630px] mb-[100px]"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.categories {
  .category {
    .tab-by-category {
      background: #ffffff;
      box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
