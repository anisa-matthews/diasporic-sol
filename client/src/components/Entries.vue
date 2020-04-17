<template>
  <div class="entries">
    <h1>Entries</h1>
    This file will list all the entries.

    <div v-for="entry in entries" :key="entry.id">
      <p>
        <span><b>{{ entry.title }}</b></span><br />
        <span>{{ entry.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import EntryService from '@/services/EntryService'
export default {
  name: 'entries',
  data () {
    return {
      entries: []
    }
  },
  mounted () {
    this.getEntries()
  },
  methods: {
    async getEntries () {
      const response = await EntryService.fetchEntries()
      this.entries = response.data
    }
  }
}
</script>
