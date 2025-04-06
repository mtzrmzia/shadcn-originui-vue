<script setup lang="ts">
defineOptions({
  name: 'OUBadgeDemo',
});
</script>

<template>
  <OUBadge variant="outline" class="gap-1.5">
    <span class="size-1.5 rounded-full bg-emerald-500" aria-hidden="true"></span>
    Badge
  </OUBadge>
</template>
