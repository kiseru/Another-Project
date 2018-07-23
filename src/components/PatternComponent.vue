<template>
  <main role="main" class="container">
    <div class="bg-white text-align-center p-3 shadow">
      <h2 class="border-bottom mb-0 border-dark">{{pattern.applicationName}}</h2>
      <div class="pattern-wrapper mt-3">
        <pattern-element-component v-for="element in pattern.elements"
                                   :pattern-element="element"/>
      </div>
    </div>
    <div class="d-flex flex-row-reverse bg-dark p-3 rounded shadow mb-5 mt-3">
      <button class="btn btn-success"
              @click="sendPattern">
        Отправить заявку
      </button>
    </div>
  </main>
</template>

<script>
  import axios from "axios";
  import PatternElementComponent from "./PatternElementComponent";
  import pattern from "../store/modules/pattern";

  export default {
    name: "PatternComponent",
    components: {
      PatternElementComponent
    },
    data() {
      return {
        pattern: null,
      }
    },
    beforeMount() {
      axios.get(`${this.$store.state.globalUrl}/users/events/${this.$route.params.id}/pattern`)
        .then(response => this.pattern = response.data);
    },
    methods: {
      sendPattern() {
        let application = {
          patternId: this.pattern.id,
          values: []
        };
        this.pattern.elements.forEach(element => {
          application.values.push({elementId: element.id, filledValue: element.filledValue});
        });
        let required = this.pattern.elements
          .filter(element => element.required)
          .reduce((acc, element) => acc && application.values.find(value => value.elementId === element.id).filledValue !== undefined, true);
        if (required) {
          axios.post(
            `${this.$store.state.globalUrl}/users/application`,
            application,
            {headers: {"Auth-Token": this.$cookies.get("authToken")}}
          ).then(response => window.location = '/events');
        }
      }
    }
  }
</script>

<style scoped>

</style>