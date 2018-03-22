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
import Panel from '@/components/Panel'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style lang="css">
</style>
