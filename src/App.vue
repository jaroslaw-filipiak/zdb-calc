<template>
  <div id="calc" class="calc--wrapper">
    <div class="calc--inner">
      <div class="calc--left">
        <!-- header -->
        <div class="calc--header">
          <button class="toggle-btn" @click="handleView">
            {{ isFull ? 'show calculator' : 'hide calculator' }}
          </button>
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
              <input
                v-model="salary"
                type="number"
                name="average-salary"
                id="average-salary"
              />
              <div class="input-pre-val pre-val--left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-zloty"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 18h-7l7 -7h-7"></path>
                  <path d="M17 18v-13"></path>
                  <path d="M14 14.5l6 -3.5"></path>
                </svg>
              </div>
            </div>
          </label>

          <label for="hrs-per-employee">
            <span> (B) MONTHLY ADMIN HOURS PER EMPLOYEE </span>
            <div class="p-relative">
              <input
                v-model="hours_per_employee"
                type="number"
                name="hrs-per-employee"
              />
              <div class="input-pre-val pre-val--left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-clock-hour-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                  <path d="M12 7v5"></path>
                  <path d="M12 12l2 -3"></path>
                </svg>
              </div>
              <div class="input-pre-val pre-val--right">hrs</div>
            </div>
          </label>

          <label for="software-setup-cost">
            <span>(C) SOFTWARE SETUP COST</span>
            <div class="p-relative">
              <input
                v-model="software_setup_cost"
                type="number"
                name="software-setup-cost"
              />
              <div class="input-pre-val pre-val--left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-zloty"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 18h-7l7 -7h-7"></path>
                  <path d="M17 18v-13"></path>
                  <path d="M14 14.5l6 -3.5"></path>
                </svg>
              </div>
            </div>
          </label>

          <label for="subscription-cost">
            <span>(D) SUBSCRIPTION COST</span>
            <div class="p-relative">
              <input
                v-model="subscription_cost"
                type="number"
                name="subscription-cost"
              />
              <div class="input-pre-val pre-val--left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-zloty"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 18h-7l7 -7h-7"></path>
                  <path d="M17 18v-13"></path>
                  <path d="M14 14.5l6 -3.5"></path>
                </svg>
              </div>
            </div>
          </label>

          <label for="members">
            <span>MEMBERS</span>
            <div class="p-relative">
              <input v-model="members" type="number" name="members" />
              <div class="input-pre-val pre-val--left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-users"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                </svg>
              </div>
            </div>
          </label>
        </form>
        <!-- form END -->
      </div>
      <div class="calc--right" :class="{ 'calc--right__full': isFull }">
        <div class="calc--right--content">
          <div class="calc--value-wrapper">
            <div class="calc--value-currency">{{ currency }}</div>
            <div class="calc--value-price">{{ result }}</div>
          </div>
          <div class="calc--value-subheading">
            Potential savings after one year
          </div>
          <div class="calc--slider">
            <div class="calc--slider--info">
              <p>Members</p>
              <p>{{ members }}</p>
            </div>

            <Slider
              :lazy="false"
              :tooltips="false"
              class="slider--main"
              v-model="members"
            />
          </div>
        </div>

        <div class="bg--overlay"></div>
        <div class="bg--container"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useCalcStore } from './stores/calc';
  import { storeToRefs } from 'pinia';
  import Slider from '@vueform/slider';

  const store = useCalcStore();

  const {
    isFull,
    members,
    currency,
    salary,
    hours_per_employee,
    software_setup_cost,
    subscription_cost,
    result,
  } = storeToRefs(store);

  const handleView = () => {
    store.toggleIsFull();
  };
</script>

<style src="@vueform/slider/themes/default.css"></style>
