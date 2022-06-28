<template>
  <div text-xl px-10 pt-2>
    <div absolute right-5>
      <a
        icon-btn i-carbon-logo-github
        rel="noreferrer"
        href="https://github.com/YOYZHANG/tin"
        target="_blank"
        title="GitHub"
      />
      <button icon-btn @click="toggleDark()">
        <div dark:i-carbon-moon i-carbon-sun />
      </button>
    </div>
  </div>
</template>
