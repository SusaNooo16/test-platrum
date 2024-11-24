<template>
  <div class="table__header">
    <div class="table__row">
      <TableHeaderCellComponent
        v-for="column in columns"
        :key="column.id"
        :sort="column.sort"
        @click="sort(column.id)"
      >
        {{ column.headerName }}
      </TableHeaderCellComponent>
    </div>
  </div>
</template>

<script>
  import TableHeaderCellComponent from './TableHeaderCellComponent.vue'
  export default {
    components: {
      TableHeaderCellComponent,
    },
    props: {
      columns: {
        type: Array,
        required: true,
      },
    },
    methods: {
      sort(columnId) {
        this.$emit('changeTableSort', columnId)
      },
    },
  }
</script>
