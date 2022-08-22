<template>
  <article
    class="notificacoes message"
    :class="contexto[notificacao.tipo]"
    v-for="notificacao in notificacoes"
    :key="notificacao.id"
  >
    <div class="message-header">
      <p>{{ notificacao.titulo }}</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      {{ notificacao.texto }}
    </div>
  </article>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { TipoNotificacao } from "@/interfaces/INotificacao";
export default defineComponent({
  name: "NotificacoesComp",
  data() {
    return {
        contexto: {
            [TipoNotificacao.SUCESSO]: 'is-success',
            [TipoNotificacao.ATENCAO]: 'is-warning',
            [TipoNotificacao.FALHA]: 'is-danger',
        }
    };
  },
  setup() {
    const store = useStore();
    return {
      notificacoes: computed(() => store.state.notificacoes),
    };
  },
  computed: {
  },
  methods: {},
});
</script>

<style scoped>
.notificacoes {
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  width: 25%;
  z-index: 9999;
}
</style>