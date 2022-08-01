<template>
  <div class="box">
    <div class="columns">
      <div class="column is-6" role="form" aria-label="Criação de nova Tarefa">
        <input
          type="text"
          class="input"
          id="task"
          name="task"
          placeholder="Digite o nome da tarefa para iniciar"
          v-model="task"
        />
      </div>

      <div class="column">
        <TemporizadorTimer @finalizarTempo="finalizarTarefa" v-if="task && task.length > 3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TemporizadorTimer from "./Temporizador.vue";
export default defineComponent({
  name: "FormTracker",
  emits: ['aoSalvarTarefa'],
  components: {
    TemporizadorTimer,
  },
  data() {
    return {
      task: "",
    };
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      console.log(tempoDecorrido);
      console.log(this.task);
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.task,
      })
      this.task = '';
    },
  },
});
</script>

<style scoped>
</style>
