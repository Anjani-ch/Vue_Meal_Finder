<template>
  <div id="container">
    <router-view />
  </div>
</template>

<style>
body {
  background: rgb(91, 91, 206);
}

#container {
  max-width: 1000px;
  margin: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.error-msg {
  color: red !important;
  background: white;
  padding: 10px 15px;
  border-radius: 15px;
}
</style>
