<template>
  <div>
    <div class="table__row">
      <TableCellComponent :paddingLevel="level">
        <button
          v-if="row.subordinates.length"
          class="button button_icon button_icon--collapsed"
          @click="changeShowInnerRows"
          :style="{
            transform: isShowInnerRows ? 'rotate(180deg)' : 'rotate(0deg)',
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            class="table__arrow"
          >
            <path d="M16 24L6 14h20L16 24z" fill="currentColor"></path>
          </svg>
        </button>
        {{ row.name }}
      </TableCellComponent>
      <TableCellComponent>{{ row.phone }}</TableCellComponent>
    </div>
    <template v-if="isShowInnerRows">
      <TableRowComponent
        v-for="subRow in row.subordinates"
        :key="subRow.id"
        :row="subRow"
        :level="level + 1"
      />
    </template>
  </div>
</template>

<script>
  import TableCellComponent from './TableCellComponent.vue'
  export default {
    name: 'TableRowComponent',
    components: {
      TableCellComponent,
    },
    props: {
      level: {
        type: Number,
        default: 0,
      },
      row: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        isShowInnerRows: false,
      }
    },
    methods: {
      changeShowInnerRows() {
        this.isShowInnerRows = !this.isShowInnerRows
      },
    },
  }
</script>
