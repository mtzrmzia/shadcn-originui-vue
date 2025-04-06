<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout',
});
</script>

<template>
  <SCSidebarProvider>
    <AppSidebar/>
    <SCSidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SCSidebarTrigger class="-ml-1"/>
        <SCSeparator
            orientation="vertical"
            class="mr-2 data-[orientation=vertical]:h-4"
        />
        <SCBreadcrumb>
          <SCBreadcrumbList>
            <SCBreadcrumbItem class="hidden md:block">
              <SCBreadcrumbLink href="#">
                Building Your Application
              </SCBreadcrumbLink>
            </SCBreadcrumbItem>
            <SCBreadcrumbSeparator class="hidden md:block"/>
            <SCBreadcrumbItem>
              <SCBreadcrumbPage>Data Fetching</SCBreadcrumbPage>
            </SCBreadcrumbItem>
          </SCBreadcrumbList>
        </SCBreadcrumb>
      </header>
      <NuxtPage/>
    </SCSidebarInset>
  </SCSidebarProvider>
</template>
