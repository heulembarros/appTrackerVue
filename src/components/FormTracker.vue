<template>
  <div class="box">
    <div class="columns">
      <div class="column is-4" role="form" aria-label="Criação de nova Tarefa">
        <input
          type="text"
          class="input"
          id="task"
          name="task"
          placeholder="Digite o nome da tarefa para iniciar"
          v-model="task"
        />
      </div>

      <div class="column is-4" role="form">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>

      <div class="column">
        <TemporizadorTimer
          @finalizarTempo="finalizarTarefa"
          v-if="task && task.length > 3"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

import { key } from "@/store";

import TemporizadorTimer from "./Temporizador.vue";
export default defineComponent({
  name: "FormTracker",
  emits: ["aoSalvarTarefa"],
  components: {
    TemporizadorTimer,
  },
  data() {
    return {
      task: "",
      idProjeto: "",
    };
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      console.log(tempoDecorrido);
      console.log(this.task);
      this.$emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.task,
        projeto: this.projetos.find(proj => proj.id == this.idProjeto)
      });
      this.task = "";
    },
  },
  setup() {
    const store = useStore(key);
    return {
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>

<style scoped>
</style>
