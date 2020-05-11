<template>
  <div class="home">
    <h1 id='home-title'>Diasporic Sol</h1>
    <h1>
      <router-link v-bind:to="{ name: 'Entries' }" class="nav-links" id="entries">Entries</router-link>
    </h1>
    <h1>
      <router-link v-bind:to="{ name: 'About' }" class="nav-links" id="about">About</router-link>
    </h1>
    <h1>
      <router-link v-bind:to="{ name: 'Contact' }" class="nav-links" id="contact">Contact</router-link>
    </h1>
    <h1>
      <router-link v-bind:to="{ name: 'Mission' }" class="nav-links" id="mission">Mission</router-link>
    </h1>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}

</script>
<style scoped>
#home-title {
  left: 0;
  line-height: 200px;
  margin-top: -100px;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  font-size: 84px;
}

.nav-links, a {
  color: white;
  text-decoration: none;
  position: absolute;
  text-align: center;
  font-size: 30px;
}

.nav-links:hover {
  color: white;
}

#entries {
  bottom: 15px;
  left: 45%;
}

#contact {
  top: 15px;
  left: 44%;
}

#mission {
  left: -5px;
  top: 45%;
  transform: rotate(90deg);
}

#about {
  right: -5px;
  top: 45%;
  transform: rotate(-90deg);
}

</style>
