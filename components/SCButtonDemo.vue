<script setup lang="ts">
import {Archive} from 'lucide-vue-next'

defineOptions({
  name: 'SCButtonDemo',
});
</script>

<template>
  <SCButton>
    <Archive class="w-4 h-4 mr-2"/>
    Button
  </SCButton>
</template>
