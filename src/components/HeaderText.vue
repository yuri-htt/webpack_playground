<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    message: {
      type: String,
      required: true,
    }
  }
})
</script>
