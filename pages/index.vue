<script setup lang="ts">
defineOptions({
  name: 'Dashboard',
});
</script>

<template>
  <div>
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <div class="bg-muted/50 aspect-video rounded-xl"/>
      <div class="bg-muted/50 aspect-video rounded-xl"/>
      <div class="bg-muted/50 aspect-video rounded-xl"/>
    </div>
    <div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"/>
  </div>
</template>
