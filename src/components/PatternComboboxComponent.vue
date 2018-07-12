<template>
  <div class="m-2">
    <p class="mb-0">{{patternElement.name}}<span class="text-danger" v-if="patternElement.required">*</span></p>
    <multiselect v-model="selected"
                 :options="patternElement.selectableValue"
                 :close-on-select="true"
                 placeholder="Choose one..."
                 :searchable="true"
                 :optionHeight="40"
                 :showLabels="false"
                 :max-height="150"
    />
  </div>
</template>
<script>
  import Multiselect from 'vue-multiselect';

  export default {
    name: 'pattern-combobox-component',
    components: {
      Multiselect
    },
    data() {
      return {
        selected: null
      }
    },
    props: {
      patternElement: {}
    }
  }
</script>