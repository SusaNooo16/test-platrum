<template>
  <div class="table">
    <TableHeaderRow
      :columns="table.columns"
      @changeTableSort="changeTableSort"
    />
    <div class="table__body">
      <TableRowComponent
        v-for="row in table.sortedRows"
        :key="row.id"
        :row="row"
        :level="0"
      />
    </div>
  </div>
</template>

<script>
  import TableHeaderRow from './TableHeaderRowComponent.vue'
  import TableRowComponent from './TableRowComponent.vue'

  export default {
    props: {
      table: {
        type: Object,
        required: true,
      },
    },
    components: {
      TableRowComponent,
      TableHeaderRow,
    },
    methods: {
      changeTableSort(id) {
        this.table.changeTableSort(id)
      },
    },
  }
</script>
