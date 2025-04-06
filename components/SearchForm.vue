<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { Search } from 'lucide-vue-next'
</script>

<template>
  <form>
    <SCSidebarGroup class="py-0">
      <SCSidebarGroupContent class="relative">
        <Label for="search" class="sr-only">
          Search
        </Label>
        <SCSidebarInput
          id="search"
          placeholder="Search the docs..."
          class="pl-8"
        />
        <Search class="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
      </SCSidebarGroupContent>
    </SCSidebarGroup>
  </form>
</template>
