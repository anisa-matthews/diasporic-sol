import Api from '@/services/Api'

export default {
  fetchAdminLogin () {
    return Api().get('admin-login')
  }
}