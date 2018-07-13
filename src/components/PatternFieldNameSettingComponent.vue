<template>
  <div class="p-1">
    <label>
      Name:
      <input type="text" v-model="patternElement.name">
    </label>
  </div>
</template>
<script>
  export default {
    name: 'PatternFieldNameSettingComponent',
    props: {
      patternElement: {
        type: Object,
        required: true
      }
    }
  }
</script>
