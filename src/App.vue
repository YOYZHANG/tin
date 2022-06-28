<script setup lang="ts">
import type { Cube } from './type'
const el = $ref<HTMLCanvasElement>()
const ctx = $computed(() => el.getContext('2d')!)

const WIDTH = 400
const HEIGHT = 400

const CUBENUM = 20
const MARGIN = 5
const fn = (x: number, i?: number, t?: number) => Math.sin(x)

function init() {
  ctx.fillStyle = '#b1cdff'

  const cubes = Array.from({ length: CUBENUM }, (_, i) => {
    const width = Math.floor(WIDTH / CUBENUM)
    const x = width * i
    return {
      x,
      y: 0,
      width: width - MARGIN,
      height: HEIGHT,
      t: 0,
    }
  })

  step([], cubes, 0)
}

function step(preCubes: Cube[], cubes: Cube[], timestamp: number) {
  drawCubes(preCubes, cubes)

  const newCubes: Cube[] = []

  for (const [i, item] of cubes.entries()) {
    const { x, width } = item
    const value = Math.abs(fn(i)) * HEIGHT
    newCubes.push({
      x,
      y: (HEIGHT - value) / 2,
      width,
      height: value,
      t: 0,
    })
  }

  requestAnimationFrame(timestamp => step(cubes, newCubes, timestamp))
}

function drawCubes(preCubes: Cube[], newCubes: Cube[]) {
  for (const item of preCubes) {
    const { x, y, width, height } = item
    ctx.clearRect(x, y, width, height)
  }

  for (const item of newCubes) {
    const { x, y, width, height } = item
    ctx.fillRect(x, y, width, height)
  }
}

onMounted(() => {
  init()
})
</script>

<template>
  <canvas ref="el" width="400" height="400" ma mt-10 />
</template>
