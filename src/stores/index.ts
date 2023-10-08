import {defineStore} from 'pinia';
import {ref} from "vue";
import {getItems} from "@/app/api";


/*
export const useCharactersStore = defineStore('characters', () => {
  const characters = ref({})

  const getCharacters = async (id=null) => {
    await getItems('users', id)
      .then(res => characters.value = res.data)
  }

  return {
    characters,
    getCharacters,
  }
})*/

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    characters: {},
  }),

  actions: {
    async getCharacters(id = null) {
      const res = await getItems('users', id)
      this.characters = res.data
    },
  },
})