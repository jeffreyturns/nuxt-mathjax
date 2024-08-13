<script setup lang="ts">
import { onMounted, ref } from '#imports'

const containerRef = ref<HTMLDivElement | null>(null)

onMounted(async () => renderMathJax())

function renderMathJax() {
  if (import.meta.client) {
    if (window.MathJax && containerRef.value) {
      window.MathJax.typesetPromise?.([containerRef.value]).catch((err: Error) => console.error(err))
    }
  }
}
</script>

<template>
  <div ref="containerRef">
    <slot />
  </div>
</template>
