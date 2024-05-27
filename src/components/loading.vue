<template>
  <div ref="bar" class="bar"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const speed = ref<number>(1);
const bar = ref<HTMLElement>();
let timer = ref<number>(0);

const startLoading = () => {
  const dom = bar.value as HTMLElement;
  timer.value = window.requestAnimationFrame(function fn() {
    if (speed.value < 90) {
      speed.value += 1;
      dom.style.width = speed.value + "%";
      timer.value = window.requestAnimationFrame(fn);
    } else {
      speed.value = 1;
      window.cancelAnimationFrame(timer.value);
    }
  });
};

const endLoading = () => {
  const dom = bar.value as HTMLElement;
  window.requestAnimationFrame(() => {
    speed.value = 100;
    dom.style.width = speed.value + "%";
  });
};

defineExpose({
  startLoading,
  endLoading,
});

// onMounted(() => {
//   startLoading()
// })
</script>
<style scope lang="scss">
.bar {
  position: fixed;
  top: 0;
  background-color: red;
  height: 10px;
  width: 0;
}
</style>
