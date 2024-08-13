<script setup lang="ts">
import { useSlots } from '#imports'

const slots = useSlots()
</script>

<template>
  <ClientOnly
    ref="containerRef"
  >
    <MathJaxRenderer>
      <slot />
    </MathJaxRenderer>
    <template #fallback>
      <slot
        v-if="slots.fallback"
        name="fallback"
      />
      <p v-else>
        Initializing MathJax...
      </p>
    </template>
  </ClientOnly>
</template>
