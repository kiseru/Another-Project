<template>
  <div class="p-1">
    <label>
      Required:
      <input type="radio" v-model="patternElement.required" :value="true"> Yes
      <input type="radio" v-model="patternElement.required" :value="false"> No
    </label>
  </div>
</template>
<script>
  export default {
    name: 'PatternFieldRequiredSettingComponent',
    props: {
      patternElement: {
        type: Object,
        required: true
      }
    }
  }
</script>