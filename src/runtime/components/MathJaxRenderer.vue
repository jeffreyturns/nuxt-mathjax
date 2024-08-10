<script setup lang="ts">
import { onMounted, ref, useSlots, watch } from '#imports'

const slots = useSlots()

const props = defineProps<{ formula: string }>()
const mathjaxContainer = ref<HTMLDivElement | null>(null)

onMounted(() => {
  renderMathJax()
})

watch(() => props.formula, () => renderMathJax())

function renderMathJax() {
  if (window.MathJax && mathjaxContainer.value) {
    window.MathJax.typesetPromise([mathjaxContainer.value]).catch((err: any) => console.error(err))
  }
}
</script>

<template>
  <ClientOnly
    ref="mathjaxContainer"
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
