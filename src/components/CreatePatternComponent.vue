<template>
  <main role="main" class="container">
    <div class="bg-dark p-2 rounded shadow">
      <h3 class="text-white pl-3 mt-2">Создать шаблон</h3>
    </div>

    <div class="m-5 text-center" v-if="fields.length === 0">
      <h1 class="text-secondary">Нужно добавить элементы</h1>
    </div>

    <div class="fields-wrapper">
      <div v-for="field in fields" class="bg-white p-2 mt-3 rounded shadow d-flex p-2">
        <div class="flex-fill w-50 p-2">
          <pattern-element-component :pattern-element="field"/>
        </div>
        <div class="flex-fill w-50 p-2 border-left border-primary">
          <pattern-element-settings-component :pattern-element="field"/>
        </div>
      </div>
    </div>

    <div class="d-flex flex-row-reverse bg-dark rounded p-2 mt-3 mb-5 shadow">

      <div class="text-center p-2">
        <button class="btn btn-success" @click="createPattern">Создать шаблон</button>
      </div>

      <div class="text-center p-2">
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" area-expanded="false">
            Добавить поле
          </button>

          <div class="dropdown-menu" aria-labelledby="dropbdownMenuButton">
            <button class="dropdown-item" @click="addTextField">Добавить текстовое поле</button>
            <button class="dropdown-item" @click="addComboboxField">Добавить поле ComboBox</button>
            <button class="dropdown-item" @click="addCheckboxesField">Добавить поле Checkbox</button>
            <button class="dropdown-item" @click="addRadioButtonsField">Добавить поле RadioButtons</button>
            <button class="dropdown-item" @click="addMultiselectField">Добавить поле MultiSelect</button>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<script>
  import PatternElement from './../PatternElement';
  import PatternElementComponent from './PatternElementComponent';
  import PatternElementSettingsComponent from './PatternElementSettingsComponent';

  export default {
    name: "CreatePatternComponent",
    components: {
      PatternElementComponent,
      PatternElementSettingsComponent
    },
    data() {
      return {
        fields: []
      }
    },
    methods: {
      addTextField() {
        return this.fields.push(new PatternElement('TEXT'));
      },
      addComboboxField() {
        return this.fields.push(new PatternElement('COMBOBOX'));
      },
      addCheckboxesField() {
        return this.fields.push(new PatternElement('CHECKBOX'));
      },
      addRadioButtonsField() {
        return this.fields.push(new PatternElement('RADIOBUTTON'));
      },
      addMultiselectField()  {
        return this.fields.push(new PatternElement('MULTISELECT'));
      },
      createPattern: () => alert('TODO create pattern')
    }
  }
</script>

<style scoped>

</style>