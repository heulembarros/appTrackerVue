<template>
  <section class="projetos">
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
        <button
          class="button"
          type="submit"
          v-if="nomeDoProjeto && nomeDoProjeto.length > 3"
        >
          Salvar
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { useStore } from "@/store";
import {
  ALTERA_PROJETO,
  ADICIONA_PROJETO,
} from "@/store/tipo-mutacoes";
import { defineComponent } from "vue";
import useNotificador from '@/hooks/notificador';

export default defineComponent({
  name: "FormularioProjetos",
  components: {},
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id == this.id
      );
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  computed: {},
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        });
        this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'O projeto foi alterado com sucesso!')
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
        this.notificar(TipoNotificacao.SUCESSO, 'Sucesso', 'O projeto foi cadastrado com sucesso!')
      }
      this.nomeDoProjeto = "";
      this.$router.push("/projetos");
    },

  },

  setup() {
    const store = useStore();
    const { notificar } = useNotificador()
    return {
      store,
      notificar,
    };
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