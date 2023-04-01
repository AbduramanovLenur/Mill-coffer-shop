import { defineStore } from 'pinia';

export const useActiveStore = defineStore('activeStore', {
  state: () => ({
    isActiveClass: false
  }),
  actions: {
    addActiveClass() {
      if (this.isActiveClass) {
        this.isActiveClass = false;
        document.body.style.overflowY = "scroll";
      } else {
        this.isActiveClass = true;
        document.body.style.overflowY = "hidden";
      }
    }
  }
});
