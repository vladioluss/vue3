<script setup lang="ts">
import { usePeopleStore } from "@/stores";

const people = usePeopleStore().getCharacters()
</script>

<template>
  <div>
    {{ people }}
  </div>
</template>