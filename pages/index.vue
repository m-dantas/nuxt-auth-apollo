<template>
  <form class="index" @submit.prevent="userLogin">
    <h1>É o testas carai </h1>
    <input v-model="user" class="index__input" type="text">
    <input v-model="password" class="index__input" type="password">
    <button type="submit" class="index__submit">
      Acessar
    </button>
  </form>
</template>

<script>
export default {
  name: 'PageIndex',
  middleware ({ $auth, redirect }) {
    if ($auth.$state.loggedIn) {
      return redirect('/logado')
    }
  },
  data () {
    return {
      user: 'mauriciodantas',
      password: 'dantas123'
    }
  },
  methods: {
    async userLogin () {
      try {
        await this.$auth.loginWith('local', { data: { name: this.user, password: this.password } })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $cor1;

  &__input {
    padding: 8px;
    width: 300px;
    margin-bottom: 16px;
  }

  &__submit {
    min-width: 300px;
    padding: 8px;
    cursor: pointer;
    color: #fff;
    background-color: $cor2;
  }

  &__input, &__submit {
    border: none;
    border-radius: 5px;
  }
}
</style>
