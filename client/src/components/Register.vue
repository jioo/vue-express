<template lang="html">
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <div v-html="error"></div>
        <br />

        <form
          name="form"
          autocomplete="off">

          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br />

          <v-text-field
            type="password"
            label="Password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
          <br />

        </form>
        <v-btn
          dark
          type="button"
          class="cyan"
          name="button"
          @click="register"
        >Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style lang="css">
</style>
