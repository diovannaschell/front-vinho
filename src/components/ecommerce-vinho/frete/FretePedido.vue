<template>
  <div class="d-flex justify-content-between align-itens-center">
    <h4>
      Frete Calculado:
      <label class="carregando" v-if="isLoading">Calculando...</label>
      <label v-else>R$ {{ valorFrete }}</label>
    </h4>

    <div class="d-flex calculo-frete align-itens-center">
      <label>Distância (em km)</label>
      <input
        type="number"
        :disabled="isLoading"
        v-model.number="distancia"
        @change="changeDistancia"
      />

      <button class="frete" :disabled="isLoading" @click="calcularFrete">
        Calcular frete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FretePedido",
  props: {
    itensPedido: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      distancia: 0,
      isLoading: false,
      valorFrete: 0,
    };
  },
  methods: {
    changeDistancia() {
      this.$emit("distancia", this.distancia);
    },
    calcularFrete() {
      if (!this.itensPedido.length) {
        alert("Selecione ao menos um vinho");
        return;
      }

      if (this.distancia === 0) {
        alert("Informe uma distância maior que 0");
        return;
      }

      this.isLoading = true;
      this.axios
        .get("pedidos/calcular-frete", {
          headers: { "Content-Type": "application/json" },
          params: {
            distancia: this.distancia,
            itensPedido: JSON.stringify(this.itensPedido),
          },
        })
        .then((response) => {
          this.isLoading = false;
          this.valorFrete = response.data.frete;
        })
        .catch((error) => {
          this.isLoading = false;
          this.valorFrete = 0;
          alert(error.response.data.mensagem);
        });
    },
  },
};
</script>

<style scoped>
.frete {
  margin-left: 10px;
}

.calculo-frete {
  height: 30px;
}

.calculo-frete input {
  height: auto;
}

.carregando {
  margin-right: 20px;
  color: blueviolet;
}
</style>
