<script setup lang="ts">
import { cn } from '@/lib/utils'
import { SwitchRoot, SwitchThumb } from 'reka-ui'

const props = defineProps<{
  class?: string
  modelValue?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const classes = computed(() => {
  return cn(
      'peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      props.class
  )
})
</script>

<template>
  <SwitchRoot
      :checked="modelValue"
      @update:model-value="(val: boolean) => emit('update:modelValue', val)"
      :class="classes"
  >
    <SwitchThumb
        class="pointer-events-none block size-5 rounded-full bg-background shadow-xs shadow-black/[.04] ring-0 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 data-[state=checked]:rtl:-translate-x-4"
    />
  </SwitchRoot>
</template>