<template>
  <div>
    <div class="d-flex justify-content-between align-itens-center">
      <h1>Admin de Vinhos</h1>
      <nav-bar></nav-bar>
    </div>

    <hr />

    <formulario-cadastro
      :is-loading="isLoading"
      :vinho-selecionado="vinhoSelecionado"
      @salvar="
        (vinho) => {
          salvarVinho(vinho);
        }
      "
      @editar="
        (vinho) => {
          editarVinho(vinho);
        }
      "
    ></formulario-cadastro>

    <hr />

    <gerenciamento-vinho
      :vinhos="vinhos"
      @deletar="
        (vinhoId) => {
          deletarVinho(vinhoId);
        }
      "
      @editar="
        (vinhoId) => {
          popularFormVinho(vinhoId);
        }
      "
    ></gerenciamento-vinho>
  </div>
</template>

<script>
import NavBar from "../NavBar.vue";
import FormularioCadastro from "./FormularioCadatro.vue";
import GerenciamentoVinho from "./GerenciamentoVinho.vue";

export default {
  name: "IndexAdmin",
  components: {
    NavBar,
    FormularioCadastro,
    GerenciamentoVinho,
  },
  data() {
    return {
      vinhos: [],
      isLoading: false,
      vinhoSelecionado: {},
    };
  },
  methods: {
    findIndexVinho(vinhoId) {
      return this.vinhos.findIndex((item) => item.id === vinhoId);
    },
    popularFormVinho(vinhoId) {
      let indexItem = this.findIndexVinho(vinhoId);
      this.vinhoSelecionado = { ...this.vinhos[indexItem] };
    },
    salvarVinho(vinho) {
      this.axios
        .post("vinho", vinho)
        .then((response) => {
          alert("Vinho salvo com sucesso");
          this.vinhos.push(response.data);
        })
        .catch((error) => {
          alert(error.response.data.mensagem);
        });
    },
    buscarVinhos() {
      this.axios.get("vinho").then((response) => {
        this.vinhos = response.data;
      });
    },
    deletarVinho(vinhoId) {
      this.axios.delete("vinho/" + vinhoId).then(() => {
        let indexVinho = this.findIndexVinho(vinhoId);
        this.vinhos.splice(indexVinho, 1);
        alert("Vinho deletado com sucesso");
      });
    },
    editarVinho(vinho) {
      let vinhoId = vinho.id;
      delete vinho.id;
      this.axios.put("vinho/" + vinhoId, vinho).then((response) => {
        let indexVinho = this.findIndexVinho(vinhoId);
        this.vinhos[indexVinho] = response.data;
        alert("Vinho alterado com sucesso");
      });
    },
  },
  mounted() {
    this.buscarVinhos();
  },
};
</script>

<style>
</style>