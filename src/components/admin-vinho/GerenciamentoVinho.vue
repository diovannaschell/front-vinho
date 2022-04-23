<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Peso</th>
          <th>Valor</th>
          <th>Editar</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vinho in vinhos" :key="vinho.id">
          <td class="text-center">{{ vinho.id }}</td>
          <td class="text-center">{{ vinho.nome }}</td>
          <td class="text-center">{{ vinho.tipo }}</td>
          <td class="text-center">{{ vinho.peso }}</td>
          <td class="text-center">{{ vinho.valor }}</td>
          <td class="text-center">
            <button @click="editar(vinho.id)">Editar</button>
          </td>
          <td class="text-center">
            <button @click="deletar(vinho.id)">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "GerenciamentoVinho",
  props: {
    vinhos: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    editar(vinhoId) {
      this.$emit("editar", vinhoId);
    },
    deletar(vinhoId) {
      this.$emit("deletar", vinhoId);
    },
  },
};
</script>

<style>
</style>
