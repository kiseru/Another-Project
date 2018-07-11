<template>
  <main role="main" class="container">
    <div class="bg-white text-align-center p-3 shadow mb-4">
      <h2 class="border-bottom mb-0 border-dark">{{pattern.applicationName}}</h2>
      <div class="pattern-wrapper mt-3">
        <pattern-element-component v-for="element in pattern.elements" v-bind:pattern-element="element" />
      </div>
    </div>
  </main>
</template>

<script>
  import PatternElementComponent from "./PatternElementComponent";

  export default {
    name: "PatternComponent",
    components: {
      PatternElementComponent
    },
    data() {
      return {
        pattern: {
          "applicationName": "Something interesting",
          "description": "string",
          "elements": [
            {
              "description": "string",
              "id": 0,
              "layoutX": 0,
              "layoutY": 0,
              "name": "TEXT",
              "required": true,
              "selectableValue": [
                "string"
              ],
              "type": "TEXT"
            },
            {
              "description": "string",
              "id": 0,
              "layoutX": 0,
              "layoutY": 0,
              "name": "COMBOBOX",
              "required": true,
              "selectableValue": [
                "string",
                "string1",
                "string2",
                "string3",
                "string4",
                "string5",
                "string6"
              ],
              "type": "COMBOBOX"
            },
            {
              "description": "string",
              "id": 0,
              "layoutX": 0,
              "layoutY": 0,
              "name": "CHECKBOX",
              "required": true,
              "selectableValue": [
                "string",
                "string1",
                "string2",
                "string3",
                "string4",
                "string5",
                "string6"
              ],
              "type": "CHECKBOX"
            },
            {
              "description": "string",
              "id": 0,
              "layoutX": 0,
              "layoutY": 0,
              "name": "RADIOBUTTON",
              "required": true,
              "selectableValue": [
                "string",
                "string1",
                "string2",
                "string3",
                "string4",
                "string5",
                "string6"
              ],
              "type": "RADIOBUTTON"
            },
            {
              "description": "string",
              "id": 0,
              "layoutX": 0,
              "layoutY": 0,
              "name": "MULTISELECT",
              "required": true,
              "selectableValue": [
                "string",
                "string1",
                "string2",
                "string3",
                "string4",
                "string5",
                "string6",
                "string7",
                "string8",
                "string9",
                "string10",
                "string11",
                "string12",
                "string13",
                "string14"
              ],
              "type": "MULTISELECT"
            }
          ],
          "endDate": "2018-07-11T10:55:18.960Z",
          "event": {
            "description": "string",
            "id": 0,
            "name": "string",
            "owner": {
              "birthDate": "2018-07-11T10:55:18.960Z",
              "email": "string",
              "firstName": "string",
              "id": 0,
              "middleName": "string",
              "role": "string",
              "secondName": "string"
            },
            "siteUrl": "string"
          },
          "id": 0,
          "startDate": "2018-07-11T10:55:18.960Z"
        }
      }
    }
  }
</script>

<style scoped>

</style>