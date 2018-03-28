<template lang="html">
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <div v-html="error" class="error"></div>
        <br />

        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>

        <br />

        <v-text-field
          type="password"
          label="Password"
          v-model="password"
        ></v-text-field>
        <br />
        <v-btn
          dark
          type="button"
          class="cyan"
          name="button"
          @click="login"
        >Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
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
