<template>
  <div>
    <div class="d-flex justify-content-between align-itens-center">
      <h1>Listagem de Vinhos</h1>
      <nav-bar></nav-bar>
    </div>

    <hr />

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Data</th>
          <th>Itens</th>
          <th>Frete</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pedido in pedidos" :key="pedido.id">
          <td class="text-center">{{ pedido.id }}</td>
          <td class="text-center">{{ formatDate(pedido.data) }}</td>
          <td>
            <ul>
              <li v-for="item in pedido.itemPedidos" :key="item.id">
                {{ item.vinho.nome }}
              </li>
            </ul>
          </td>
          <td class="text-center">{{ pedido.valorFrete }}</td>
          <td class="text-center">{{ pedido.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NavBar from "../NavBar.vue";

export default {
  name: "ListagemPedidos",
  components: {
    NavBar,
  },
  data() {
    return {
      pedidos: [],
    };
  },
  methods: {
    buscarPedidos() {
      this.axios.get("pedidos").then((response) => {
        this.pedidos = response.data;
      });
    },
    formatDate(date) {
      let data = new Date(date);
      return data.toLocaleDateString("pt-br");
    },
  },
  mounted() {
    this.buscarPedidos();
  },
};
</script>

<style>
</style>
