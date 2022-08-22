<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="" />
    </h1>
    <aside class="panel mt-5 menu">
      <p class="menu-label">Tarefas</p>
      <ul class="menu-list">
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            Tarefas
          </router-link>
        </li>
        <li>
          <router-link to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            Projetos
          </router-link>
        </li>
      </ul>
    </aside>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.painel li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover, .link.router-link-active:hover {
  color: #0d3b66;;
}
.link.router-link-active {
  color: #faf0ca;
}
</style>