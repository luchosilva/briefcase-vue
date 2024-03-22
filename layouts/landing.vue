<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div
      class="flex flex-col min-h-screen dark:bg-gradient-to-br dark:from-cyan-800 dark:to-blue-900"
    >
      <div class="drawer h-screen">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <slot name="header">
            <client-only fallback-tag="span" fallback="Loading on server...">
              <landing-navbar />
            </client-only>
          </slot>
          <div class="flex-1 w-full flex flex-col">
            <div
              class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full"
            >
              <slot />
            </div>
          </div>
          <slot name="footer">
            <landing-footer />
          </slot>
          <slot name="app-after" />
          <div id="app-after"></div>
        </div>
        <div class="drawer-side" id="drawer-side-id">
          <ul class="menu p-4 w-80 bg-base-100">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
