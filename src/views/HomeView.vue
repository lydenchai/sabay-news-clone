<template>
  <div class="w-full h-auto mb-[80px] home-container">
    <div class="flex justify-between mt-4 w-full h-[500px] border-collapse">
      <div class="features_post flex flex-col h-full w-[73.3%]">
        <div class="features_post_top w-full h-[500px] flex">
          <div
            class="bg-img w-[57.5%] h-[250px] relative"
            style="
              background-image: url(https://static01.nyt.com/images/2021/05/17/business/14altGates-print/merlin_183135423_1167fa8a-7940-427e-b690-68876010d286-superJumbo.jpg);
              background-size: 100% 250px;
              background-position: center;
              background-repeat: no-repeat;
            "
          >
            <div class="absolute">
              <RouterLink to="/technology">
                <div class="category-btn category-btn1 w-auto">
                  បច្ចេកវិទ្យា
                  <div class="corner corner1"></div>
                </div>
              </RouterLink>
            </div>
            <div class="feature_post_content absolute bottom-0">
              <div class="p-6">
                <div
                  class="text-white mb-3 hover:text-red-500 text-[16px] font-medium"
                >
                  ស្ថាបនិកក្រុមហ៊ុន Microsoft លោក ប៊ីល ហ្គេត
                  បាន​អះអាង​ក្នុងព្រឹត្តិការណ៍ AI Forward 2023
                  កាលពីថ្ងៃទី២២ឧសភា​ថា AI
                  នឹង​ចូលមកជំនួស​រឿង២យ៉ាងធំបំផុត​លើអ៊ីនធើណេតគឺ​ search engine
                  និង​វេបសាយ​លក់ទំនិញ។
                </div>
                <div class="text-white">ថ្ងៃនេះ ម៉ោង 13:12</div>
              </div>
            </div>
          </div>
          <div
            class="w-[42.5%] h-[250px] relative"
            style="
              background-image: url(https://cdn.sabay.com/cdn/media.sabay.com/media/Simala/May-PR-Article/646c5d4489905_1684823340_large.jpg);
              background-size: 100% 250px;
              background-position: center;
              background-repeat: no-repeat;
            "
          >
            <div class="absolute">
              <RouterLink to="/life">
                <div class="category-btn category-btn2 w-[100px]">
                  ជីវិតនិងសង្គម
                  <div class="corner corner2"></div>
                </div>
              </RouterLink>
            </div>
            <div class="feature_post_content absolute bottom-0">
              <div class="p-6">
                <div
                  class="text-white mb-3 hover:text-red-500 text-[16px] font-medium"
                >
                  អគារតេជោអភិវឌ្ឍន៍ ដែលទើបសម្ពោធ មាន១២ជាន់! ដឹងអត់ថា ជាន់នីមួយៗ
                  ព្យាបាលជំងឺ និងមាន​មុខងារ​អ្វីខ្លះ?
                </div>
                <div class="text-white">ថ្ងៃនេះ ម៉ោង 13:12</div>
              </div>
            </div>
          </div>
        </div>
        <div class="features_post_top w-full h-[500px] flex">
          <div
            class="w-[57.5%] h-[250px] relative"
            style="
              background-image: url(https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/4d/da.jpg);
              background-size: 100% 250px;
              background-position: center;
              background-repeat: no-repeat;
            "
          >
            <div class="absolute">
              <RouterLink to="/entertainment">
                <div class="category-btn category-btn3 w-auto">
                  កម្សាន្ត
                  <div class="corner corner3"></div>
                </div>
              </RouterLink>
            </div>
            <div class="feature_post_content absolute bottom-0">
              <div class="p-5">
                <div
                  class="text-white mb-3 hover:text-red-500 text-[16px] font-medium"
                >
                  អគារតេជោអភិវឌ្ឍន៍ ដែលទើបសម្ពោធ មាន១២ជាន់! ដឹងអត់ថា ជាន់នីមួយៗ
                  ព្យាបាលជំងឺ និងមាន​មុខងារ​អ្វីខ្លះ?
                </div>
                <div class="text-white">ថ្ងៃនេះ ម៉ោង 13:12</div>
              </div>
            </div>
          </div>
          <div
            class="w-[42.5%] h-[250px] relative"
            style="
              background-image: url(https://cdn.sabay.com/cdn/media.sabay.com/media/Simala/May-PR-Article/646c5d4489905_1684823340_large.jpg);
              background-size: 100% 250px;
              background-position: center;
              background-repeat: no-repeat;
            "
          >
            <div class="absolute">
              <RouterLink to="/sports">
                <div class="category-btn category-btn4 w-[50px]">
                  កីឡា
                  <div class="corner corner4"></div>
                </div>
              </RouterLink>
            </div>
            <div class="feature_post_content absolute bottom-0">
              <div class="p-5">
                <div
                  class="text-white mb-3 hover:text-red-500 text-[16px] font-medium"
                >
                  អគារតេជោអភិវឌ្ឍន៍ ដែលទើបសម្ពោធ មាន១២ជាន់! ដឹងអត់ថា ជាន់នីមួយៗ
                  ព្យាបាលជំងឺ និងមាន​មុខងារ​អ្វីខ្លះ?
                </div>
                <div class="text-white">ថ្ងៃនេះ ម៉ោង 13:12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top-right-ads w-[26%]">
        <img
          src="https://ads.sabay.com/images/478ff8e39b041fe5d475200ffe81d645.jpg"
          class="w-full h-[247px] mb-[6px]"
        />
        <img
          src="https://ads.sabay.com/images/2284a6573b045b616d7625c2b2ead5a3.gif"
          class="w-full h-[247px]"
        />
      </div>
    </div>
    <div class="categories">
      <div class="category h-auto my-[40px] flex flex-col relative">
        <RouterLink to="/video-clip">
          <div class="flex items-center tab tab-video text-[18px] w-auto">
            វីដេអូ
            <Icon icon="ic:baseline-greater-than" class="text-[24px] ml-1" />
            <div class="corner-tab corner-video"></div>
          </div>
        </RouterLink>
        <div
          class="tab-by-category h-auto mt-[30px] border-t-[3px] border-[#FA5480] p-6"
        >
          <div class="w-full h-full flex flex-col">
            <div class="flex justify-between w-full h-auto mb-2">
              <div class="row">
                <div
                  class="float-left xl:w-[33.3%] sm:w-full"
                  v-for="value of 3"
                  :key="value"
                >
                  <RouterLink to="#" class="flex flex-col w-[99.5%] h-full">
                    <img
                      class="h-[199px]"
                      src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Social-International/June(2)/June_30/64214760db9c7_1679902560_medium.jpg"
                    />
                    <div class="mt-2 text-[15px] font-semibold">
                      កោះរ៉ុង មានអ្វីពិសេសខ្លះទើបភ្ញៀវទេសចរបរទេស
                      ដែលមកកម្ពុជាមិនដែលរំលង តែងទៅលេងគ្មានដាច់
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="w-full flex justify-between">
              <div class="w-[70%] h-auto flex justify-between">
                <div class="row">
                  <div
                    class="float-left xl:w-[25%] lg:w-[30%] sm:w-[50%]"
                    v-for="value of 8"
                    :key="value"
                  >
                    <RouterLink to="#" class="h-full flex flex-col mb-2 mr-5">
                      <img
                        class="h-[92px] w-ful"
                        src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Social-International/June(2)/June_27/63d9cb63c47d3_1675217760_medium.jpg"
                      />
                      <div class="text-[13px] font-medium mt-1">
                        IQ មួយលាន! អ្នកចាំទីឡើងជ្រុល
                        បានប្រើក្បាច់មួយសង្គ្រោះស្ថានការណ៍
                        ដែលកីឡាករទូទៅរកនឹកមិនឃើញ
                      </div>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="w-[30%]">
                <img
                  class="w-full"
                  src="https://ads.sabay.com/images/03307f3c9ad63b97b9dffa2bd6ad2e31.gif"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="category h-auto my-[40px] flex flex-col relative">
        <RouterLink to="/entertainment">
          <div class="flex items-center tab tab-entertainment w-auto">
            កម្សាន្ត
            <Icon icon="ic:baseline-greater-than" class="text-[24px] ml-1" />
            <div class="corner-tab corner-entertainment"></div>
          </div>
        </RouterLink>
        <div
          class="tab-by-category h-auto mt-[30px] border-t-[3px] border-[#FA5480] p-6"
        >
          <div class="w-full h-full flex justify-between">
            <div class="flex item justify-between w-[45%] h-auto mb-2">
              <RouterLink to="#" class="flex flex-col h-full">
                <div
                  class="ele h-[199px] w-[321px]"
                  style="
                    background-image: url('https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Social-International/June(2)/June_30/64214760db9c7_1679902560_medium.jpg');
                    background-color: #161616;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: auto;
                  "
                ></div>
                <div
                  class="w-[321px] bg-[#FA5480] text-[22px] p-5 text-white font-semibold"
                >
                  កោះរ៉ុង មានអ្វីពិសេសខ្លះទើបភ្ញៀវទេសចរបរទេស
                  ដែលមកកម្ពុជាមិនដែលរំលង តែងទៅលេងគ្មានដាច់
                </div>
              </RouterLink>
            </div>
            <div class="w-full flex justify-between">
              <div class="row">
                <div
                  class="float-left xl:w-[25%] lg:w-[30%] sm:w-[50%]"
                  v-for="value of 8"
                  :key="value"
                >
                  <RouterLink
                    to="#"
                    class="h-full flex flex-col mb-2 ml-5 relative"
                  >
                    <img
                      class="h-[92px] w-ful"
                      src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Social-International/June(2)/June_27/63d9cb63c47d3_1675217760_medium.jpg"
                    />
                    <div class="text-[13px] font-medium mt-1">
                      IQ មួយលាន! អ្នកចាំទីឡើងជ្រុល
                      បានប្រើក្បាច់មួយសង្គ្រោះស្ថានការណ៍
                      ដែលកីឡាករទូទៅរកនឹកមិនឃើញ
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="category h-auto my-[40px] flex flex-col relative">
        <RouterLink to="/technology">
          <div class="flex items-center tab tab-technology w-auto">
            បច្ចេកវិទ្យា
            <Icon icon="ic:baseline-greater-than" class="text-[24px] ml-1" />
            <div class="corner-tab corner-technology"></div>
          </div>
        </RouterLink>
        <div
          class="tab-by-category h-auto mt-[30px] border-t-[3px] border-[#38c378] p-6"
        >
          <div class="w-full h-full flex justify-between">
            <div class="flex item justify-between w-[45%] h-auto mb-2">
              <RouterLink to="#" class="flex flex-col h-full">
                <div
                  class="ele h-[199px] w-[321px]"
                  style="
                    background-image: url('https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Social-International/June(2)/June_30/64214760db9c7_1679902560_medium.jpg');
                    background-color: #161616;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: auto;
                  "
                ></div>
                <div
                  class="w-[321px] bg-[#38c378] text-[22px] p-5 text-white font-semibold"
                >
                  កោះរ៉ុង មានអ្វីពិសេសខ្លះទើបភ្ញៀវទេសចរបរទេស
                  ដែលមកកម្ពុជាមិនដែលរំលង តែងទៅលេងគ្មានដាច់
                </div>
              </RouterLink>
            </div>
            <div class="w-full flex justify-between">
              <div class="row">
                <div
                  class="float-left xl:w-[25%] lg:w-[30%] sm:w-[50%]"
                  v-for="value of 8"
                  :key="value"
                >
                  <RouterLink
                    to="#"
                    class="h-full flex flex-col mb-2 ml-5 relative"
                  >
                    <img
                      class="h-[92px] w-ful"
                      src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Social-International/June(2)/June_27/63d9cb63c47d3_1675217760_medium.jpg"
                    />
                    <div class="text-[13px] font-medium mt-1">
                      IQ មួយលាន! អ្នកចាំទីឡើងជ្រុល
                      បានប្រើក្បាច់មួយសង្គ្រោះស្ថានការណ៍
                      ដែលកីឡាករទូទៅរកនឹកមិនឃើញ
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="category h-auto my-[40px] flex flex-col relative">
        <RouterLink to="/life">
          <div class="flex items-center tab tab-life w-auto">
            ជីវិតនិងសង្គម
            <Icon icon="ic:baseline-greater-than" class="text-[24px] ml-1" />
            <div class="corner-tab corner-life"></div>
          </div>
        </RouterLink>
        <div
          class="tab-by-category h-auto mt-[30px] border-t-[3px] border-[#f9a62b] p-6"
        >
          <div class="w-full h-full flex justify-between">
            <div class="flex item justify-between w-[45%] h-auto mb-2">
              <RouterLink to="#" class="flex flex-col h-full">
                <div
                  class="ele h-[199px] w-[321px]"
                  style="
                    background-image: url('https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Social-International/June(2)/June_30/64214760db9c7_1679902560_medium.jpg');
                    background-color: #161616;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: auto;
                  "
                ></div>
                <div
                  class="w-[321px] bg-[#f9a62b] text-[22px] p-5 text-white font-semibold"
                >
                  កោះរ៉ុង មានអ្វីពិសេសខ្លះទើបភ្ញៀវទេសចរបរទេស
                  ដែលមកកម្ពុជាមិនដែលរំលង តែងទៅលេងគ្មានដាច់
                </div>
              </RouterLink>
            </div>
            <div class="w-full flex justify-between">
              <div class="row">
                <div
                  class="float-left xl:w-[25%] lg:w-[30%] sm:w-[50%]"
                  v-for="value of 8"
                  :key="value"
                >
                  <RouterLink
                    to="#"
                    class="h-full flex flex-col mb-2 ml-5 relative"
                  >
                    <img
                      class="h-[92px] w-ful"
                      src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Social-International/June(2)/June_27/63d9cb63c47d3_1675217760_medium.jpg"
                    />
                    <div class="text-[13px] font-medium mt-1">
                      IQ មួយលាន! អ្នកចាំទីឡើងជ្រុល
                      បានប្រើក្បាច់មួយសង្គ្រោះស្ថានការណ៍
                      ដែលកីឡាករទូទៅរកនឹកមិនឃើញ
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="category h-auto my-[40px] flex flex-col relative">
        <RouterLink to="/sports">
          <div class="flex items-center tab tab-sport w-auto">
            កីឡា
            <Icon icon="ic:baseline-greater-than" class="text-[24px] ml-1" />
            <div class="corner-tab corner-sport"></div>
          </div>
        </RouterLink>
        <div
          class="tab-by-category h-auto mt-[30px] border-t-[3px] border-[#4390F8] p-6"
        >
          <div class="w-full h-full flex justify-between">
            <div class="flex item justify-between w-[45%] h-auto mb-2">
              <RouterLink to="#" class="flex flex-col h-full">
                <div
                  class="ele h-[199px] w-[321px]"
                  style="
                    background-image: url('https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Social-International/June(2)/June_30/64214760db9c7_1679902560_medium.jpg');
                    background-color: #161616;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: auto;
                  "
                ></div>
                <div
                  class="w-[321px] bg-[#4390F8] text-[22px] p-5 text-white font-semibold"
                >
                  កោះរ៉ុង មានអ្វីពិសេសខ្លះទើបភ្ញៀវទេសចរបរទេស
                  ដែលមកកម្ពុជាមិនដែលរំលង តែងទៅលេងគ្មានដាច់
                </div>
              </RouterLink>
            </div>
            <div class="w-full flex justify-between">
              <div class="row">
                <div
                  class="float-left xl:w-[25%] lg:w-[30%] sm:w-[50%]"
                  v-for="value of 8"
                  :key="value"
                >
                  <RouterLink
                    to="#"
                    class="h-full flex flex-col mb-2 ml-5 relative"
                  >
                    <img
                      class="h-[92px] w-ful"
                      src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Social-International/June(2)/June_27/63d9cb63c47d3_1675217760_medium.jpg"
                    />
                    <div class="text-[13px] font-medium mt-1">
                      IQ មួយលាន! អ្នកចាំទីឡើងជ្រុល
                      បានប្រើក្បាច់មួយសង្គ្រោះស្ថានការណ៍
                      ដែលកីឡាករទូទៅរកនឹកមិនឃើញ
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="category h-auto my-[40px] flex flex-col relative">
        <RouterLink to="/deals">
          <div class="flex items-center tab tab-deal w-auto">
            DEALS
            <Icon icon="ic:baseline-greater-than" class="text-[24px] ml-1" />
            <div class="corner-tab corner-deal"></div>
          </div>
        </RouterLink>
        <div
          class="tab-by-category h-auto mt-[30px] border-t-[3px] border-[#555555] p-6"
        >
          <div class="w-full h-full flex justify-between">
            <div class="flex justify-between w-[45%] h-auto mb-2">
              <RouterLink to="#" class="flex flex-col h-full">
                <div
                  class="h-[199px] w-[321px]"
                  style="
                    background-image: url('https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Social-International/June(2)/June_30/64214760db9c7_1679902560_medium.jpg');
                    background-color: #161616;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: auto;
                  "
                ></div>
                <div
                  class="w-[321px] bg-[#555555] text-[22px] p-5 text-white font-semibold"
                >
                  កោះរ៉ុង មានអ្វីពិសេសខ្លះទើបភ្ញៀវទេសចរបរទេស
                  ដែលមកកម្ពុជាមិនដែលរំលង តែងទៅលេងគ្មានដាច់
                </div>
              </RouterLink>
            </div>
            <div class="w-full flex justify-between">
              <div class="row">
                <div
                  class="float-left xl:w-[25%] lg:w-[30%] sm:w-[50%]"
                  v-for="value of 8"
                  :key="value"
                >
                  <RouterLink
                    to="#"
                    class="h-full flex flex-col mb-2 ml-5 relative"
                  >
                    <img
                      class="h-[92px] w-ful"
                      src="https://cdn.sabay.com/cdn/media.sabay.com/media/sabay-news/Social-International/June(2)/June_27/63d9cb63c47d3_1675217760_medium.jpg"
                    />
                    <div class="text-[13px] font-medium mt-1">
                      IQ មួយលាន! អ្នកចាំទីឡើងជ្រុល
                      បានប្រើក្បាច់មួយសង្គ្រោះស្ថានការណ៍
                      ដែលកីឡាករទូទៅរកនឹកមិនឃើញ
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home-container {
  .tab-by-category {
    box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }

  .feature_post_content {
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.603));
  }

  .category-btn {
    top: 10px;
    left: 0px;
    height: 35px;
    font-size: 14px;
    color: #ffffff;
    font-weight: 600;
    line-height: 35px;
    position: absolute;
    padding: 2px 8px 0 15px;

    &.category-btn1 {
      background: #f9a62b;
    }

    &.category-btn2 {
      background: #38c378;
    }

    &.category-btn3 {
      background: #fa5480;
    }

    &.category-btn4 {
      background: #4390f8;
    }

    .corner {
      top: 0;
      right: -12px;
      position: absolute;
      border-width: 35px 0 0 13px;

      &.corner1 {
        border-color: transparent transparent transparent #f9a62b;
      }

      &.corner2 {
        border-color: transparent transparent transparent #38c378;
      }

      &.corner3 {
        border-color: transparent transparent transparent #fa5480;
      }

      &.corner4 {
        border-color: transparent transparent transparent #4390f8;
      }
    }
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

    &.tab-video {
      background: #f2272f;
    }

    &.tab-entertainment {
      background: #fa5480;
    }

    &.tab-technology {
      background: #38c378;
    }

    &.tab-life {
      background: #f9a62b;
    }

    &.tab-sport {
      background: #4390f8;
    }

    &.tab-deal {
      background: #555555;
    }

    .corner-tab {
      top: 0px;
      right: -12.5px;
      position: absolute;
      border-width: 45px 0 0 13px;

      &.corner-video {
        border-color: transparent transparent transparent #f2272f;
      }

      &.corner-entertainment {
        border-color: transparent transparent transparent #fa5480;
      }

      &.corner-technology {
        border-color: transparent transparent transparent #38c378;
      }

      &.corner-life {
        border-color: transparent transparent transparent #f9a62b;
      }

      &.corner-sport {
        border-color: transparent transparent transparent #4390f8;
      }

      &.corner-deal {
        border-color: transparent transparent transparent #555555;
      }
    }
  }
}
// .item:hover .box .ele {
//   background-size: 100% auto;
//   transition: all 0.2s ease;
//   box-shadow: inset 0 0 20px 0 black;
// }
// .box .ele {
//   background-color: #161616;
//   background-position: center center;
//   background-repeat: no-repeat;
// }
</style>
