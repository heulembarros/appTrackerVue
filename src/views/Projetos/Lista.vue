<template>
  <section>
    <router-link to="/projetos/novo" class="button is-primary">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo Projeto</span>
    </router-link>
  </section>
  <section v-if="!projetoVazio">
    <h5 class="title is-5">Projetos Adicionados</h5>
    <table class="table is-fullwidth is-striped is-bordered is-hoverable">
      <thead class="has-background-link">
        <tr>
          <th width="25%">ID</th>
          <th>Nome</th>
          <th width="15%" class="has-text-centered">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(projeto, index) in projetos" :key="index">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td class="has-text-centered">
            <router-link :to="`/projetos/${projeto.id}`" class="button is-link">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            &nbsp;
            <button class="button is-danger" @click="excluir(projeto.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { EXCLUIR_PROJETO } from "@/store/tipo-mutacoes";
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "ListaProjetosTacker",
  components: {},
  data() {
    return {};
  },
  methods: {
    excluir(id: string) {
      this.store.commit(EXCLUIR_PROJETO, id)
    },
  },
  computed: {
    projetoVazio(): boolean {
      return this.projetos.length === 0;
    },
  },
  setup() {
    const store = useStore();
    return {
      projetos: computed(() => store.state.projetos),
      store,
    };
  },
});
</script>

