<script setup lang="ts">
import { Check, ChevronsUpDown, GalleryVerticalEnd } from 'lucide-vue-next'

import { ref } from 'vue'

const props = defineProps<{
  versions: string[]
  defaultVersion: string
}>()

const selectedVersion = ref(props.defaultVersion)
</script>

<template>
  <SCSidebarMenu>
    <SCSidebarMenuItem>
      <SCDropdownMenu>
        <SCDropdownMenuTrigger as-child>
          <SCSidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <GalleryVerticalEnd class="size-4" />
            </div>
            <div class="flex flex-col gap-0.5 leading-none">
              <span class="font-medium">Documentation</span>
              <span class="">v{{ selectedVersion }}</span>
            </div>
            <ChevronsUpDown class="ml-auto" />
          </SCSidebarMenuButton>
        </SCDropdownMenuTrigger>
        <SCDropdownMenuContent
          class="w-(--reka-dropdown-menu-trigger-width)"
          align="start"
        >
          <SCDropdownMenuItem
            v-for="version in versions"
            :key="version"
            @select="selectedVersion = version"
          >
            v{{ version }}
            <Check v-if="version === selectedVersion" class="ml-auto" />
          </SCDropdownMenuItem>
        </SCDropdownMenuContent>
      </SCDropdownMenu>
    </SCSidebarMenuItem>
  </SCSidebarMenu>
</template>
