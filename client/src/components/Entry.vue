<template>
  <div class="entry">
    <b-container id='highlight'>
      <router-link :to="{ name: 'Home' }"><img id='sun' src='./../../assets/logo.png'></router-link>
      <h1>{{ entry.subtitle }}</h1>
      <img id='back' src='./../../assets/back.png' @click="$router.go(-1)">
    </b-container>
    <b-container class='text-div'>
      <h1>{{ entry.title }}</h1>
      <h5>{{ entry.author }} ~ {{ normalizeDate(entry.date) }} ~ {{ entry.category }}</h5>
      <postcard-photo type='rectangle' :img="'http://localhost:8081/'+ entry.title + '.' + entry.imageType"></postcard-photo><br>
      <div id='desc' v-for="(line,index) in entry.description.split('\n')" :key="index"><p>{{ line }}</p></div>
      <img id='back' src='./../../assets/back.png' @click="scrollToTop()">
    </b-container>
  </div>
</template>

<script>
import EntryService from '@/services/EntryService'
import PostcardPhoto from './PostcardPhoto.vue'
export default {
  name: 'entry',
  components: {
    PostcardPhoto
  },
  data () {
    return {
      entry: {}
    }
  },
  mounted () {
    this.getEntry()
  },
  methods: {
    async getEntry () {
      const response = await EntryService.getEntry(this.$route.params)
      this.entry = response.data.entry
    },
    normalizeDate (date) {
      var options = { year: 'numeric', month: 'long' }
      const myDate = new Date(date)
      return new Intl.DateTimeFormat('en-US', options).format(myDate)
    },
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

</script>
<style scoped>

.text-div{
  max-width: 70%;
  float: right;
  min-height: 825px;
  padding: 80px;
  text-align: left;
}

p{
  font-size: 1.20rem;
}

#highlight{
  padding-top: 30px;
  max-width: 30%;
  float: left;
  min-height: 825px;
}

#highlight h1{
  margin-top: 50%;
}

.postcard-photo{
  text-align: center;
  margin: 10px;
}

h1{
  line-height: normal;
}

h5{
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
}

#highlight #back{
  bottom: 10px;
  left: 25%;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.text-div #back{
  position: relative;
  margin-top: 60px;
  margin-left: 50%;
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
}

</style>
