<template>
  <FormTracker @aoSalvarTarefa="salvarTarefa" />
  <div class="lista" v-if="!listaVazia">
    <ItemTarefa
      v-for="(tarefa, index) in tarefas"
      :key="index"
      :tarefa="tarefa"
    />
  </div>
  <div class="lista" v-else>
    <div class="box has-text-weight-bold notification is-warning is-light">
      <div class="columns">
        <div class="column">
          <span class="icon-text">
            <span class="icon">
              <i class="fas fa-warning"></i>
            </span>
            Sem Tarefas Cadastradas
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormTracker from "../components/FormTracker.vue";
import ItemTarefa from "../components/ItemTarefa.vue";
import ITarefa from "../components/interfaces/ITarefa";

export default defineComponent({
  name: "App",
  components: {
    FormTracker,
    ItemTarefa,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
    };
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>