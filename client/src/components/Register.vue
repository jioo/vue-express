<template lang="html">
  <div class="">
    <h1>Register</h1>
    <div v-html="error" class="error"></div>
    <br />
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
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style lang="css">
.error {
  color: red;
}
</style>
