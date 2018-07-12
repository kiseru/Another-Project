<template>
  <div class="m-2">
    <p class="mb-1">{{patternElement.name}}<span class="text-danger" v-if="patternElement.required">*</span></p>
    <span class="ml-2" v-for="value in patternElement.selectableValue">
      <input type="radio" v-model="selected" :name="patternElement.id" :value="value"><span class="ml-2 mb-1">{{value}}</span><br>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'pattern-radiobutton-component',
    props: {
      patternElement: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        selected: null
      }
    }
  }
</script>