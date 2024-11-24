<template>
  <div class="table__cell">
    <div
      class="table__cell-content"
      :style="`padding-left: calc(${paddingLevel * 15}px)`"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      paddingLevel: {
        type: Number,
        default: 0,
      },
    },
  }
</script>
