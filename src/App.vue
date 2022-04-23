<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
}

.card {
  border: solid 1px #ededed;
  border-radius: 5px;
  background-color: white;
  padding: 15px;
}

hr {
  border: 0;
  border-top: 1px solid #d7d6d6;
}

.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-between {
  justify-content: space-between;
}

.align-itens-center {
  align-items: center;
}

.btn {
}
</style>
