<template lang="html">
  <div class="">
    <v-layout>
      <v-flex md6>
        <song-metadata :song="song" />
      </v-flex>

      <v-flex md6 d-flex class="ml-2">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex md6>
        <lyrics :song="song" />
      </v-flex>

      <v-flex md6 class="ml-2">
        <tab :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'

export default {
  data () {
    return {
      song: {}
    }
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style lang="css">
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>
