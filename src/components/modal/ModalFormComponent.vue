<template>
  <form class="modal__form" @submit.prevent>
    <div class="modal__field">
      <label class="modal__label" for="name">Имя</label>
      <input
        class="modal__input"
        type="text"
        id="name"
        v-model="employee.name"
      />
    </div>
    <div class="modal__field">
      <label class="modal__label" for="phone">Телефон</label>
      <input
        class="modal__input"
        type="text"
        id="phone"
        @input="onInputPhone"
        :value="employee.phone"
      />
    </div>
    <div class="modal__field">
      <label class="modal__label" for="chief">Начальник</label>
      <select class="modal__select" id="chief" v-model="chief">
        <option :value="null"></option>
        <option v-for="(chief, index) in chiefList" :key="index" :value="chief">
          {{ chief.name }}
        </option>
      </select>
    </div>

    <button class="modal__submit-button" type="submit" @click="addRow">
      Добавить
    </button>
  </form>
</template>
<script>
  import EmployeeModel from '@/models/EmployeeModel'

  export default {
    props: {
      chiefList: {
        type: Array,
        requred: true,
      },
    },
    data() {
      return {
        employee: null,
        chief: null,
      }
    },
    methods: {
      addRow() {
        this.$emit('addRow', this.employee, this.chief)
      },
      onInputPhone(e) {
        this.employee.setPhone(e.target.value)
        e.target.value = this.employee.phone
      },
    },
    beforeMount() {
      this.employee = new EmployeeModel()
    },
  }
</script>
