<template>
  <div>
    <div class="d-flex justify-content-between align-itens-center">
      <h1>Listagem de Vinhos</h1>
      <nav-bar></nav-bar>
    </div>

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
  </div>
</template>

<script>
import DetalhesVinho from "./vinho/DetalhesVinho";
import NavBar from "../NavBar.vue";

export default {
  name: "ListagemVinhos",
  components: {
    DetalhesVinho,
    NavBar,
  },
  data() {
    return {
      vinhos: [],
      itensPedido: [],
    };
  },
  methods: {
    getVinhos() {
      this.axios.get("vinho").then((response) => {
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
  },
  mounted() {
    this.getVinhos();
  },
};
</script>

<style>
.listagem-vinho {
  display: flex;
  flex-wrap: wrap;
}
</style>