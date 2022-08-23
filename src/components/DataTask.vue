<template>
  <span class="mr-3">
    <strong> {{dataDaTarefa}} </strong>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DataTask",
  props: {
    dataHoje: {
      type: String,
      default: "",
    },
  },
  computed: {
    dataDaTarefa(): string {
      return new Date().toISOString().substring(0, 10).split('-').reverse().join('/');
    },
  },
});
</script>
