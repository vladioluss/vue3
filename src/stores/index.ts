import { defineStore } from 'pinia';
import { getItems } from "@/app/api";


export const usePeopleStore = defineStore('people', {
  state: () => {
    return {
      characters: {}
    }
  },

  actions: {
    getCharacters(): void {
      this.characters = getItems('people')
    },
  },
})