<template>
  <div class="d-flex p-1">
    <!--<label>-->
    <p class="mb-0 pr-2">Required:</p>
    <div class="form-check pr-2">
      <input type="radio" class="form-check-input" v-model="patternElement.required" :value="true">
      <label class="form-check-label">Yes</label>
    </div>

    <div class="form-check pr-2">
      <input type="radio" class="form-check-input" v-model="patternElement.required" :value="false">
      <label class="form-check-label">No</label>
    </div>
    <!--</label>-->
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