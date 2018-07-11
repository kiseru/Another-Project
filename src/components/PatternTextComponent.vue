<template>
  <div class="m-2">
    <label>{{patternElement.name}}
      <input class="ml-2" type="text">
    </label>
  </div>
</template>
<script>
  export default {
    name: 'pattern-text-component',
    props: {
      patternElement: {}
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
