<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>

    <div class="column is-three-quarter">
      <Notificacoes />
      <router-view></router-view>
    </div>

  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Notificacoes from "./components/Notificacoes.vue";


export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Notificacoes,
},
  data() {
    return {
      
    };
  },

});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>