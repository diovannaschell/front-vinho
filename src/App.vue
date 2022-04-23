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
  margin-bottom: 20px;
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

.justify-content-end {
  justify-content: flex-end;
}

.align-itens-center {
  align-items: center;
}

input {
  border-radius: 5px;
  border: solid 1px gray;
  padding: 5px;
}

.text-center {
  text-align: center;
}

table {
  width: 100%;
}

tr:nth-child(even) {
  background: #ccc;
}
tr:nth-child(odd) {
  background: #fff;
}
table thead tr {
  background-color: rgb(215, 208, 208) !important;
}
table thead tr th {
  padding: 15px;
}
</style>
