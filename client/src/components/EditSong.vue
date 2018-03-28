<template lang="html">
  <v-layout wrap row>
    <v-flex md12>
      <v-alert type="error" class="mb-2" :value="error">
        {{ error }}
      </v-alert>
    </v-flex>

    <v-flex md4>
      <panel title="Song Metadata">

        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="Image URL"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
        ></v-text-field>

        <v-text-field
          label="Youtube ID"
          required
          :rules="[required]"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex md8>
      <panel title="Song Structure" class="ml-3">
        <v-text-field
          label="Tab"
          multi-line
          required
          :rules="[required]"
          v-model="song.tab"
        ></v-text-field>

        <v-text-field
          label="Lyrics"
          multi-line
          required
          :rules="[required]"
          v-model="song.lyrics"
        ></v-text-field>
      </panel>

      <v-btn
        dark
        class="cyan"
        @click="save">
        Save Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      error: null,
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'This field is required.'
    }
  },
  methods: {
    async save () {
      // Validation
      const isFormValid = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!isFormValid) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      try {
        const songId = this.$store.state.route.params.songId
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style lang="css">
</style>
