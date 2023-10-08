<script setup lang="ts">
import BaseTable from "@/components/tables/BaseTable.vue";
import {useCharactersStore} from "@/stores";


const charactersStore = useCharactersStore()
charactersStore.getCharacters()
</script>

<template>
  <div>
    <BaseTable
        :items="charactersStore.characters"
    />
  </div>
</template>

<style scoped lang="scss">

</style>