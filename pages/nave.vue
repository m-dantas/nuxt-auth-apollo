<template>
  <div class="logado">
    <h1>Nave caraiiiii</h1>
  </div>
</template>

<script>
export default {
  name: 'PageNave',
  middleware: 'auth'
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
