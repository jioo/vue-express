<template lang="html">
  <panel title="Youtube">
    <youtube
      :video-id="youtubeId"
      :player-width="500"
      :player-height="200"
      ></youtube>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style lang="css">
</style>
