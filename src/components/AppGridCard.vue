<template>
  <div class="card_wrap">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card_wrap {
  position: relative;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    background: radial-gradient(
      800px circle at 100px 100px,
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

  }
}
</style>
