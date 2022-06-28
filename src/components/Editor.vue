<script setup lang="ts">
const input = $ref('')
</script>

<template>
  <div flex justify-center items-center mt-10>
    <div color-gray>
      <span mr-2>(t, i, x)</span>
      <span op-50> => </span>
    </div>

    <input
      v-model="input"
      font-600
      border="b gray-400/50"
      autocomplete="false"
      bg-transparent
      outline-0
      text-xl
      ml-3 py-1 px-2
    >
  </div>
</template>
