import { defineStore } from 'pinia';

export const useEducateStore = defineStore({
  id: 'educate-store',
  state: () => {
    return {
    };
  },
  actions: {
    SetActiveUser(id, set) {
      if (set) {
        this.activeUser = id;
        localStorage.setItem('activeAdmin', id)
      } else {
        this.activeUser = '';
      }
    },

   
    
  },
  getters: {
    // filtersList: state => state.filtersList,
  },
});
