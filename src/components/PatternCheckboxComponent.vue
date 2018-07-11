<template>
  <div class="m-2">
    <p class="mb-1">{{patternElement.name}}</p>
    <span class="ml-2" v-for="value in patternElement.selectableValue">
      <input type="checkbox" v-bind:value="value"> <span class="ml-2 mb-1">{{value}}</span><br>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'pattern-checkbox-component',
    props: {
      patternElement: {}
    }
  }
</script>