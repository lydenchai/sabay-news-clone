<template>
  <div>
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
        <RouterLink to="#" class="mt-3 flex justify-between">
          <img class="min-w-[40px] max-w-[40px] max-h-[40px] min-h-[40px] mr-2"
            src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Kumnith(1)/Kumnith-Ent/Ent(1)/646d7a6f43116_1684896360_medium.jpeg">
          <div class="text-[12px] font-medium">
            ចេញ​រឿង យូប៊ីន សន្លប់ ៧ម៉ោង
            មុន​អាច​ឡើង​យន្តហោះតំណាង​កម្ពុជា​​ទៅ​បេសកម្មនៅ​បរទេស
          </div>
        </RouterLink>
      </div>
    </div>
    <RouterLink to="#">
      <img src="https://ads.sabay.com/images/9937c76549fcc1c7abfaceb7648f5768.jpg" class="mb-5" />
    </RouterLink>
    <div class="mb-5 flex flex-col ">
      <div class="text-[20px] font-bold mb-3">
        អត្ថបទថ្មី
        <div class="w-[55px] border-[3px] border-[#E4242C]"></div>
      </div>
      <div v-for="value in 5" :key="value">
        <RouterLink to="#" class="mt-3 flex justify-between">
          <img class="min-w-[40px] max-w-[40px] max-h-[40px] min-h-[40px] mr-2"
            src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Kumnith(1)/Kumnith-Ent/Ent(1)/646d7a6f43116_1684896360_medium.jpeg">
          <div class="text-[12px] font-medium">
            ចេញ​រឿង យូប៊ីន សន្លប់ ៧ម៉ោង
            មុន​អាច​ឡើង​យន្តហោះតំណាង​កម្ពុជា​​ទៅ​បេសកម្មនៅ​បរទេស
          </div>
        </RouterLink>
      </div>
    </div>
    <RouterLink to="#">
      <img src="https://ads.sabay.com/images/2284a6573b045b616d7625c2b2ead5a3.gif" class="" />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped></style>