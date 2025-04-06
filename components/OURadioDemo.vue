<script setup lang="ts">
defineOptions({
  name: 'OURadioDemo',
});
const selectedValue = ref('r1')
</script>

<template>
  <OURadioGroup v-model="selectedValue">
    <div class="flex items-center gap-2">
      <OURadioGroupItem value="r1" id="radio-01-r1"/>
      <OULabel for="radio-01-r1">Option 1</OULabel>
    </div>
    <div class="flex items-center gap-2">
      <OURadioGroupItem value="r2" id="radio-01-r2"/>
      <OULabel for="radio-01-r2">Option 2</OULabel>
    </div>
    <div class="flex items-center gap-2">
      <OURadioGroupItem value="r3" id="radio-01-r3"/>
      <OULabel for="radio-01-r3">Option 3</OULabel>
    </div>
  </OURadioGroup>
</template>
