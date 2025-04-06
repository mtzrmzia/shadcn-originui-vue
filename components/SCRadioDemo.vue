<script setup lang="ts">
defineOptions({
  name: 'SCRadioDemo',
});
</script>

<template>
  <SCRadioGroup default-value="option-one">
    <div class="flex items-center space-x-2">
      <SCRadioGroupItem id="option-one" value="option-one" />
      <SCLabel for="option-one">Option One</SCLabel>
    </div>
    <div class="flex items-center space-x-2">
      <SCRadioGroupItem id="option-two" value="option-two" />
      <SCLabel for="option-two">Option Two</SCLabel>
    </div>
  </SCRadioGroup>
</template>
