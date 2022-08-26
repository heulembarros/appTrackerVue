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
    <section>
      <h1 class="title">Tarefas</h1>
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
    </section>
  </div>

  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import ITarefa from "@/interfaces/ITarefa";
import { useStore } from "@/store";
import { ADD_TAREFAS, GET_PROJETOS, GET_TAREFAS } from "@/store/tipo-acoes";
import { computed, defineComponent } from "vue";
import FormTracker from "../components/FormTracker.vue";
import ItemTarefa from "../components/ItemTarefa.vue";

export default defineComponent({
  name: "App",
  components: {
    FormTracker,
    ItemTarefa,
  },
  data() {
    return {
      // tarefas: [] as ITarefa[],
    };
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa): void {
      this.store.dispatch(ADD_TAREFAS, tarefa);
    },
  },
  setup() {
    const store = useStore();

    store.dispatch(GET_TAREFAS);
    store.dispatch(GET_PROJETOS);

    return {
      tarefas: computed(() => store.state.tarefas),
      store,
    };
  },
});
</script>

<style scoped>
section,
.lista {
  padding: 1.25rem;
}
</style>