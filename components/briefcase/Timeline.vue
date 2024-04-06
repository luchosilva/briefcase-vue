<template>
  <div>
    <ul
      class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
    >
      <li v-for="(project, index) in projects" :key="project.name">
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
          class="mb-10"
          :class="{
            'timeline-start md:text-end': isParNumber(index),
            'timeline-end md:text-start': !isParNumber(index),
          }"
        >
          <time class="text-sm md:text-base font-mono italic">
            {{ rt(project.range) }}
          </time>
          <div class="text-base md:text-lg font-black">
            {{ rt(project.name) }}
          </div>
          <p
            v-for="el in rt(project.description)?.split('\n')"
            :key="el.slice(0, 5)"
            class="text-sm md:text-base"
          >
            {{ el }}
          </p>
        </div>
        <hr v-if="index !== projects.length - 1" class="bg-primary" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n();

type Project = {
  name: string;
  range: string;
  description: string;
};

const isParNumber = (num: number) => num % 2 === 0;

const projects: ComputedRef<Project[]> = computed(() => {
  return tm("pages.index.projects");
});
</script>
