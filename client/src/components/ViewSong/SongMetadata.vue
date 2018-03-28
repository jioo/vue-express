<template lang="html">
  <panel title="Song Metadata">
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
          class="cyan accent-2"
          slot="action"
          :to="{
            name: 'song-edit',
            params: {
              songId: song.id
            }
          }"
          light
          medium
          middle>
          Edit
          <v-icon>edit</v-icon>
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && !isBookmarked"
          dark
          class="cyan"
          @click="bookmark">
          Bookmark
          <v-icon>edit</v-icon>
        </v-btn>

        <v-btn
          v-if="isUserLoggedIn && isBookmarked"
          dark
          class="cyan"
          @click="unbookmark">
          Unbookmark
          <v-icon>edit</v-icon>
        </v-btn>
      </v-flex>

      <v-flex md6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br />
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  data () {
    return {
      isBookmarked: false
    }
  },
  props: [
    'song'
  ],
  methods: {
    async bookmark () {
      try {
        // await BookmarksService.post({
        //   songId: this.song.id,
        // })
        console.log(this.song)
      } catch (err) {
        console.log(err)
      }
    },
    async unbookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (!this.isUserLoggedIn) {
      return
    }
    const bookmark = (await BookmarksService.index({
      songId: this.song.id,
      userId: this.user.id
    })).data
    this.isBookmarked = !!bookmark
    // console.log('song id: ', this.song.id)
    // console.log('user id: ', this.user.id)
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
