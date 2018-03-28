<template lang="html">
  <panel title="Song Metadata">
    <textarea
      readonly
      v-model="song.lyrics"
    ></textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style lang="css">
textarea {
  width: 100%;
  font-family: monospace;
  height: 300px;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>
