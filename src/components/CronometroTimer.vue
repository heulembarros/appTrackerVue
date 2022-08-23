<template>
  <span class="mr-3">
    <strong>{{ tempoDecorrido }}</strong>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CronometroTimer",
  props: {
    tempoEmSegundos: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    tempoDecorrido(): string {
      return new Date(this.tempoEmSegundos * 1000)
        .toISOString()
        .substring(11, 19);
    },
  },
});
</script>
