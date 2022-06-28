<script setup lang="ts">
const inputV = $ref(inputStr.value)

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Enter')
    update()
}

function update() {
  inputStr.value = inputV
}
</script>

<template>
  <div flex justify-center items-center mt-10>
    <div color-gray>
      <span mr-2>(t, i, x)</span>
      <span op-50> => </span>
    </div>

    <input
      v-model="inputV"
      font-600
      border="b gray-400/50"
      autocomplete="false"
      bg-transparent
      outline-0
      text-xl
      mx-3 py-1 px-2
      @keydown="onKeyDown"
    >
    <button i-carbon-next-outline dark: i-carbon-next-filled icon-btn text-xl @click="update" />
  </div>
</template>
