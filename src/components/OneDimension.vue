<script setup lang="ts">
import type { Cube } from '../type'

const el = $ref<HTMLCanvasElement>()
const ctx = $computed(() => el.getContext('2d')!)
const WIDTH = 300
const HEIGHT = 300

const CUBENUM = 30
const MARGIN = 3
const DFAULT_VAL = 1

const fn = $computed(() => (x: number, i: number, t: number) => {
  if (!inputStr.value)
    return DFAULT_VAL

  return getMathFn('x, i, t', inputStr.value)(x, i, t)
})

function init() {
  const cubes = Array.from({ length: CUBENUM }, (_, i) => {
    const width = Math.floor(WIDTH / CUBENUM)
    const x = width * i
    return {
      x,
      y: 0,
      width: width - MARGIN,
      height: HEIGHT,
      value: HEIGHT,
    }
  })

  step(cubes, 0)
}

function step(cubes: Cube[], time: number) {
  drawCubes(cubes)

  const newCubes: Cube[] = []

  for (const [i, item] of cubes.entries()) {
    const { x, width } = item
    const value = fn(i, i, time / 1000) * HEIGHT
    newCubes.push({
      x,
      y: (HEIGHT - Math.abs(value)) / 2,
      width,
      height: Math.abs(value),
      value,
    })
  }

  requestAnimationFrame(() => {
    step(newCubes, time + 16)
  })
}

function drawCubes(cubes: Cube[]) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT)

  function draw(cubes: Cube[], color: string) {
    if (!cubes.length)
      return

    ctx.fillStyle = color
    for (const item of cubes) {
      const { x, y, width, height } = item
      ctx.fillRect(x, y, width, height)
    }
  }

  const minusCubes = cubes.filter(i => i.value < 0)
  const optiCubes = cubes.filter(i => i.value > 0)

  draw(optiCubes, '#b1cdff')
  draw(minusCubes, '#ffb4b4')
}

onMounted(() => {
  init()
})
</script>

<template>
  <canvas ref="el" width="300" height="300" ma pt-10 />
</template>
