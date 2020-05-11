<template>
  <div class="postcard-entry">
    <router-link class="entry" :to="'/entries/' + route">
      <b-card id="postcard" no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="'/uploads/'+ title + '.' + type" alt="Image"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="title" :sub-title="author">
              <b-card-text>{{ subtitle }}</b-card-text>
              <b-card-text><span id='category'>{{ category }}</span><span id='date'>{{ normalizeDate() }}</span></b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PostcardEntry',
  props: {
    route: String,
    type: String,
    title: String,
    subtitle: String,
    author: String,
    category: String,
    date: String
  },
  methods: {
    normalizeDate () {
      var options = { year: 'numeric', month: 'long' }
      const myDate = new Date(this.date)
      return new Intl.DateTimeFormat('en-US', options).format(myDate)
    }
  }
}

</script>
<style scoped>

#postcard{
  position: relative;
  color: var(--gray-dark);
  text-align: left;
  border-image: url('./../../assets/postcard1.png') 40 repeat;
  border-image-width:15px;
  border-image-outset:10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-height: 400px;
}

#postcard:hover{
  box-shadow: 10px 15px 2px rgba(0, 0, 0, 0.2);
  margin-top: -2px;
}

#postcard .card-img{
  max-height: 450px;
  object-fit: cover;
}

#category, #date{
  position: absolute;
  bottom: 0px;
}

#category{
  right: 1.25rem;
}

#date{
  left: 1.25rem;
}

h4 {
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
}

.entry:hover{
  text-decoration: none;
}

</style>
