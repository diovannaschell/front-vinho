<template>
  <div>
    <router-link to="/" class="ecommerce link">E-commerce</router-link>
    <router-link to="/admin" class="link">Admin</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.ecommerce {
  margin-right: 20px;
}
.link {
  color: #525252;
}
.link:hover {
  color: #9c27b0;
}
</style>