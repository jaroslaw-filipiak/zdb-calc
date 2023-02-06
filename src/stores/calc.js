import { defineStore } from 'pinia';

export const useCalcStore = defineStore('calc', {
  state: () => ({
    isFull: false,
    result: null,
    currency: 'pln',
    salary: 200,
    members: 45,
    hours_per_employee: 233,
    software_setup_cost: 34,
    subscription_cost: 1000,
  }),

  getters: {
    result(state) {
      const res =
        state.members * state.hours_per_employee + state.hours_per_employee * 2;
      return Math.round(res);
    },
  },

  actions: {
    toggleIsFull() {
      this.isFull = !this.isFull;
    },
  },
});
