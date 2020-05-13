import Api from '@/services/Api'

export default {
  fetchEntries () {
    return Api().get('entries')
  },

  addEntry (params) {
    return Api().post('entries', params)
  },

  // upload (image, name) {
  //   const formData = new FormData()
  //   formData.append('entry-image', image, name)

  //   let config = {headers: { 'content-type': 'multipart/form-data' }}
  //   return Api().post('upload', formData, config)
  // },

  // updatePost (params) {
  //   return Api().put('entries/' + params.id, params)
  // },

  getEntry (params) {
    return Api().get('entries/' + params.id)
  },

  deleteEntry (id) {
    return Api().delete('entries/' + id)
  }
}
