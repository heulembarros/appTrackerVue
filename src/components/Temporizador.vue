<template>
  <div class="is-flex is-align-items-center id-justify-content-space-between">
    <CronometroTimer :tempoEmSegundos="tempoEmSegundos" />
    <button class="button mr-2" @click="iniciar" :disabled="startTimer">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>

    <button class="button mr-2" @click="pausar" :disabled="!startTimer">
      <span class="icon">
        <i class="fas fa-pause"></i>
      </span>
      <span>pause</span>
    </button>

    <button class="button" @click="finalizar" :disabled="!startTimer">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroTimer from "./CronometroTimer.vue";

export default defineComponent({
  name: "TemporizadorTimer",
  emits: ['finalizarTempo'],
  components: {
    CronometroTimer,
  },
  data() {
    return {
      dataTarefa: '',
      tempoEmSegundos: 0,
      cronometro: 0,
      startTimer: false,
    };
  },
  methods: {
    iniciar() {
      this.startTimer = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },
    pausar() {
      this.startTimer = false;
      clearInterval(this.cronometro);
    },
    finalizar() {
      this.startTimer = false;
      clearInterval(this.cronometro);
      this.$emit('finalizarTempo', this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
});
</script>
