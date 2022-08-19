<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
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
import { defineComponent } from "vue";
import IProjeto from "../interfaces/IProjeto";
export default defineComponent({
  name: "ProjetosTacker",
  components: {},
  data() {
    return {
      nomeDoProjeto: "",
      projetos: [] as IProjeto[],
    };
  },
  computed: {
    projetoVazio(): boolean {
      return this.projetos.length === 0;
    },
  },
  methods: {
    salvar() {
      const projeto: IProjeto = {
        nome: this.nomeDoProjeto,
        id: new Date()
          .toISOString()
          .substring(0, 10)
          .split("-")
          .reverse()
          .join("/"),
      };

      this.projetos.push(projeto);
      this.nomeDoProjeto = "";
      console.log(this.projetos);
    },
  },
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