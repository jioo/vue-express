<template lang="html">
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <v-btn
        flat dark
        :to="{name: 'root'}">
          Tab Tracker
      </v-btn>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        flat
        dark
        :to="{name: 'songs'}">
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items
      v-if="!$store.state.isUserLoggedIn">
      <v-btn
        flat
        dark
        :to="{name: 'login'}">
        Login
      </v-btn>

      <v-btn
        flat
        dark
        :to="{name: 'register'}">
        Sign up
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items
      v-if="$store.state.isUserLoggedIn">
      <v-btn
        flat
        dark
        @click="logout">
        Log out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style lang="css">
.home {
  cursor: pointer;
}
</style>
