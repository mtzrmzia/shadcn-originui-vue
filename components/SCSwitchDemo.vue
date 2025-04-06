<script setup lang="ts">
defineOptions({
  name: 'SCSwitchDemo',
});

const checked = ref(false)
</script>

<template>
  <SCSwitch v-model="checked"/>
</template>
