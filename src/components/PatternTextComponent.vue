<template>
  <div class="m-2">
    <label>{{patternElement.name}}<span class="text-danger" v-if="patternElement.required">*</span>
      <input class="ml-2" v-model="selected" type="text" placeholder="Type something">
    </label>
  </div>
</template>
<script>
  export default {
    name: 'pattern-text-component',
    props: {
      patternElement: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        selected: ""
      }
    }
  }
</script>
<style lang="less" scoped>
  input {
    border-radius: 5px;
    height: 40px;
    border: 1px solid #6c757d;
    padding: 8px;
    font-size: 16px;

    &:focus {
      outline: none;
    }
  }
</style>
