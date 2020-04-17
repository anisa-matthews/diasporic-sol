import Api from '@/services/Api'

export default {
  fetchEntries () {
    return Api().get('entries')
  }
}
