<template>
  <div id="calc" class="calc--wrapper">
    <div class="calc--inner">
      <div class="calc--left">
        <!-- header -->
        <div class="calc--header">
          <button @click="handleView">Hide calculator</button>
          <div class="calc--heading">Calculator</div>
          <div class="calc--subheading">
            Fill out the assumptions below to match your individual situation
          </div>
        </div>
        <!-- header  END-->

        <!-- form -->
        <form>
          <label for="average-salary">
            <span>(A) AVERAGE SALARY</span>
            <div class="p-relative">
              <input type="number" name="average-salary" id="average-salary" />
              <div class="input-pre-val pre-val--left">$</div>
            </div>
          </label>

          <label for="hrs-per-employee">
            <span> (B) MONTHLY ADMIN HOURS PER EMPLOYEE </span>
            <div class="p-relative">
              <input type="number" name="hrs-per-employee" />
              <div class="input-pre-val pre-val--right">hrs</div>
            </div>
          </label>

          <label for="software-setup-cost">
            <span>(C) SOFTWARE SETUP COST</span>
            <div class="p-relative">
              <input type="number" name="software-setup-cost" />
              <div class="input-pre-val pre-val--left">$</div>
            </div>
          </label>

          <label for="subscription-cost">
            <span>(D) SUBSCRIPTION COST</span>
            <div class="p-relative">
              <input type="number" name="subscription-cost" />
              <div class="input-pre-val pre-val--left">$</div>
            </div>
          </label>
        </form>
        <!-- form END -->
      </div>
      <div class="calc--right">
        <div class="calc--right--content">
          <div class="calc--value-wrapper">
            <div class="calc--value-currency">$</div>
            <div class="calc--value-price">377 885</div>
          </div>
          <div class="calc--value-subheading">
            Potential savings after one year
          </div>
          <div class="calc--slider">
            <Slider :tooltips="false" class="slider--main" v-model="value" />
          </div>
        </div>

        <div class="bg--overlay"></div>
        <div class="bg--container"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Slider from '@vueform/slider';
  import { ref } from 'vue';

  const value = ref(80);

  const handleView = () => {
    const item = document.querySelector('.calc--right');
    item.classList.toggle('calc--right__full');
  };
</script>

<style src="@vueform/slider/themes/default.css"></style>
