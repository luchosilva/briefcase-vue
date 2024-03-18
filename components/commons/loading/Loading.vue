<script setup lang="ts"></script>

<template>
  <div
    aria-busy="true"
    aria-label="Loading"
    role="progressbar"
    class="container"
  >
    <div class="swing">
      <div class="swing-l"></div>
      <div></div>
      <div></div>
      <div class="swing-r"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 7rem;
  position: relative;
}

.swing div {
  border-radius: 50%;
  float: left;
  height: 1em;
  width: 1em;
}

.swing div:nth-of-type(1) {
  background: #2474b8;
}

.swing div:nth-of-type(2) {
  background: #75b943;
}

.swing div:nth-of-type(3) {
  background: #e84539;
}

.swing div:nth-of-type(4) {
  background: #f8c033;
}

@-webkit-keyframes ball-l {
  0%,
  50% {
    transform: rotate(0) translateX(0);
  }
  100% {
    transform: rotate(50deg) translateX(-2.5em);
  }
}

@keyframes ball-l {
  0%,
  50% {
    transform: rotate(0) translateX(0);
  }
  100% {
    transform: rotate(50deg) translateX(-2.5em);
  }
}

@-webkit-keyframes ball-r {
  0% {
    transform: rotate(-50deg) translateX(2.5em);
  }
  50%,
  100% {
    transform: rotate(0) translateX(0);
  }
}

@keyframes ball-r {
  0% {
    transform: rotate(-50deg) translateX(2.5em);
  }
  50%,
  100% {
    transform: rotate(0) translateX(0);
  }
}

.swing-l {
  -webkit-animation: ball-l 0.425s ease-in-out infinite alternate;
  animation: ball-l 0.425s ease-in-out infinite alternate;
}

.swing-r {
  -webkit-animation: ball-r 0.425s ease-in-out infinite alternate;
  animation: ball-r 0.425s ease-in-out infinite alternate;
}
</style>
