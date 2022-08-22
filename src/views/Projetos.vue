<template>
  <section>
    <div class="projetos">
      <h1 class="title">Projetos</h1>
    </div>
  </section>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjetosTacker",
});
</script>
<style>
.table thead td,
.table thead th {
  color: #fff;
}
section {
  padding: 1.25rem;
}
</style>