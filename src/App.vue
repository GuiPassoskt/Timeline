<template>
  <div id="app">
    <Timeline />
  </div>
</template>

<script>
import Timeline from './components/Timeline'

export default {
  name: 'app',
  components: {
    Timeline
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  box-sizing: border-box;
}
body {
  background-color: #eef0fc;
  font-family: Helvetica, sans-serif;
}
</style>
