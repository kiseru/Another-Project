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
      <div class="text-center mt-2">
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
    </div>
  </main>
</template>

<script>
  import PatternElementComponent from './PatternElementComponent';
  import PatternElementSettingsComponent from './PatternElementSettingsComponent';

  const fieldElement = {
    "description": "string",
    "id": 0,
    "layoutX": 0,
    "layoutY": 0,
    "name": "string",
    "required": false,
    "selectableValue": [],
    "type": "TEXT"
  };

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
        let textFieldElement = Object.assign({}, fieldElement);
        this.fields.push(textFieldElement);
      },
      addComboboxField() {
        let comboboxFieldElement = Object.assign({}, fieldElement);
        comboboxFieldElement.type = "COMBOBOX";
        this.fields.push(comboboxFieldElement);
      },
      addCheckboxesField() {
        let checkboxesFieldElement = Object.assign({}, fieldElement);
        checkboxesFieldElement.type = "CHECKBOX";
        this.fields.push(checkboxesFieldElement);
      },
      addRadioButtonsField() {
        let comboboxFieldElement = Object.assign({}, fieldElement);
        comboboxFieldElement.type = "RADIOBUTTON";
        this.fields.push(comboboxFieldElement);
      },
      addMultiselectField() {
        let comboboxFieldElement = Object.assign({}, fieldElement);
        comboboxFieldElement.type = "MULTISELECT";
        this.fields.push(comboboxFieldElement);
      }
    }
  }
</script>

<style scoped>

</style>