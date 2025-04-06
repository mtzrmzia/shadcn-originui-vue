<script setup lang="ts">
import {
  type SidebarProps,
  SidebarRail,
} from '@/components/ui/sidebar'

const props = defineProps<SidebarProps>()

// This is sample data.
const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'Getting Started',
      url: '#',
      items: [
        {
          title: 'Shadcn-vue',
          url: '/shadcn-vue',
        },
        {
          title: 'OriginUI-vue',
          url: '/originui-vue',
        },
      ],
    },
    {
      title: 'Building Your Application',
      url: '#',
      items: [
        {
          title: 'Routing',
          url: '#',
        },
        {
          title: 'Data Fetching',
          url: '#',
          isActive: true,
        },
        {
          title: 'Rendering',
          url: '#',
        },
        {
          title: 'Caching',
          url: '#',
        },
        {
          title: 'Styling',
          url: '#',
        },
        {
          title: 'Optimizing',
          url: '#',
        },
        {
          title: 'Configuring',
          url: '#',
        },
        {
          title: 'Testing',
          url: '#',
        },
        {
          title: 'Authentication',
          url: '#',
        },
        {
          title: 'Deploying',
          url: '#',
        },
        {
          title: 'Upgrading',
          url: '#',
        },
        {
          title: 'Examples',
          url: '#',
        },
      ],
    },
    {
      title: 'API Reference',
      url: '#',
      items: [
        {
          title: 'Components',
          url: '#',
        },
        {
          title: 'File Conventions',
          url: '#',
        },
        {
          title: 'Functions',
          url: '#',
        },
        {
          title: 'next.config.js Options',
          url: '#',
        },
        {
          title: 'CLI',
          url: '#',
        },
        {
          title: 'Edge Runtime',
          url: '#',
        },
      ],
    },
    {
      title: 'Architecture',
      url: '#',
      items: [
        {
          title: 'Accessibility',
          url: '#',
        },
        {
          title: 'Fast Refresh',
          url: '#',
        },
        {
          title: 'Next.js Compiler',
          url: '#',
        },
        {
          title: 'Supported Browsers',
          url: '#',
        },
        {
          title: 'Turbopack',
          url: '#',
        },
      ],
    },
  ],
}
</script>

<template>
  <SCSidebar v-bind="props">
    <SCSidebarHeader>
      <VersionSwitcher
          :versions="data.versions"
          :default-version="data.versions[0]"
      />
      <SearchForm />
    </SCSidebarHeader>
    <SCSidebarContent>
      <SCSidebarGroup v-for="item in data.navMain" :key="item.title">
        <SCSidebarGroupLabel>{{ item.title }}</SCSidebarGroupLabel>
        <SCSidebarGroupContent>
          <SCSidebarMenu>
            <SCSidebarMenuItem v-for="childItem in item.items" :key="childItem.title">
              <SCSidebarMenuButton as-child :is-active="childItem.isActive">
                <NuxtLink :href="childItem.url">{{ childItem.title }}</NuxtLink>
              </SCSidebarMenuButton>
            </SCSidebarMenuItem>
          </SCSidebarMenu>
        </SCSidebarGroupContent>
      </SCSidebarGroup>
    </SCSidebarContent>
    <SidebarRail />
  </SCSidebar>
</template>
