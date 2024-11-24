<template>
  <div class="table__cell table__cell_header" @click="$emit('click')">
    <slot></slot>
    <svg
      class="table__arrow"
      :class="{ table__arrow_rotate: sort == 'asc', hide: !sort }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path
        d="M26.71,10.29l-10-10a1,1,0,0,0-1.41,0l-10,10,1.41,1.41L15,3.41V32h2V3.41l8.29,8.29Z"
        stroke="currentColor"
        stroke-width="2"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<script>
  export default {
    props: {
      paddingLevel: {
        type: Number,
        default: 0,
      },
      sort: {
        type: [String, null],
        default: null,
      },
    },
  }
</script>
