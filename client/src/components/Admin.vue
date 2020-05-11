<template>
  <div id="admin-dash">
    <router-link :to="{ name: 'Home' }"><img id='sun' src='./../../assets/logo.png'></router-link>
    <h1>Hi Anisa & Jasmine!</h1>
    <router-link v-bind:to="{ name: 'Add' }" class="">Add Entry</router-link>
    <div class="entry-table">
      <div v-if="entries.length > 0" class="table-wrap">
        <table>
          <tr>
            <td>Title</td>
            <td>Subtitle</td>
            <td>Category</td>
            <td>Author</td>
            <td width="500">Description</td>
            <td width="100" align="center">Action</td>
          </tr>
          <tr v-for="entry in entries" :key="entry.id">
            <td>{{ entry.title }}</td>
            <td>{{ entry.subtitle }}</td>
            <td>{{ entry.category }}</td>
            <td>{{ entry.author }}</td>
            <td>{{ entry.description }}</td>
            <td align="center">
              <a href="#">Edit</a> |
              <a href="#" @click="deleteEntry(entry.id)">Delete</a>
            </td>
          </tr>
        </table>
      </div>
      <div v-else>
        <br><br>
        There are no posts.
      </div>
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
      this.entries = response.data.entries
    },
    async deleteEntry (id) {
      await EntryService.deleteEntry(id)
      this.getEntries()
    }
  }
}
</script>
<style type="text/css">
body {
  margin-top: 20px;
}
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}

table th,
table tr {
  text-align: left;
}

table tr td {
  padding: 10px;
}

table tr:nth-child(odd) {
  background: rgba(242,242,242,.1);
}

table tr:nth-child(1) {
  background: var(--brown);
  color: #fff;
}

a {
  color: #4d7ef7;
  text-decoration: none;
}

#sun{
  width: 50px;
  margin-bottom: 40px;
}

</style>
