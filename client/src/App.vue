<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
/*  margin-top: 60px;*/
}

/*load background image first*/
:root:before{
  content: url("./../assets/bgfull.png");
  background-image: url("./../assets/bgfull.png");
  visibility: hidden;
  position: absolute;
  left: -999em;
}

/*define theme colors*/
:root{
  --brown:#966A54;
  --dark-blue:#251B3E;
}

body {
  background-image: url("./../assets/bgfull.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -3px;
  background-attachment: fixed;
}

@font-face {
  font-family: 'Luna';
  src: url('./../assets/Luna.ttf');
}

h1 {
  font-family: 'Luna';
  text-shadow: 2px 2px 4px #000000;
}

#back{
  position: fixed;
  width: 50px;
}

.text-div{
  background-color: var(--brown);
}

#sun{
  width: 20%;
}

</style>
