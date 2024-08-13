<script setup lang="ts">
import { onMounted, ref, useSlots, watch } from '#imports'

const slots = useSlots()

const props = defineProps<{ formula: string }>()
const containerRef = ref<HTMLDivElement | null>(null)

onMounted(() => renderMathJax())

watch(() => props.formula, () => renderMathJax())

function renderMathJax() {
  if (window.MathJax && containerRef.value) {
    window.MathJax.typesetPromise?.([containerRef.value]).catch((err: Error) => console.error(err))
  }
}
</script>

<template>
  <ClientOnly
    ref="containerRef"
  >
    {{ formula }}
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
