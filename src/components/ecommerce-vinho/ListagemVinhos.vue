<template>
  <div>
    <div class="d-flex justify-content-between align-itens-center">
      <h1>Listagem de Vinhos</h1>
      <nav-bar></nav-bar>
    </div>
    <hr />

    <frete-pedido
      :itensPedido="itensPedido"
      @distancia="distancia = $event"
    ></frete-pedido>

    <hr />
    <div class="listagem-vinho">
      <detalhes-vinho
        v-for="vinho in vinhos"
        :key="vinho.id"
        :vinho="vinho"
        :itens-pedido="itensPedido"
        @diminuiQuantidade="
          (id) => {
            alteraQuantidade(id, -1);
          }
        "
        @aumentaQuantidade="
          (id) => {
            alteraQuantidade(id, 1);
          }
        "
      ></detalhes-vinho>
    </div>

    <div class="d-flex justify-content-end">
      <h3 class="carregando" v-if="isLoading">Finalizando pedido...</h3>
      <button
        class="finaliza-pedido"
        :disabled="isLoading"
        @click="finalizaPedido"
      >
        Finalizar Pedido
      </button>
    </div>
  </div>
</template>

<script>
import DetalhesVinho from "./vinho/DetalhesVinho";
import NavBar from "../NavBar.vue";
import FretePedido from "./frete/FretePedido.vue";

export default {
  name: "ListagemVinhos",
  components: {
    DetalhesVinho,
    NavBar,
    FretePedido,
  },
  data() {
    return {
      vinhos: [],
      itensPedido: [],
      distancia: 0,
      valorFrete: 0,
      isLoading: false,
    };
  },
  methods: {
    getVinhos() {
      this.axios.get("vinhos").then((response) => {
        this.vinhos = response.data;
      });
    },
    alteraQuantidade(vinhoId, quantidade) {
      let indexItem = this.itensPedido.findIndex(
        (item) => item.vinhoId === vinhoId
      );

      if (indexItem >= 0) {
        let qtde = this.itensPedido[indexItem].quantidade + quantidade;

        if (qtde >= 0) {
          this.itensPedido[indexItem].quantidade = qtde;
        }
      } else {
        this.itensPedido.push({
          vinhoId: vinhoId,
          quantidade: quantidade,
        });
      }
    },
    finalizaPedido() {
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
        .post("pedidos", {
          distancia: this.distancia,
          itensPedido: this.itensPedido,
        })
        .then(() => {
          this.isLoading = false;
          alert("Pedido finalizado com sucesso");
        })
        .catch((error) => {
          this.isLoading = false;
          alert(error.response.data.mensagem);
        });
    },
  },
  mounted() {
    this.getVinhos();
  },
};
</script>

<style scoped>
.listagem-vinho {
  display: flex;
  flex-wrap: wrap;
}
.finaliza-pedido {
  padding: 10px 20px;
}
.carregando {
  margin-right: 20px;
  color: blueviolet;
}
</style>