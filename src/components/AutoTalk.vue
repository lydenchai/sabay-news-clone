<template>
  <div class="flex justify-between w-full text-[#444444] md:flex-col">
    <div class="w-[73.3%] md:w-full md: mt-[20px] flex flex-col relative">
      <RouterLink to="#">
        <div class="flex items-center tab w-auto">
          Auto Talk
          <Icon icon="ic:baseline-greater-than" class="text-[24px] ml-1" />
          <div class="corner-tab"></div>
        </div>
      </RouterLink>
      <div
        class="tab-by-category h-auto mt-[30px] border-t-[3px] border-[#F2272F] p-6 md:p-3"
      >
        <div class="w-full h-full">
          <div class="flex justify-between w-full h-auto mb-5 md:gap-2">
            <RouterLink
              to="#"
              class="w-[49.5%] md:w-full h-[250px] md:h-auto flex flex-col"
            >
              <div class="box"></div>
              <img
                class="h-[170px] mb-3 object-cover"
                src="https://cdn.sabay.com/cdn/media.sabay.com/media/Chin-Sopheak/CS-17/646de09cf1953_1684922520_medium.jpg"
              />
              <div class="h-[52px] text-[14px] font-[600]">
                ផ្អើលសារព័ត៌មានបរទេស ចុះផ្សាយរឿងព្រះនាងតូច Jenna
                ចុះកុងត្រាជាតារា K-POP
              </div>
            </RouterLink>
            <RouterLink
              to="#"
              class="w-[49.5%] md:w-full h-[250px] md:h-auto flex flex-col"
            >
              <div class="box"></div>
              <img
                class="h-[170px] mb-3 object-cover"
                src="https://cdn.sabay.com/cdn/media.sabay.com/media/Chin-Sopheak/CS-17/646de09cf1953_1684922520_medium.jpg"
              />
              <div class="h-[52px] text-[14px] font-[600]">
                ផ្អើលសារព័ត៌មានបរទេស ចុះផ្សាយរឿងព្រះនាងតូច Jenna
                ចុះកុងត្រាជាតារា K-POP
              </div>
            </RouterLink>
          </div>
          <div class="card w-full">
            <div class="h-auto" v-for="value of 15" :key="value">
              <RouterLink
                to="#"
                class="flex justify-between md:flex-col w-full mt-4"
              >
                <img
                  class="min-w-[35%] h-[110px] mr-4 md:mr-0 md:mb-2 object-cover"
                  src="https://cdn.sabay.com/cdn/media.sabay.com/media/Chin-Sopheak/CS-17/646dc25b82844_1684914720_medium.jpg"
                />
                <div class="flex flex-col">
                  <div class="mb-[10px]">
                    <div class="mb-1 text-[14px] font-[600]">
                      ជួបផលិតករ និងតារាភាពយន្ដល្បីឈ្មោះ
                      មុនមហោស្រពភាពយន្តអន្តរជាតិកម្ពុជា ចាប់ផ្ដើមនៅចុងនេះ
                    </div>
                    <div class="mt-2 text-[#999999] text-[12px]">
                      ថ្ងៃនេះ ម៉ោង 15:06
                    </div>
                    <hr />
                  </div>
                  <p class="text-[#555555] text-[12px]">
                    មហោស្រពជិតចូលមកដល់ទៀតហើយ
                  </p>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[24.3%] md:w-full md:items-center md:mt-5 h-auto flex flex-col"
    >
      <AdsContent />
    </div>
  </div>
</template>

<script setup lang="ts">
import AdsContent from "../components/AdsContent.vue";
</script>

<style lang="scss" scoped>
.tab-by-category {
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.tab {
  left: 0px;
  top: -13px;
  height: 45px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  line-height: 45px;
  position: absolute;
  padding: 2px 8px 0 15px;
  background: #f2272f;

  .corner-tab {
    top: 0px;
    right: -12.5px;
    position: absolute;
    border-width: 45px 0 0 13px;
    border-color: transparent transparent transparent #f2272f;
  }
}

@media (max-width: 767px) {
  .card {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
</style>
