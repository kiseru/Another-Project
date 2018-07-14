<template>
  <main role="main" class="container">
    <div class="bg-white p-3 rounded shadow">
      <h3 class="border-bottom border-dark pl-3 mt-2">Creating new pattern</h3>
      <div class="fields-wrapper">
        <div v-for="field in fields" class="border-bottom border-dark d-flex p-2">
          <div class="flex-fill w-50 p-2">
            <pattern-element-component :pattern-element="field"/>
          </div>
          <div class="flex-fill w-50 p-2 border-left border-dark">
            <pattern-element-settings-component :pattern-element="field"/>
          </div>
        </div>
      </div>
      <div class="text-center p-2">
        <div class="dropdown">
          <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" area-expanded="false">
            Add field
          </button>

          <div class="dropdown-menu" aria-labelledby="dropbdownMenuButton">
            <button class="dropdown-item" @click="addTextField">Add text field</button>
            <button class="dropdown-item" @click="addComboboxField">Add combobox field</button>
            <button class="dropdown-item" @click="addCheckboxesField">Add checkboxes field</button>
            <button class="dropdown-item" @click="addRadioButtonsField">Add radio buttons field</button>
            <button class="dropdown-item" @click="addMultiselectField">Add multiselect field</button>
          </div>
        </div>
      </div>

      <div class="text-center p-2 border-top border-dark">
        <button class="btn btn-primary" @click="createPattern">Create pattern</button>
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