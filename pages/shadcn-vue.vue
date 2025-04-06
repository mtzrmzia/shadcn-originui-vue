<script setup lang="ts">
defineOptions({
  name: 'shadcn-vue',
});
</script>

<template>
  <div class="@container grid flex-1 gap-4 p-4">
    <ComponentWrapper name="Accordion">
      <LazySCAccordionDemo/>
    </ComponentWrapper>
    <ComponentWrapper name="Checkbox">
      <LazySCCheckboxDemo/>
    </ComponentWrapper>
    <ComponentWrapper name="Radio Group">
      <LazySCRadioDemo/>
    </ComponentWrapper>
    <ComponentWrapper name="Switch">
      <LazySCSwitchDemo/>
    </ComponentWrapper>
    <ComponentWrapper name="Button">
      <LazySCButtonDemo/>
    </ComponentWrapper>
    <ComponentWrapper name="Avatar">
      <LazySCAvatarDemo/>
    </ComponentWrapper>
  </div>
</template>