<template>
  <div id="admin-add">
    <h1>Add Entry</h1><br>
    <b>Please fill out all boxes first, upload the image, and then add entry.</b><br>
    <div class="form">
      <div class=col>
        <input type="text" name="title" placeholder="Title" v-model="title">
        <input type="text" name="subtitle" placeholder="Subtitle" v-model="subtitle">
        <input type="text" name="author" placeholder="Author" v-model="author">
        Category: <select name="category" placeholder="Select" v-model="category">
          <option value="Travel">Travel</option>
          <option value="Discover">Discovery</option>
          <option value="Journal">Journal</option>
          <option value="Books">Books</option>
        </select>
          <picture-input ref="pictureInput" @change="onChanged" @remove="onRemoved" :width="400" :removable="true" removeButtonClass="ui red button" :height="400" accept="image/jpeg, image/png, image/gif" buttonClass="ui button primary" :customStrings="{
    upload: '<h1>Upload any images here!</h1>',
    drag: 'Drag an image or click here to select a file'}">
          </picture-input>
          <!-- <div v-if="this.message"><h4 id='message'>{{ message }}</h4></div>
          <div v-else>
          <button @click="attemptUpload" v-bind:class="{ disabled: !image }">
            Upload
          </button>
        </div> -->
      </div>
      <div class=col>
        <textarea rows="35" cols="25" placeholder="Type or paste your entry here" v-model="description"></textarea>
      </div>
    </div>
    <button class="app_post_btn" @click="addEntry">Add</button>
  </div>
</template>

<script>
import EntryService from '@/services/EntryService'
import PictureInput from 'vue-picture-input'
export default {
  name: 'NewEntry',
  data () {
    return {
      title: '',
      subtitle: '',
      author: '',
      category: '',
      description: '',
      image: '',
      message: ''
    }
  },
  components: {
    'picture-input': PictureInput
  },
  methods: {
    async addEntry () {
      await EntryService.addEntry({
        title: this.title,
        subtitle: this.subtitle,
        author: this.author,
        category: this.category,
        description: this.description,
        image: {data: this.image, type: this.image.type}
      })
      this.$router.push({ name: 'Entries' })
    },
    onChanged () {
      console.log('New picture loaded')
      if (this.$refs.pictureInput.file) {
        this.image = this.$refs.pictureInput.file
      } else {
        console.log('Old browser. No support for Filereader API')
      }
    },
    onRemoved () { this.image = '' },
    attemptUpload () {
      if (!this.title) {
        this.message = 'Please specify an entry title'
      } else {
        let name = String(this.title) + '.' + String(this.image.name).split('.').pop()
        let img = this.image
        EntryService.upload(img, name).then(res => {
          if (res.data.success) {
            this.message = 'Image uploaded successfully ✨'
          }
        }).catch(err => { console.error(err) })
      }
    }
  }
}

</script>

<style type="text/css">
#admin-add {
  margin-top: 60px;
}

.form input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
  margin-bottom: 10px;
}

.form select {
  width: 40%;
  margin: 10px;
}

.form {
  margin: auto;
  display: flex;
  padding: 20px;
}

button {
  background: #4d7ef7;
  color: #fff;
  padding: 10px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.app_post_btn{
  width: 522px;
}

.pic-uploaded{
  text-align: center;
  height: 400px;
}

</style>
