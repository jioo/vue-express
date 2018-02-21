<template lang="html">
  <div class="">
    <h1>Register</h1>

    <input type="email" name="email" v-model="email" placeholder="Please enter email" >
    <br />
    <input type="password" name="password" v-model="password" placeholder="Please enter password">
    <br />
    <button type="button" name="button" @click="register">Register</button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style lang="css">
</style>
