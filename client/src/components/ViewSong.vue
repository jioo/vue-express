<template lang="html">
  <v-layout>
  </v-layout>
</template>

<script>
// import SongsService from '@/services/SongsService'
export default {
  async mounted () {
    const songId = this.$store.state.route.params.songId
    console.log(songId)
    // const song = await SongsSerivce.show()
  }

}
</script>

<style lang="css">
</style>
