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
</template>

<script lang="ts">
import { useStore } from "@/store";
import {defineComponent } from "vue";
export default defineComponent({
  name: "FormularioProjetos",
  components: {},
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  computed: {
  },
  methods: {
    salvar() {
      this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
      this.nomeDoProjeto = "";
      this.$router.push('/projetos')
    },
  },

  setup () {
    const store = useStore()
    return {
      store,
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