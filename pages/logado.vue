<template>
  <div class="logado">
    <h1>Estamos logado caraiiiii</h1>
    <img src="../assets/img/wall.gif" width="300" height="300" alt="di caprio dance">
    <NuxtLink to="/nave">
      Home page
    </NuxtLink>
    <button type="button" class="logado__button" @click="handleLogout">
      Sair
    </button>
  </div>
</template>

<script>
export default {
  name: 'PageLogged',
  middleware: 'auth',
  methods: {
    handleLogout () {
      this.$auth.logout()
    }
  }
}
</script>

<style scoped>
.logado {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fceacd;
}

.logado__button {
  width: 300px;
  margin-top: 10px;
  background-color: rgb(175, 97, 97);
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px 0;
}
</style>
