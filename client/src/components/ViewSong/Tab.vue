<template lang="html">
  <panel title="Tabs">
    <textarea
      label="Tab"
      readonly
      multi-line
      v-model="song.tab"
    ></textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
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
