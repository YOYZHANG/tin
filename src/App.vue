<script setup lang="ts">
const fn = ref<() => number>()
</script>

<template>
  <div bg-canvas h-screen>
    <one-dimension :fn="fn" />
    <editor />
  </div>
</template>
