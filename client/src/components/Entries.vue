<template>
  <div class="entries">
    <b-container id='filters'>
      <router-link :to="{ name: 'Home' }"><img id='sun' src='./../../assets/logo.png'></router-link>
      <div id='nav'>
        <b-nav vertical>
          <b-nav-item @click="addFilter('')">All</b-nav-item>
          <b-nav-item @click="addFilter('Travel')">Travel</b-nav-item>
          <b-nav-item @click="addFilter('Discover')">Discover</b-nav-item>
          <b-nav-item @click="addFilter('Journal')">Journal</b-nav-item>
          <b-nav-item @click="addFilter('Books')">Books</b-nav-item>
        </b-nav>
      </div>
    </b-container>
    <b-container class='text-div'>
      <div v-if="entries.length > 0">
        <div v-if="activeFilters.length > 0">
          <div v-if='filtered.length > 0'>
            <div v-for="entry in filtered" :key="entry.id">
              <div class='all-entries'>
                <router-link class="entry" :to="'/entries/' + entry._id">
                  <postcard-entry :type="entry.imageType" :title="entry.title" :subtitle="entry.subtitle" :author="entry.author" :category="entry.category" :date="entry.date"></postcard-entry>
                </router-link>
              </div>
            </div>
          </div>
          <div v-else><br><br>There are no posts in this category.</div>
        </div>
        <div v-else class='all-entries'>
          <h2 class='newest'>Featured</h2>
          <postcard-entry v-for="(entry, index) in entries" v-if="index == 0" class="newest" :key="entry.id" :route="entry._id" :type="entry.imageType" :title="entry.title" :subtitle="entry.subtitle" :author="entry.author" :category="entry.category" :date="entry.date"></postcard-entry>
          <postcard-entry v-else :key="entry.id" :route="entry._id" :type="entry.imageType" :title="entry.title" :subtitle="entry.subtitle" :author="entry.author" :category="entry.category" :date="entry.date"></postcard-entry>
        </div>
      </div>
      <div v-else>
        <br><br>
        There are no posts.
      </div>
    </b-container>
  </div>
</template>

<script>
import EntryService from '@/services/EntryService'
import PostcardEntry from './PostcardEntry.vue'
import PostcardPhoto from './PostcardPhoto.vue'
export default {
  name: 'entries',
  components: {
    PostcardEntry,
    PostcardPhoto
  },
  data () {
    return {
      entries: [],
      activeFilters: []
    }
  },
  mounted () {
    this.getEntries()
  },
  computed: {
    filtered () {
      if (this.activeFilters.length > 0) {
        const filter = this.activeFilters[0]
        let filtered = this.entries.filter(entry => entry.category === filter)
        return filtered
      }
    }
  },
  methods: {
    async getEntries () {
      const response = await EntryService.fetchEntries()
      this.entries = response.data.entries
    },
    addFilter (filter) {
      this.activeFilters.pop()
      console.log(this.activeFilters)
      if (filter !== '') {
        this.activeFilters.push(filter)
      }
    }
  }
}

</script>
<style scoped>

.text-div{
  max-width: 70%;
  float: right;
  min-height: 825px;
  padding: 60px 30px;

}

#filters{
  padding-top: 30px;
  max-width: 30%;
  float: left;
  min-height: 825px;
}

#nav{
  margin-top: 25%;
}

.nav-link{
  padding: 20px;
  color: white;
  font-family: 'Luna';
  text-shadow: 2px 2px 4px #000000;
}

.all-entries {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.newest{
  grid-column: 1 / 3;
}

.postcard-entry{
  margin: 20px;
}

</style>
