<template lang="html">
  <v-layout>
    <v-flex xs8 offset-xs2>
      <panel title="Songs">
        <router-link
          slot="action"
          :to="{ name: 'songs-create' }">
          <v-btn
            class="cyan accent-2"
            light
            medium
            absolute
            right
            middle
            fab>
            <v-icon>add</v-icon>
          </v-btn>
        </router-link>

        <div
        v-for="song in songs"
        :key="song.id">
        {{ song.title }} -
        {{ song.artist }} -
        {{ song.album }}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style lang="css">
</style>
