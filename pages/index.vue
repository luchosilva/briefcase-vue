<template>
  <div class="hero min-h-full">
    <div class="px-5 w-full">
      <div class="flex flex-col gap-5 w-full items-center justify-items-center">
        <div class="text-center">
          <briefcase-profile />
        </div>
        <div>
          <briefcase-timeline />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "landing",
  auth: false,
});
</script>
