<template>
<div class="hexagon">
    <slot />
</div>
</template>

<style scoped>
.hexagon {
  background: rgb(255,255,255,.06);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
}
</style>