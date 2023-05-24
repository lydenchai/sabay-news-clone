<template>
  <div class="flex justify-between w-full text-[#444444]">
    <div class="w-[73.3%] mt-[20px] flex flex-col relative">
      <RouterLink to="/entertainment">
        <div class="flex items-center tab w-auto">
          កម្សាន្ត
          <Icon icon="ic:baseline-greater-than" class="text-[24px] ml-1" />
          <div class="corner-tab"></div>
        </div>
      </RouterLink>
      <div class="tab-by-category h-auto mt-[30px] border-t-[3px] border-[#FA5480] p-6">
        <div class="w-full h-full">
          <div class="flex justify-between w-full mb-5">
            <RouterLink to="" class="w-[48.5%] h-[288px] flex flex-col">
              <img class="h-[206px] mb-3"
                src="https://cdn.sabay.com/cdn/media.sabay.com/media/Chin-Sopheak/CS-17/646de09cf1953_1684922520_medium.jpg">
              <div class="h-[52px]">ផ្អើលសារព័ត៌មានបរទេស ចុះផ្សាយរឿងព្រះនាងតូច Jenna ចុះកុងត្រាជាតារា K-POP</div>
            </RouterLink>
            <RouterLink to="" class="w-[48.5%] h-[288px] flex flex-col">
              <img class="h-[206px] mb-3"
                src="https://cdn.sabay.com/cdn/media.sabay.com/media/Chin-Sopheak/CS-17/646de09cf1953_1684922520_medium.jpg">
              <div class="h-[52px]">ផ្អើលសារព័ត៌មានបរទេស ចុះផ្សាយរឿងព្រះនាងតូច Jenna ចុះកុងត្រាជាតារា K-POP</div>
            </RouterLink>
          </div>
          <div v-for="value of 15" :key="value">
            <RouterLink to="" class="flex justify-between w-full mt-4">
              <img class="w-[35%] h-[140px] mr-4"
                src="https://cdn.sabay.com/cdn/media.sabay.com/media/Chin-Sopheak/CS-17/646dc25b82844_1684914720_medium.jpg">
              <div class="flex flex-col">
                <div class="mb-[10px]">
                  <div class="mb-1 text-[16px] font-bold">
                    ជួបផលិតករ និងតារាភាពយន្ដល្បីឈ្មោះ មុនមហោស្រពភាពយន្តអន្តរជាតិកម្ពុជា ចាប់ផ្ដើមនៅចុងនេះ</div>
                  <div class="mt-2 text-[#999999]">
                    ថ្ងៃនេះ ម៉ោង 15:06
                  </div>
                  <hr>
                </div>
                <p class="text-[#555555]">មហោស្រពជិតចូលមកដល់ទៀតហើយ</p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[24.3%] h-auto flex flex-col ">
      <RouterLink
        to="https://ads.sabay.com/openx/www/delivery/cl.php?bannerid=61953&zoneid=149&sig=e45fa1952c692fc0da605a0cdcae720c98d7c785268d3f82eb21ec9ad004850b&oadest=https%3A%2F%2Fwww.smart.com.kh%2Fkm%2Fget-smart%2Fpromotions%2Fe-top-up-to-win%2F">
        <img src="https://ads.sabay.com/images/03307f3c9ad63b97b9dffa2bd6ad2e31.gif" class="mb-5" />
      </RouterLink>
      <RouterLink
        to="https://ads.sabay.com/openx/www/delivery/cl.php?bannerid=61379&zoneid=9&sig=d57e119a01fcd3936b83a5bcd657b08c14bfaa4812c8b4bfb932199e686a4243&oadest=https%3A%2F%2Fsl.ezecom.com.kh%2FSEAGAMESKH-SPIN-mp">
        <img src="https://ads.sabay.com/images/78354ffbabc65d7738465e5ede970e45.jpg" class="mb-5" />
      </RouterLink>
      <div class="mb-5 flex flex-col">
        <div class="text-[20px] font-bold mb-3">
          អត្ថបទពេញនិយម
          <div class="w-[55px] border-[3px] border-[#E4242C]"></div>
        </div>
        <div v-for="value in 5" :key="value">
          <RouterLink to="" class="mt-3 flex justify-between">
            <img class="min-w-[40px] max-w-[40px] max-h-[40px] min-h-[40px] mr-2"
              src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Kumnith(1)/Kumnith-Ent/Ent(1)/646d7a6f43116_1684896360_medium.jpeg">
            <div class="text-[14px] font-semibold">
              ចេញ​រឿង យូប៊ីន សន្លប់ ៧ម៉ោង
              មុន​អាច​ឡើង​យន្តហោះតំណាង​កម្ពុជា​​ទៅ​បេសកម្មនៅ​បរទេស
            </div>
          </RouterLink>
        </div>
      </div>
      <RouterLink to="">
        <img src="https://ads.sabay.com/images/9937c76549fcc1c7abfaceb7648f5768.jpg" class="mb-5" />
      </RouterLink>
      <div class="mb-5 flex flex-col ">
        <div class="text-[20px] font-bold mb-3">
          អត្ថបទថ្មី
          <div class="w-[55px] border-[3px] border-[#E4242C]"></div>
        </div>
        <div v-for="value in 5" :key="value">
          <RouterLink to="" class="mt-3 flex justify-between">
            <img class="min-w-[40px] max-w-[40px] max-h-[40px] min-h-[40px] mr-2"
              src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Kumnith(1)/Kumnith-Ent/Ent(1)/646d7a6f43116_1684896360_medium.jpeg">
            <div class="text-[14px] font-semibold">
              ចេញ​រឿង យូប៊ីន សន្លប់ ៧ម៉ោង
              មុន​អាច​ឡើង​យន្តហោះតំណាង​កម្ពុជា​​ទៅ​បេសកម្មនៅ​បរទេស
            </div>
          </RouterLink>
        </div>
      </div>
      <RouterLink to="">
        <img src="https://ads.sabay.com/images/2284a6573b045b616d7625c2b2ead5a3.gif" class="" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">

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
  background: #fa5480;

  .corner-tab {
    top: 0px;
    right: -12.5px;
    position: absolute;
    border-width: 45px 0 0 13px;
    border-color: transparent transparent transparent #fa5480;
  }
}
</style>