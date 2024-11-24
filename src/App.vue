<template>
  <main>
    <div class="container">
      <button class="button button_primary" @click="showModal">Добавить</button>
      <TableComponent :table="table" />
      <ModalComponent
        v-if="isModalShow"
        @hideModal="hideModal"
        @addRow="addRow"
        :chiefList="table.flatRows"
      />
    </div>
  </main>
</template>

<script>
  import ModalComponent from './components/modal/ModalComponent.vue'
  import TableComponent from './components/table/TableComponent.vue'
  import TableModel from './models/TableModel'

  import { save, load } from './storage.js'

  export default {
    components: { TableComponent, ModalComponent },
    data() {
      return {
        isModalShow: false,
        table: null,
      }
    },
    methods: {
      showModal() {
        this.isModalShow = true
      },
      hideModal() {
        this.isModalShow = false
      },
      addRow(newRow, parent) {
        this.table.addRow(newRow, parent)
      },
      initTable() {
        const columns = [
          {
            id: 'name',
            value: 'name',
            headerName: 'Имя',
          },
          {
            id: 'phone',
            value: 'phone',
            headerName: 'Телефон',
          },
        ]
        this.table = new TableModel(columns)
      },
    },
    beforeMount() {
      this.initTable()

      this.table.setRows(load() ?? [])
      load()
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          save(this.table.rows)
        }
      })
    },
  }
</script>
