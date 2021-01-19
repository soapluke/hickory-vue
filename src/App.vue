<template style="background:#214023">
  <StartPage />
</template>

<script>
import StartPage from './components/StartPage'

export default {
  name: 'StartPageView',
  components: {
    StartPage
  }
}
</script>

<style>

.card {
  padding: 60px 0 60px 0;
}

html, body {
  background-color: #214023 !important;
}

#app {
  margin: 0 500px 0 500px;
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
