<template>
  <div class="card">
    <h3>{{ vinho.nome }}</h3>
    <hr />
    <div class="d-flex justify-content-between align-itens-center">
      <label>Tipo: {{ vinho.tipo }}</label>
      <h4>R$ {{ vinho.valor }}</h4>
    </div>
    <hr />
    <div class="d-flex justify-content-between align-itens-center">
      quantidade selecionada: {{ quantidade }}
      <div>
        <button class="btn-menos" @click="diminuiQuantidade(vinho.id)">
          -
        </button>
        <button @click="aumentaQuantidade(vinho.id)">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetalhesVinho",
  props: {
    vinho: {
      type: Object,
      required: true,
    },
    itensPedido: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    diminuiQuantidade(id) {
      this.$emit("diminuiQuantidade", id);
    },
    aumentaQuantidade(id) {
      this.$emit("aumentaQuantidade", id);
    },
  },
  computed: {
    quantidade: function () {
      let item = this.itensPedido.find(
        (item) => item.vinhoId === this.vinho.id
      );

      return item ? item.quantidade : 0;
    },
  },
};
</script>

<style scoped>
.card {
  min-width: 250px;
  margin-right: 20px;
}

.btn-menos {
  margin-right: 5px;
}
</style>