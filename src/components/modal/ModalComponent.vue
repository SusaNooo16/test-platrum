<template>
  <div class="modal-container" @click.self="hideModal">
    <div class="modal">
      <div class="modal__header">
        <h2 class="modal__title">Добавление сотрудника</h2>
        <button class="modal__close-button" @click="hideModal">
          <CrossIcon />
        </button>
      </div>

      <ModalFormComponent :chiefList="chiefList" @addRow="addRow" />
    </div>
  </div>
</template>
<script>
  import ModalFormComponent from './ModalFormComponent.vue'
  import CrossIcon from '../icons/CrossIcon.vue'

  export default {
    components: {
      ModalFormComponent,
      CrossIcon,
    },
    props: {
      chiefList: {
        type: Array,
        requred: true,
      },
    },
    methods: {
      addRow(employee, chief) {
        this.$emit('addRow', employee, chief)
        this.hideModal()
      },
      hideModal() {
        this.$emit('hideModal')
      },
    },
  }
</script>
