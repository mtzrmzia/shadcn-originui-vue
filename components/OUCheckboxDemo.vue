<script setup lang="ts">
defineOptions({
  name: 'OUCheckboxDemo',
});
const checked = ref(true)
</script>

<template>
  <div class="flex items-start gap-2">
    <OUCheckbox v-model="checked" id="checkbox-10" aria-describedby="checkbox-10-description" />
    <div class="grid grow gap-2">
      <OULabel for="checkbox-10">
        Label
        <span class="text-xs font-normal leading-[inherit] text-muted-foreground">
          (Sublabel)
        </span>
      </OULabel>
      <p id="checkbox-10-description" class="text-xs text-muted-foreground">
        You can use this checkbox with a label and a description.
      </p>
    </div>
  </div>
</template>

