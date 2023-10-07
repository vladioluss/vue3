<script setup lang="ts">
</script>

<template>
  <div class="grid">
    <div class="grid-tr">
      <div class="grid-td">
        <div class="item">Блок №1</div>
      </div>
      <div class="grid-td">
        <div class="item">Блок №2</div>
      </div>
      <div class="grid-td">
        <div class="item">Блок №3</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: table;
  width: 100%;
  border: none;
  border-collapse: separate;
  border-spacing: 5px;

  &__tr {
    display: table-row;
  }

  &__td {
    display: table-cell;
    width: 33.3%;
    vertical-align: top;
    padding: 0;
    border: 1px solid black;
  }
}
</style>