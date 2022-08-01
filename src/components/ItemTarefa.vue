<template>
  <div class="box has-text-weight-bold notification is-warning is-light">
    <div class="columns">
      <div class="column is-7">{{ tarefa.descricao }}</div>
      <div class="column">
        <span class="icon-text is-pulled-right">
          <span class="icon">
            <i class="fas fa-calendar"></i>
          </span>
          <DataTask />
        </span>
        <span class="icon-text is-pulled-right">
          <span class="icon">
            <i class="fas fa-clock"></i>
          </span>
          <CronometroTimer :tempoEmSegundos="tarefa.duracaoEmSegundos" />
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import CronometroTimer from "./CronometroTimer.vue";
import DataTask from "./DataTask.vue";
import ITarefa from "./interfaces/ITarefa";
export default defineComponent({
  name: "ItemTarefa",
  components: {
    CronometroTimer,
    DataTask,
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
});
</script>