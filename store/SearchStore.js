import { defineStore } from 'pinia';

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    isActiveSearch: false
  }),
  actions: {
    addIsActiveSearch() {
      this.isActiveSearch ? this.isActiveSearch = false : this.isActiveSearch = true;
    }
  }
});
