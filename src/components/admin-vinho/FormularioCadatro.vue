<template>
  <div class="d-flex justify-content-between">
    <div>
      <label>Nome</label>
      <input v-model="vinho.nome" :disabled="isLoading" />
    </div>
    <div>
      <label>Tipo</label>
      <input v-model="vinho.tipo" :disabled="isLoading" />
    </div>
    <div>
      <label>Peso</label>
      <input type="number" v-model.number="vinho.peso" :disabled="isLoading" />
    </div>
    <div>
      <label>Valor</label>
      <input type="number" v-model.number="vinho.valor" :disabled="isLoading" />
    </div>
    <label class="carregando" v-if="isLoading">Carregando...</label>
    <button @click="salvar" :disabled="isLoading">Salvar</button>
  </div>
</template>

<script>
export default {
  name: "FormularioCadastro",
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    vinhoSelecionado: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      vinho: {
        nome: null,
        tipo: null,
        peso: null,
        valor: null,
      },
    };
  },
  methods: {
    salvar() {
      if (
        !this.vinho.nome ||
        !this.vinho.tipo ||
        !this.vinho.peso ||
        !this.vinho.valor
      ) {
        alert("Preencha todos os campos para continuar");
        return;
      }

      if (this.vinho.id) {
        this.$emit("editar", this.vinho);
      } else {
        this.$emit("salvar", this.vinho);
      }

      this.vinho = {
        nome: null,
        tipo: null,
        peso: null,
        valor: null,
      };
    },
  },
  watch: {
    vinhoSelecionado: function (val) {
      this.vinho = val;
    },
  },
};
</script>

<style scoped>
button {
  padding: 5px 15px;
}

.carregando {
  margin-right: 20px;
  color: blueviolet;
}
</style>