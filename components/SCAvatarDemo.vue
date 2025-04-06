<script setup lang="ts">
defineOptions({
  name: 'SCAvatarDemo',
});
</script>

<template>
  <SCAvatar>
    <SCAvatarImage src="https://github.com/unovue.png" alt="@unovue" />
    <SCAvatarFallback>CN</SCAvatarFallback>
  </SCAvatar>
</template>