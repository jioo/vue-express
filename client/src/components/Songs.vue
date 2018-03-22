<template lang="html">
  <v-layout>
    <v-flex xs8 offset-xs2>
      <panel title="Songs">
          <v-btn
            class="cyan accent-2"
            slot="action"
            :to="{ name: 'songs-create' }"
            light
            medium
            absolute
            right
            middle
            fab>
            <v-icon>add</v-icon>
          </v-btn>
        <div
          v-for="song in songs"
          class="song"
          :key="song.id">
        <v-layout>
          <v-flex md6>
            <div class="song-title">
              {{ song.title }}
            </div>
            <div class="song-artist">
              {{ song.artist }}
            </div>
            <div class="song-genre">
              {{ song.genre }}
            </div>
            <v-btn
              dark
              class="cyan"
              :to="{
                name: 'song',
                params: {
                  songId: song.id
                }
              }">
              View
            </v-btn>
          </v-flex>

          <v-flex md6>
            <img class="album-image" :src="song.albumImageUrl" />
          </v-flex>
        </v-layout>
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
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
