<script setup lang="ts">
const props = defineProps({
  items: {
    type: Object,
    required: true,
    default: () => {},
  },
})
</script>

<template>
  <div class="grid">
    <div class="grid__tr"
         v-for="item in items"
         :key="item.id"
    >
      <div class="grid__td">
        <div class="item">{{ item.id }}</div>
      </div>
      <div class="grid__td">
        <div class="item">{{ item.name }}</div>
      </div>
      <div class="grid__td">
        <div class="item">{{ item.address.geo.lat }}</div>
        <div class="item">{{ item.address.geo.lng }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: table;
  width: 100%;
  border: none;
  border-collapse: separate;
  border-spacing: 5px;

  .grid__tr {
    display: table-row;
    border: #2c3e50 1px solid;
  }

  .grid__td {
    display: table-cell;
    width: 33.3%;
    vertical-align: top;
    padding: 0;
    border: 1px solid black;
  }
}
</style>