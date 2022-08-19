<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <router-link to="/projetos/novo">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo Projeto</span>
    </router-link>
  </section>
  <section v-if="!projetoVazio">
    <table class="table is-fullwidth is-striped is-bordered is-hoverable">
      <thead class="has-background-link">
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(projeto, index) in projetos" :key="index">
          <td width="25%">{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
        </tr>
      </tbody>
      {{
        projetos
      }}
    </table>
  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "ProjetosTacker",
  components: {},
  data() {
    return {
    };
  },
  computed: {
    projetoVazio(): boolean {
      return this.projetos.length === 0;
    },
  },
  setup () {
    const store = useStore()
    return {
      projetos: computed(() => store.state.projetos)
    }
  }

});
</script>

<style scoped>
.table thead td,
.table thead th {
  color: #fff;
}
section,
.lista {
  padding: 1.25rem;
}
</style>