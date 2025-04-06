<script setup lang="ts">
defineOptions({
  name: 'originui-vue',
});
</script>

<template>
  <div class="@container grid flex-1 gap-4 p-4">
    <ComponentWrapper name="Accordion">
      <LazyOUAccordionDemo/>
    </ComponentWrapper>
    <ComponentWrapper name="Checkbox">
      <LazyOUCheckboxDemo/>
    </ComponentWrapper>
    <ComponentWrapper name="Radio Group">
      <LazyOURadioDemo/>
    </ComponentWrapper>
    <ComponentWrapper name="Switch">
      <LazyOUSwitchDemo/>
    </ComponentWrapper>
  </div>
</template>
